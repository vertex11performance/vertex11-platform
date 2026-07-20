import {
  ClipboardCheck,
  Goal,
  Zap,
  Users,
} from "lucide-react";

export default function Services() {
  return (
    <section id="servicos" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            Metodologia Vertex11
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Um processo criado para desenvolver atletas
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
            Cada atleta é diferente. Por isso, cada plano de treino é
            construído de acordo com objetivos, características e necessidades
            individuais.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="group rounded-3xl border border-zinc-800 bg-[#090909] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/40">

            <ClipboardCheck className="mb-5 h-12 w-12 text-red-500 transition duration-300 group-hover:scale-110" />

            <h3 className="text-xl font-semibold text-white">
              Avaliação Inicial
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Análise do perfil do atleta, identificação de pontos fortes,
              aspetos a melhorar e definição de objetivos de evolução.
            </p>

          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-[#090909] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/40">

            <Goal className="mb-5 h-12 w-12 text-red-500 transition duration-300 group-hover:scale-110" />

            <h3 className="text-xl font-semibold text-white">
              Desenvolvimento Técnico
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Trabalho específico de técnica individual, primeiro toque,
              condução, passe, finalização e tomada de decisão.
            </p>

          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-[#090909] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/40">

            <Zap className="mb-5 h-12 w-12 text-red-500 transition duration-300 group-hover:scale-110" />

            <h3 className="text-xl font-semibold text-white">
              Performance Física
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Desenvolvimento das capacidades físicas essenciais no futebol:
              velocidade, agilidade, explosão e capacidade competitiva.
            </p>

          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-[#090909] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/40">

            <Users className="mb-5 h-12 w-12 text-red-500 transition duration-300 group-hover:scale-110" />

            <h3 className="text-xl font-semibold text-white">
              Acompanhamento Individual
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Um processo contínuo de evolução com objetivos definidos e
              adaptação constante ao crescimento do atleta.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}