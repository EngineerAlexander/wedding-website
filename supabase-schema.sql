-- Create guests table
CREATE TABLE guests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rsvp_code TEXT UNIQUE NOT NULL,
  primary_guest_name TEXT NOT NULL,
  email TEXT NOT NULL,
  plus_one_allowed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create rsvps table
CREATE TABLE rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_id UUID REFERENCES guests(id) ON DELETE CASCADE,
  guest_name TEXT NOT NULL,
  is_plus_one BOOLEAN DEFAULT false,
  attending BOOLEAN NOT NULL,
  dietary_restrictions TEXT,
  responded_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_guests_rsvp_code ON guests(rsvp_code);
CREATE INDEX idx_rsvps_guest_id ON rsvps(guest_id);

-- Example: Insert sample guests for testing
-- INSERT INTO guests (rsvp_code, primary_guest_name, email, plus_one_allowed) 
-- VALUES 
--   ('SMITH2025', 'John Smith', 'john@example.com', true),
--   ('JONES2025', 'Jane Jones', 'jane@example.com', false);

