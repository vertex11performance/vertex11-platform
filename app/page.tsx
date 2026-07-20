import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          VERTEX11
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-zinc-300">
          Football Performance Platform
        </p>

        <p className="mt-4 max-w-xl text-zinc-400">
          Desenvolvimento individual de atletas através de treino,
          avaliação e acompanhamento personalizado.
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200">
          Inscrever Atleta
        </button>
      </section>
    </main>
  );
}