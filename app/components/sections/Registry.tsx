export default function Registry() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Registry</h2>
      
      <div className="text-center mb-8">
        <p className="text-amber-800 text-lg leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
          we've registered at the following stores.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <a
          href="https://www.target.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-lg border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all text-center group"
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
          <h3 className="text-2xl font-serif text-rose-600 mb-2">Target</h3>
          <p className="text-amber-700 text-sm">View our registry →</p>
        </a>

        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-lg border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all text-center group"
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📦</div>
          <h3 className="text-2xl font-serif text-rose-600 mb-2">Amazon</h3>
          <p className="text-amber-700 text-sm">View our registry →</p>
        </a>

        <a
          href="https://www.crateandbarrel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-lg border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all text-center group"
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🏠</div>
          <h3 className="text-2xl font-serif text-rose-600 mb-2">Crate & Barrel</h3>
          <p className="text-amber-700 text-sm">View our registry →</p>
        </a>

        <div className="bg-rose-50 p-8 rounded-lg border-2 border-rose-200 text-center">
          <div className="text-6xl mb-4">✈️</div>
          <h3 className="text-2xl font-serif text-rose-600 mb-2">Honeymoon Fund</h3>
          <p className="text-amber-700 text-sm">Help us make memories in Italy!</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-amber-700 italic">
          Thank you for your love and generosity!
        </p>
      </div>
    </div>
  );
}

