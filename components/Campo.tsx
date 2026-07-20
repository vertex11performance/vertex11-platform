import Image from "next/image";

export default function Campo() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Texto */}

          <div>

            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Local de Treino
            </span>


            <h2 className="mt-6 text-4xl font-bold text-white">
              Treina num ambiente preparado para evoluir
            </h2>


            <p className="mt-6 text-lg leading-8 text-zinc-400">
              A Vertex11 realiza treinos individuais de futebol em Braga,
              num espaço pensado para desenvolver técnica, capacidade física
              e inteligência de jogo.
            </p>


            <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#090909] p-6">

              <h3 className="text-xl font-semibold text-white">
                Campo do Quinteiro
              </h3>


              <p className="mt-2 text-zinc-400">
                Braga • Treino Individual de Futebol
              </p>


              <p className="mt-4 text-sm text-zinc-500">
                Um ambiente dedicado ao crescimento e evolução de cada atleta.
              </p>

            </div>

          </div>


          {/* Imagem do Campo */}

          <div className="relative h-[450px] overflow-hidden rounded-3xl border border-zinc-800">

            <Image
              src="/campo/campo.jpg"
              alt="Campo de treino Vertex11"
              fill
              className="object-cover"
              priority
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />


            <div className="absolute bottom-6 left-6">

              <p className="text-2xl font-bold text-white">
                Vertex11
              </p>

              <p className="text-sm text-zinc-300">
                Performance Football
              </p>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
}