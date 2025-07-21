export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Pixelab logo" className="h-10" />
        <h1 className="text-2xl font-summer">PIXELAB</h1>
      </div>
      <nav className="space-x-6 text-sm">
        <a href="/" className="hover:text-pixelabPink">Inicio</a>
        <a href="/about" className="hover:text-pixelabPink">Nosotros</a>
        <a href="/games" className="hover:text-pixelabPink">Juegos</a>
        <a href="/community" className="hover:text-pixelabPink">Comunidad</a>
        <a href="/contact" className="hover:text-pixelabPink">Contacto</a>
      </nav>
    </header>
  );
}
