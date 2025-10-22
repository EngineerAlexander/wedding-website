import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { code, primaryGuest, plusOne } = await request.json();

    if (!code || !primaryGuest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify the code
    const { data: guest, error: guestError } = await supabase
      .from('guests')
      .select('*')
      .eq('rsvp_code', code.toUpperCase())
      .single();

    if (guestError || !guest) {
      return NextResponse.json(
        { error: 'Invalid RSVP code' },
        { status: 404 }
      );
    }

    // Delete existing RSVPs for this guest
    await supabase.from('rsvps').delete().eq('guest_id', guest.id);

    // Insert primary guest RSVP
    const { error: primaryError } = await supabase.from('rsvps').insert({
      guest_id: guest.id,
      guest_name: primaryGuest.name,
      is_plus_one: false,
      attending: primaryGuest.attending,
      dietary_restrictions: primaryGuest.dietaryRestrictions || null,
    });

    if (primaryError) {
      throw primaryError;
    }

    // Insert plus one RSVP if applicable
    if (guest.plus_one_allowed && plusOne) {
      const { error: plusOneError } = await supabase.from('rsvps').insert({
        guest_id: guest.id,
        guest_name: plusOne.name,
        is_plus_one: true,
        attending: plusOne.attending,
        dietary_restrictions: plusOne.dietaryRestrictions || null,
      });

      if (plusOneError) {
        throw plusOneError;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your RSVP' },
      { status: 500 }
    );
  }
}

