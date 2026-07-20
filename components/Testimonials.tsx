export default function Testimonials() {
  return (
    <section id="testemunhos" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            Testemunhos
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            A evolução dos atletas fala por si
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
            Resultados reais de atletas que procuram evoluir através de
            treino individual e acompanhamento personalizado.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2">


          {/* Octávio */}

          <div className="rounded-3xl border border-zinc-800 bg-[#090909] p-8">

            <p className="text-lg leading-8 text-zinc-300">
              "Boa tarde mister, gostava de ter um feedback. Graças aos seus
              treinos com o Octávio, ele passou a finalizar muito melhor e isso
              chamou a atenção do Gil Vicente. Esta semana começou a treinar
              com a equipa nacional Sub-15. Sem dúvida que os seus treinos o
              ajudaram a chegar a esta oportunidade. Muito obrigado."
            </p>


            <div className="mt-6 border-t border-zinc-800 pt-5">

              <p className="font-semibold text-white">
                Pai de atleta Sub-14
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                Clube: Celta Academy Braga
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Evolução técnica e novas oportunidades
              </p>

            </div>

          </div>



          {/* Antso */}

          <div className="rounded-3xl border border-zinc-800 bg-[#090909] p-8">

            <p className="text-lg leading-8 text-zinc-300">
              "Muito obrigada pela semana de treinos, o Antso gostou muito.
              Vamos tentar planear algumas sessões individuais também durante
              a época consigo, mister."
            </p>


            <div className="mt-6 border-t border-zinc-800 pt-5">

              <p className="font-semibold text-white">
                Pai de atleta Sub-15
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                Clube: Gil Vicente
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Confiança e acompanhamento contínuo
              </p>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
}