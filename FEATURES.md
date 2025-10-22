# Wedding Website - Feature Guide

## 🎬 User Experience Flow

### 1. Landing Page (Envelope)
When visitors first arrive, they see:
- A beautiful wedding photo background with a soft overlay
- An elegant envelope in the center of the screen
- Text saying "You're Invited" with "Click to open"
- A decorative heart seal on the envelope
- Hover effect: envelope slightly enlarges
- Click: smooth opening animation

### 2. Main Interface (After Opening)
Once opened, the envelope disappears and reveals:
- **Header**: Your names in large elegant serif font
- **Subheader**: Wedding date in italics
- **Navigation**: 8 rounded buttons for each section
- **Postcard**: Central content area with vintage styling
- **Background**: Your wedding photo (fixed, parallax-ready)

### 3. Navigation Experience
- Click any section button to switch content
- Active section: Rose-colored button with shadow
- Inactive sections: White buttons that highlight on hover
- Smooth postcard flip animation (rotate + slide)
- Content changes seamlessly

## 📄 Section Details

### Our Story 💕
- Timeline format with border accents
- Three main sections: How We Met, First Date, The Proposal
- Space for your personal narrative
- Romantic closing message
- Left-border decorative elements

### Wedding Details 📅
- Two-column layout (Ceremony | Reception)
- Date, time, and location for each
- Dress code information card
- Unplugged ceremony request
- Clean, organized presentation

### Schedule ⏰
- Vertical timeline with dots
- Complete day-of schedule from arrival to farewell
- Time stamps with activity descriptions
- Fun, conversational tone
- Visual timeline connectors

### RSVP Form 📝
**Step 1: Code Entry**
- Clean input field for RSVP code
- Automatic uppercase conversion
- Validation with helpful error messages
- "Continue" button

**Step 2: RSVP Details**
- Personalized greeting with guest name
- Primary guest section:
  - Name (pre-filled)
  - Attending yes/no (radio buttons)
  - Dietary restrictions (text area)
- Plus one section (if allowed):
  - Guest name
  - Attending yes/no
  - Dietary restrictions
- Back and Submit buttons

**Step 3: Confirmation**
- Success message with emoji
- Thank you note
- Option to submit another RSVP

**Features:**
- Prevents duplicate RSVPs
- Validates RSVP codes in real-time
- Handles plus-ones automatically
- Stores all data in Supabase
- Mobile-friendly form fields

### Registry 🎁
- Four card layout (2x2 grid on desktop)
- Target, Amazon, Crate & Barrel links
- Honeymoon fund card
- Emoji icons for each registry
- Hover effects: scale up, shadow increase
- Links open in new tabs
- Grateful thank you message

### Travel & Accommodations ✈️
- **Hotel Recommendations**: 3 hotels with:
  - Name, address, phone
  - Special codes for discounts
  - Different price/style options
- **Getting There**:
  - Airport information
  - Driving/parking details
- **Transportation**:
  - Shuttle service details
  - Safety reminder
- **Things to Do**:
  - Local dining recommendations
  - Activity suggestions
  - Two-column layout

### Photos 📸
- 3x2 grid on desktop, 2x3 on mobile
- Square aspect ratio placeholders
- Photo icon and number labels
- Hover effect: slight zoom
- Social media hashtag card
- Instructions to replace placeholders
- Ready for actual photos

### Contact 📞
- General email contact card
- Bride's family contact
- Groom's family contact
- Wedding coordinator details
- All cards have consistent styling
- Phone and email links are clickable
- Response time expectation

## 🎨 Design Elements

### Color Palette
- **Primary**: Rose/pink tones (`rose-400`, `rose-500`, `rose-600`)
- **Accent**: Amber/gold tones (`amber-700`, `amber-800`, `amber-900`)
- **Background**: Cream/white (`amber-50`, `white`)
- **Borders**: Light rose (`rose-200`)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Sizes**: Responsive (4xl on desktop, adjusts on mobile)

### Animations
1. **Envelope Opening**
   - Duration: 0.8s
   - Effect: Flap rotation
   - Ease: Smooth

2. **Postcard Transition**
   - Duration: 0.6s
   - Effect: 3D rotate + slide
   - Exit/Enter: Opposite directions

3. **Navigation Buttons**
   - Hover: Scale 1.05
   - Active: Scale 1.05 + shadow
   - Transition: 200ms

4. **Registry Cards**
   - Hover: Scale 1.1
   - Hover: Increased shadow
   - Icon animation

### Responsive Design
- **Desktop (1024px+)**: Full layout, side-by-side cards
- **Tablet (768px-1023px)**: Adjusted spacing, single column
- **Mobile (<768px)**: 
  - Stacked navigation buttons
  - Single column layout
  - Larger touch targets
  - Optimized font sizes

## 🔒 Security Features

- Environment variables for API keys
- Server-side API routes
- Supabase Row Level Security ready
- No sensitive data in client code
- Input validation on forms
- SQL injection prevention (Supabase handles this)

## ⚡ Performance

- Static generation where possible
- Image optimization ready
- Minimal JavaScript bundle
- Lazy loading animations
- Fast page loads
- Lighthouse-optimized

## 📱 Mobile Experience

- Touch-friendly buttons (min 44px height)
- Scrollable postcards
- Responsive font sizes
- Optimized form inputs
- Native mobile keyboards
- Smooth touch animations

## 🎯 Accessibility

- Semantic HTML
- Labeled form inputs
- Focus states on interactive elements
- Readable color contrast
- Alt text ready for images
- Keyboard navigation support

## 💡 Customization Ideas

### Easy Wins
1. Change color scheme (find/replace rose- and amber-)
2. Swap background photo
3. Update fonts in layout.tsx
4. Add more photos to gallery
5. Customize button styles

### Medium Effort
1. Add a FAQ section
2. Create a photo booth upload feature
3. Add music/playlist section
4. Include wedding party bios
5. Add countdown timer to wedding date

### Advanced
1. Add Google Maps integration
2. Create admin dashboard for RSVPs
3. Send email confirmations
4. Add guest messaging system
5. Integration with wedding registry APIs

## 🎉 Unique Features

This website stands out with:
- **Unique Postcard Concept**: Not your typical wedding site
- **Envelope Interaction**: Memorable first impression
- **Smooth Animations**: Professional, polished feel
- **Complete RSVP System**: No third-party service needed
- **Easy Customization**: All in TypeScript/React
- **Free to Host**: Vercel free tier is more than enough
- **Scales Beautifully**: Works for 50 or 500 guests

---

**Your guests will love the interactive experience! 💐**

