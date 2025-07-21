export default function GamesPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Nuestros Juegos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white/5 p-4 rounded-xl shadow-md">
            <div className="aspect-video bg-gray-700 rounded-md mb-2"></div>
            <h3 className="text-xl font-semibold">Nombre del Juego {id}</h3>
            <p className="text-sm text-gray-400">Descripción breve del juego en desarrollo.</p>
            <button className="mt-2 px-4 py-1 bg-pixelabPink text-black rounded-full">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
