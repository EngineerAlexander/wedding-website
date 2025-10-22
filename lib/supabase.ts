import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn('⚠️  Supabase environment variables are not set. Please configure them in .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Guest = {
  id: string;
  rsvp_code: string;
  primary_guest_name: string;
  email: string;
  plus_one_allowed: boolean;
  created_at: string;
};

export type RSVP = {
  id: string;
  guest_id: string;
  guest_name: string;
  is_plus_one: boolean;
  attending: boolean;
  dietary_restrictions: string | null;
  responded_at: string;
};

