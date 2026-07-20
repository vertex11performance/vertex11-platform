import Image from "next/image";
import Container from "./ui/Container";

export default function Coach() {
  return (
    <section className="bg-[#050505] px-6 py-24">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* FOTO */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] border border-zinc-800">

              <Image
                src="/coach/coach.jpg"
                alt="Mister Leo - Vertex11"
                width={700}
                height={900}
                className="h-[650px] w-full object-cover"
              />

            </div>

          </div>

          {/* TEXTO */}

          <div>

            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
              O Treinador
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Mister Leo
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              A Vertex11 nasceu da paixão pelo desenvolvimento individual de
              atletas e pelo treino em geral. Cada treino é preparado de forma personalizada,
              respeitando as características, os objetivos e as necessidades
              de cada jogador.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              O objetivo não é apenas melhorar o rendimento em campo, mas
              desenvolver atletas mais completos, mais confiantes e mais
              preparados para responder às exigências do futebol atual.
            </p>

            {/* Destaques */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-zinc-800 bg-[#090909] p-5 text-center">

                <p className="text-2xl font-bold text-white">
                  UEFA B
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Treinador Certificado
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-[#090909] p-5 text-center">

                <p className="text-2xl font-bold text-white">
                  Sub-18
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Treinador Adjunto Gil Vicente
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-[#090909] p-5 text-center">

                <p className="text-2xl font-bold text-white">
                  +50
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Atletas acompanhados
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}