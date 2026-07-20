export default function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold">
          Serviços
        </h2>

        <p className="mt-4 text-zinc-400">
          Soluções de desenvolvimento e performance para atletas de futebol.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold">
              Desenvolvimento Individual
            </h3>
            <p className="mt-3 text-zinc-400">
              Treino personalizado focado na evolução técnica, física e mental.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold">
              Avaliação de Performance
            </h3>
            <p className="mt-3 text-zinc-400">
              Análise do atleta e definição de objetivos de evolução.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold">
              Acompanhamento Contínuo
            </h3>
            <p className="mt-3 text-zinc-400">
              Monitorização e planeamento para maximizar resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}