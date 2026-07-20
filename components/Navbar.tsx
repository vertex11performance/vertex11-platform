export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-8 py-6">
      <div className="text-xl font-bold tracking-wider">
        VERTEX11
      </div>

      <div className="flex gap-6 text-sm text-zinc-300">
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Contactos</a>
        <a href="#">Área Privada</a>
      </div>
    </nav>
  );
}