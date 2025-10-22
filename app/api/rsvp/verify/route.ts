import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'RSVP code is required' },
        { status: 400 }
      );
    }

    const { data: guest, error } = await supabase
      .from('guests')
      .select('*')
      .eq('rsvp_code', code.toUpperCase())
      .single();

    if (error || !guest) {
      return NextResponse.json(
        { error: 'Invalid RSVP code' },
        { status: 404 }
      );
    }

    // Check if they've already RSVP'd
    const { data: existingRsvp } = await supabase
      .from('rsvps')
      .select('*')
      .eq('guest_id', guest.id);

    return NextResponse.json({
      guest,
      hasRsvped: existingRsvp && existingRsvp.length > 0,
    });
  } catch (error) {
    console.error('Error verifying RSVP code:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}

