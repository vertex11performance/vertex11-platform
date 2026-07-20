export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold tracking-tight">
        Desenvolve o teu potencial.
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-zinc-300">
        A Vertex11 é uma plataforma de desenvolvimento de performance
        futebolística para atletas que procuram evoluir ao mais alto nível.
      </p>

      <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200">
        Começar evolução
      </button>
    </section>
  );
}
