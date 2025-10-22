export default function Contact() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Contact Us</h2>
      
      <div className="text-center mb-8">
        <p className="text-amber-800 text-lg">
          Have questions? We're here to help!
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-xl font-serif text-rose-600 mb-4 text-center">For General Questions</h3>
          <div className="text-center space-y-2 text-amber-800">
            <p className="font-semibold">Email us at:</p>
            <a 
              href="mailto:wedding@example.com" 
              className="text-rose-500 hover:text-rose-600 underline text-lg"
            >
              wedding@example.com
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
            <h3 className="text-lg font-serif text-rose-600 mb-3">Bride's Family</h3>
            <div className="space-y-2 text-amber-800">
              <p className="font-semibold">Mother of the Bride</p>
              <p className="text-sm">Jane Doe</p>
              <a href="tel:555-123-4567" className="text-rose-500 hover:text-rose-600 text-sm">
                (555) 123-4567
              </a>
            </div>
          </div>

          <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
            <h3 className="text-lg font-serif text-rose-600 mb-3">Groom's Family</h3>
            <div className="space-y-2 text-amber-800">
              <p className="font-semibold">Mother of the Groom</p>
              <p className="text-sm">Mary Smith</p>
              <a href="tel:555-987-6543" className="text-rose-500 hover:text-rose-600 text-sm">
                (555) 987-6543
              </a>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-xl font-serif text-rose-600 mb-3 text-center">Wedding Coordinator</h3>
          <div className="text-center space-y-2 text-amber-800">
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm">Perfect Day Events</p>
            <a href="tel:555-246-8135" className="text-rose-500 hover:text-rose-600">
              (555) 246-8135
            </a>
            <br />
            <a href="mailto:sarah@perfectdayevents.com" className="text-rose-500 hover:text-rose-600 text-sm underline">
              sarah@perfectdayevents.com
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-amber-700 italic">
            We'll do our best to respond to all inquiries within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

