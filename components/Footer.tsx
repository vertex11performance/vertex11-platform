export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-8 py-8 text-center text-sm text-zinc-400">
      <p>
        © {new Date().getFullYear()} VERTEX11. Todos os direitos reservados.
      </p>
    </footer>
  );
}