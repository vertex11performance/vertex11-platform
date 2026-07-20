export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-500">
              Vertex11 Admin
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-zinc-400">
              Gestão e acompanhamento dos teus atletas.
            </p>
          </div>


          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
            Leo • Coach
          </div>

        </div>



        {/* Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">


          <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 transition hover:-translate-y-1">

            <p className="text-sm text-zinc-400">
              Total atletas
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              0
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Base de atletas Vertex11
            </p>

          </div>



          <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 transition hover:-translate-y-1">

            <p className="text-sm text-zinc-400">
              Sessões esta semana
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              0
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Planeamento semanal
            </p>

          </div>




          <div className="group rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/20 to-white/5 p-6 transition hover:-translate-y-1">

            <p className="text-sm text-red-300">
              Avaliações pendentes
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              0
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              Atletas a avaliar
            </p>

          </div>


        </div>



        {/* Área inferior */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">


          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-xl font-semibold">
              Últimos atletas inscritos
            </h3>

            <p className="mt-3 text-zinc-500">
              Os novos atletas aparecerão aqui.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-xl font-semibold">
              Próxima sessão
            </h3>

            <p className="mt-3 text-zinc-500">
              Ainda sem sessões agendadas.
            </p>

          </div>


        </div>


      </div>

    </main>
  );
}