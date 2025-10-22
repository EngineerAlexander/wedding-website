# Quick Setup Guide

Follow these steps to get your wedding website up and running!

## 1. Create Supabase Project (5 minutes)

1. Go to [https://supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in the details:
   - **Name**: `wedding-website` (or whatever you prefer)
   - **Database Password**: Create a strong password (save it somewhere safe!)
   - **Region**: Choose the one closest to your guests
4. Click "Create new project" and wait 2-3 minutes for setup

## 2. Get Your API Keys

1. In your Supabase project, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public key** (a long string starting with `eyJ...`)

## 3. Configure Environment Variables

1. In your project folder, create a file named `.env.local`
2. Add these lines (replace with your actual values):

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## 4. Create Database Tables

1. In Supabase, go to **SQL Editor** (left sidebar)
2. Click "New query"
3. Copy and paste the contents of `supabase-schema.sql` from your project
4. Click "Run" (or press Ctrl+Enter / Cmd+Enter)
5. You should see "Success. No rows returned"

## 5. Add Your Guests

1. Go to **Table Editor** → **guests** table
2. Click "Insert" → "Insert row"
3. Fill in the fields:
   - **rsvp_code**: Create a unique code (e.g., `SMITH2025`)
   - **primary_guest_name**: Guest's name (e.g., `John Smith`)
   - **email**: Guest's email
   - **plus_one_allowed**: Check if they can bring a plus one
4. Click "Save"
5. Repeat for all your guests

### Quick Insert Multiple Guests

You can also use SQL to insert multiple guests at once:

1. Go to **SQL Editor**
2. Paste this template and modify with your guest info:

\`\`\`sql
INSERT INTO guests (rsvp_code, primary_guest_name, email, plus_one_allowed) 
VALUES 
  ('SMITH2025', 'John Smith', 'john@example.com', true),
  ('JONES2025', 'Jane Jones', 'jane@example.com', false),
  ('BROWN2025', 'Bob Brown', 'bob@example.com', true);
\`\`\`

3. Click "Run"

## 6. Customize Your Content

Edit these files to personalize your website:

- **Names & Date**: `app/page.tsx` (line 54-59)
- **Our Story**: `app/components/sections/OurStory.tsx`
- **Wedding Details**: `app/components/sections/WeddingDetails.tsx`
- **Schedule**: `app/components/sections/Schedule.tsx`
- **Travel Info**: `app/components/sections/Travel.tsx`
- **Contact Info**: `app/components/sections/Contact.tsx`

## 7. Add Your Background Photo

1. Find a beautiful wedding or engagement photo
2. Upload it to Cloudinary, Imgur, or similar (or put in `/public` folder)
3. Update `app/page.tsx` line 41 with your image URL

## 8. Test It Out!

\`\`\`bash
npm run dev
\`\`\`

Then open [http://localhost:3000](http://localhost:3000) and:

1. Click the envelope to open it
2. Navigate to the RSVP section
3. Enter one of your guest codes
4. Fill out the form and submit
5. Check Supabase → **Table Editor** → **rsvps** to see the submission!

## 9. Deploy to Vercel (10 minutes)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"
7. Your site will be live at `your-project.vercel.app`!

## 10. Share Your Website!

Send your guests:
- The website URL
- Their unique RSVP code

You can include the RSVP code on physical invitations or in email invitations.

---

## Need Help?

Check the main [README.md](README.md) for detailed documentation and troubleshooting tips.

**Happy wedding planning! 💍✨**

