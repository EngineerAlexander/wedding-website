export default function WeddingDetails() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Wedding Details</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-rose-600 mb-4 text-center">Ceremony</h3>
          <div className="space-y-3 text-amber-800">
            <div>
              <p className="font-semibold text-rose-500">Date & Time</p>
              <p>Saturday, June 14, 2025</p>
              <p>4:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-rose-500">Location</p>
              <p>Garden Pavilion</p>
              <p>123 Wedding Lane</p>
              <p>Beautiful City, ST 12345</p>
            </div>
          </div>
        </div>

        <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-rose-600 mb-4 text-center">Reception</h3>
          <div className="space-y-3 text-amber-800">
            <div>
              <p className="font-semibold text-rose-500">Date & Time</p>
              <p>Saturday, June 14, 2025</p>
              <p>6:00 PM - 11:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-rose-500">Location</p>
              <p>Grand Ballroom</p>
              <p>123 Wedding Lane</p>
              <p>Beautiful City, ST 12345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 p-6 rounded-lg border-2 border-rose-200 text-center">
        <h3 className="text-xl font-serif text-rose-600 mb-3">Dress Code</h3>
        <p className="text-amber-800">Formal Attire</p>
        <p className="text-sm text-amber-600 mt-2">
          Think cocktail dresses, suits, and your dancing shoes!
        </p>
      </div>

      <div className="text-center">
        <p className="text-amber-800 italic">
          We kindly request an unplugged ceremony. Please silence your phones and be present in the moment with us.
        </p>
      </div>
    </div>
  );
}

