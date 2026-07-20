export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black p-10">

      <h1 className="text-3xl font-bold text-white">
        Dashboard
      </h1>

      <p className="mt-2 text-zinc-400">
        Bem-vindo à área privada da Vertex11.
      </p>


      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm text-zinc-400">
            Atletas
          </h2>

          <p className="mt-3 text-4xl font-bold text-white">
            1
          </p>
        </div>


        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm text-zinc-400">
            Sessões esta semana
          </h2>

          <p className="mt-3 text-4xl font-bold text-white">
            0
          </p>
        </div>


        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm text-zinc-400">
            Avaliações pendentes
          </h2>

          <p className="mt-3 text-4xl font-bold text-white">
            0
          </p>
        </div>

      </div>

    </main>
  );
}