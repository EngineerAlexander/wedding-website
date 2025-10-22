export default function Schedule() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Schedule</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="relative border-l-4 border-rose-300 pl-8 space-y-8">
          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">3:30 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Guest Arrival</p>
            <p className="text-amber-700">Please arrive early to find your seat and enjoy the garden atmosphere</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">4:00 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Ceremony</p>
            <p className="text-amber-700">The main event! We promise to keep it sweet and (relatively) short</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">4:30 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Cocktail Hour</p>
            <p className="text-amber-700">Enjoy drinks, hors d'oeuvres, and mingling while we take photos</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">6:00 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Reception Begins</p>
            <p className="text-amber-700">Grand entrance, first dances, and dinner service</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">7:30 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Toasts & Cake Cutting</p>
            <p className="text-amber-700">Heartfelt speeches (grab tissues) and delicious dessert</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">8:00 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Dance Party!</p>
            <p className="text-amber-700">Time to celebrate! The dance floor is calling your name</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-rose-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-serif text-rose-600 mb-1">11:00 PM</h3>
            <p className="text-lg text-amber-900 font-semibold">Grand Farewell</p>
            <p className="text-amber-700">Sparkler send-off as we begin our journey as newlyweds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

