# Wedding Website - Postcard Theme

A beautiful, interactive wedding website featuring animated postcards for different sections. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

- 🎨 Animated envelope hero that "opens" to reveal content
- 💌 Postcard-style sections with smooth transitions
- 📝 RSVP system with unique guest codes
- 👥 Plus-one support
- 🗄️ Supabase backend for guest management
- 📱 Fully responsive design
- ✨ Beautiful animations with Framer Motion

## Sections

1. **Our Story** - Share your love story
2. **Wedding Details** - Ceremony and reception information
3. **Schedule** - Timeline for the wedding day
4. **RSVP** - Guest RSVP with unique codes
5. **Registry** - Links to your registries
6. **Travel** - Hotels, transportation, and local info
7. **Photos** - Gallery of engagement/couple photos
8. **Contact** - Contact information for questions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works great!)

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Set Up Supabase

1. Go to [https://supabase.com](https://supabase.com) and create a new project
2. Wait for your database to be provisioned
3. Go to **Project Settings** → **API** and copy:
   - Project URL
   - anon/public key

### 3. Create Database Tables

1. In your Supabase project, go to **SQL Editor**
2. Create a new query and paste the contents of `supabase-schema.sql`
3. Run the query to create your tables

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
\`\`\`

Replace the values with your actual Supabase credentials.

### 5. Add Guest Data

In Supabase, go to **Table Editor** → **guests** and add your guests:

Example:
\`\`\`sql
INSERT INTO guests (rsvp_code, primary_guest_name, email, plus_one_allowed) 
VALUES 
  ('SMITH2025', 'John Smith', 'john@example.com', true),
  ('JONES2025', 'Jane Jones', 'jane@example.com', false);
\`\`\`

Tips for RSVP codes:
- Use last names + year (e.g., SMITH2025)
- Keep them easy to type
- Make them unique and memorable
- Consider using ALL CAPS for consistency

### 6. Customize Content

Update the following to personalize your site:

1. **Names & Date** - `app/page.tsx` (lines 52-57)
2. **Metadata** - `app/layout.tsx` (lines 17-20)
3. **Background Image** - `app/page.tsx` (line 41) - Replace with your own photo URL
4. **Our Story** - `app/components/sections/OurStory.tsx`
5. **Wedding Details** - `app/components/sections/WeddingDetails.tsx`
6. **Schedule** - `app/components/sections/Schedule.tsx`
7. **Registry Links** - `app/components/sections/Registry.tsx`
8. **Travel Info** - `app/components/sections/Travel.tsx`
9. **Photos** - `app/components/sections/Photos.tsx` - Replace placeholder with actual images
10. **Contact Info** - `app/components/sections/Contact.tsx`

### 7. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your website.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in **Project Settings** → **Environment Variables**:
   - \`NEXT_PUBLIC_SUPABASE_URL\`
   - \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
5. Deploy!

Vercel will automatically deploy updates when you push to your main branch.

## Background Image

To use your own wedding photo as the background:

1. Upload your image to a hosting service (Cloudinary, Imgur, etc.) or
2. Place it in the \`/public\` folder
3. Update the \`backgroundImage\` URL in \`app/page.tsx\`:

\`\`\`tsx
backgroundImage: 'linear-gradient(rgba(255, 245, 235, 0.7), rgba(254, 243, 199, 0.7)), url(/your-photo.jpg)',
\`\`\`

## Managing RSVPs

### View RSVPs in Supabase

1. Go to your Supabase project
2. Navigate to **Table Editor** → **rsvps**
3. You'll see all submitted RSVPs with guest names, attendance status, and dietary restrictions

### Export RSVPs

In Supabase SQL Editor, run:

\`\`\`sql
SELECT 
  g.primary_guest_name,
  g.email,
  r.guest_name,
  r.is_plus_one,
  r.attending,
  r.dietary_restrictions,
  r.responded_at
FROM rsvps r
JOIN guests g ON r.guest_id = g.id
ORDER BY g.primary_guest_name, r.is_plus_one;
\`\`\`

You can export the results as CSV for your wedding planner or caterer.

## Customization Tips

### Change Color Scheme

The website uses Tailwind's color classes. To change the color scheme:

- **Rose/Pink** - Currently uses \`rose-\` and \`amber-\` colors
- Find and replace color classes throughout the components
- Common classes: \`bg-rose-400\`, \`text-amber-800\`, \`border-rose-200\`

### Add More Sections

1. Create a new component in \`app/components/sections/\`
2. Add the section to the \`Section\` type in \`app/components/Navigation.tsx\`
3. Add a navigation button in the \`sections\` array
4. Add a case in the \`renderSection()\` switch statement in \`app/page.tsx\`

### Modify Animations

Animations are powered by Framer Motion. Adjust the animation values in:
- \`app/components/Envelope.tsx\` - Opening animation
- \`app/components/Postcard.tsx\` - Transition effects

## Troubleshooting

### "Invalid RSVP code" Error
- Verify the code exists in your \`guests\` table
- Check that codes are uppercase in the database
- Ensure \`rsvp_code\` is unique

### RSVP Not Submitting
- Check browser console for errors
- Verify your Supabase environment variables are set correctly
- Ensure your Supabase project is active
- Check Row Level Security (RLS) policies if enabled

### Styles Not Loading
- Clear your browser cache
- Restart the development server
- Check that Tailwind CSS is properly configured

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Deployment**: Vercel (recommended)

## License

This project is open source and available for personal use.

## Support

For questions or issues, feel free to open an issue on GitHub or reach out to the developer.

---

**Congratulations on your upcoming wedding! 💍**
