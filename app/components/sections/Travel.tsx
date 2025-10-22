export default function Travel() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Travel & Accommodations</h2>
      
      <div className="space-y-8">
        <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-rose-600 mb-4">🏨 Recommended Hotels</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-rose-300 pl-4">
              <h4 className="text-lg font-semibold text-amber-900">The Grand Hotel</h4>
              <p className="text-amber-700">456 Main Street, Beautiful City, ST 12345</p>
              <p className="text-amber-600 text-sm mt-1">(555) 123-4567</p>
              <p className="text-rose-500 text-sm mt-2">
                Use code WEDDING2025 for a special rate! Book by April 1st.
              </p>
            </div>

            <div className="border-l-4 border-rose-300 pl-4">
              <h4 className="text-lg font-semibold text-amber-900">Garden Inn & Suites</h4>
              <p className="text-amber-700">789 Oak Avenue, Beautiful City, ST 12345</p>
              <p className="text-amber-600 text-sm mt-1">(555) 987-6543</p>
              <p className="text-rose-500 text-sm mt-2">
                Mention our wedding for a discounted rate!
              </p>
            </div>

            <div className="border-l-4 border-rose-300 pl-4">
              <h4 className="text-lg font-semibold text-amber-900">Cozy Bed & Breakfast</h4>
              <p className="text-amber-700">321 Elm Street, Beautiful City, ST 12345</p>
              <p className="text-amber-600 text-sm mt-1">(555) 246-8135</p>
              <p className="text-rose-500 text-sm mt-2">
                A charming local option with breakfast included!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-rose-600 mb-4">✈️ Getting Here</h3>
          <div className="space-y-3 text-amber-800">
            <div>
              <p className="font-semibold text-rose-500">By Air</p>
              <p>Beautiful City International Airport (BCA) is 25 minutes from the venue.</p>
              <p className="text-sm text-amber-600">Rental cars and ride-sharing services are available at the airport.</p>
            </div>
            <div>
              <p className="font-semibold text-rose-500">By Car</p>
              <p>Free parking is available at the venue.</p>
              <p className="text-sm text-amber-600">Valet service will be provided.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-rose-600 mb-4">🚗 Transportation</h3>
          <p className="text-amber-800">
            A complimentary shuttle will run between The Grand Hotel and the venue throughout the evening. 
            The shuttle will begin at 3:00 PM and make continuous loops until midnight.
          </p>
          <p className="text-rose-500 mt-3 font-semibold">
            Please don't drink and drive! Use our shuttle, arrange a ride, or take advantage of local ride-sharing services.
          </p>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-rose-600 mb-4 text-center">🗺️ Things to Do</h3>
          <p className="text-amber-800 text-center mb-4">
            Making a weekend of it? Here are some local favorites:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-amber-800">
            <div>
              <p className="font-semibold text-rose-500">Dining</p>
              <ul className="text-sm space-y-1">
                <li>• The Rustic Table - Farm-to-table</li>
                <li>• Bella Italia - Authentic Italian</li>
                <li>• Harbor Grill - Fresh Seafood</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-rose-500">Activities</p>
              <ul className="text-sm space-y-1">
                <li>• Downtown Historic District</li>
                <li>• Botanical Gardens</li>
                <li>• Riverside Walking Trail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

