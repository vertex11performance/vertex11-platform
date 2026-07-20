export default function Programs() {
  return (
    <section id="programas" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Programas Vertex11
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
            Planos de treino individualizados para jogadores que procuram
            evoluir a sua técnica, performance física e inteligência de jogo.
          </p>
        </div>


        {/* Tipos de acompanhamento */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-[#090909] p-6">

            <h3 className="text-xl font-semibold text-white">
              Treino Individual
            </h3>

            <p className="mt-3 text-zinc-400">
              Sessões personalizadas focadas no desenvolvimento técnico,
              físico e na tomada de decisão em campo.
            </p>

          </div>


          <div className="rounded-2xl border border-zinc-800 bg-[#090909] p-6">

            <h3 className="text-xl font-semibold text-white">
              Performance Pro
            </h3>

            <p className="mt-3 text-zinc-400">
              Preparação específica para atletas que procuram elevar o seu
              rendimento competitivo.
            </p>

          </div>


          <div className="rounded-2xl border border-zinc-800 bg-[#090909] p-6">

            <h3 className="text-xl font-semibold text-white">
              Plano Personalizado
            </h3>

            <p className="mt-3 text-zinc-400">
              Um processo contínuo de evolução com objetivos definidos e
              acompanhamento individual.
            </p>

          </div>

        </div>


        {/* Pacotes */}

        <div className="mt-16">

          <h3 className="text-center text-2xl font-bold text-white">
            Escolhe o teu plano de evolução
          </h3>


          <div className="mt-8 grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl border border-zinc-800 p-6 text-center">

              <h4 className="text-xl font-semibold text-white">
                1x Semana
              </h4>

              <p className="mt-3 text-zinc-400">
                Ideal para iniciar o processo e trabalhar objetivos
                específicos.
              </p>

            </div>


            <div className="rounded-2xl border border-red-600/40 bg-red-600/5 p-6 text-center">

              <h4 className="text-xl font-semibold text-white">
                2x Semana
              </h4>

              <p className="mt-3 text-zinc-400">
                Maior consistência e evolução mais rápida através de um
                acompanhamento regular.
              </p>

            </div>


            <div className="rounded-2xl border border-zinc-800 p-6 text-center">

              <h4 className="text-xl font-semibold text-white">
                Plano Mensal
              </h4>

              <p className="mt-3 text-zinc-400">
                Um plano completo adaptado aos objetivos e necessidades
                do atleta.
              </p>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}