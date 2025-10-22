export default function Photos() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Photos</h2>
      
      <div className="text-center mb-8">
        <p className="text-amber-800 text-lg">
          A glimpse into our journey together
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 rounded-lg border-4 border-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-sm text-amber-700">Photo {i}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-rose-50 p-6 rounded-lg border-2 border-rose-200 text-center mt-8">
        <h3 className="text-xl font-serif text-rose-600 mb-3">Share Your Photos!</h3>
        <p className="text-amber-800 mb-3">
          We'd love to see your photos from our special day. Share them with us using:
        </p>
        <p className="text-2xl font-serif text-rose-500">#OurWedding2025</p>
      </div>

      <div className="text-center text-sm text-amber-600 italic">
        Replace these placeholders with your actual engagement and couple photos
      </div>
    </div>
  );
}

