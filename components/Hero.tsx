"use client";

import Image from "next/image";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <Image
        src="/background/background.jpg"
        alt="Vertex11 Stadium"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Glows */}

      <div className="absolute inset-0">

        <div className="absolute left-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-red-600/20 blur-[160px]" />

        <div className="absolute right-[-150px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[160px]" />

      </div>

      <Container>

        <div className="relative z-10 grid min-h-screen items-center gap-16 py-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
              Vertex11 Performance
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">

              Cada atleta tem
              <br />

              <span className="text-red-500">
                um objetivo.
              </span>

              <br />

              Cada treino tem
              <br />

              <span className="text-blue-500">
                um propósito.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">

              Treinos individuais de futebol desenvolvidos para atletas que procuram evoluir a técnica, a capacidade física e a tomada de decisão, através de um acompanhamento personalizado.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="#marcar-treino">
                Marcar o primeiro treino
              </Button>

              <Button href="#sobre" variant="secondary">
                Conhecer a metodologia
              </Button>

            </div>

          </div>
                    {/* RIGHT SIDE */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 shadow-2xl">

              <Image
                src="/hero/hero-player.jpg"
                alt="Treino Individual Vertex11"
                width={700}
                height={900}
                priority
                className="h-[700px] w-full object-cover"
              />

              {/* Overlay da imagem */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            </div>

            {/* Floating Cards */}

            <div className="absolute -bottom-10 left-1/2 grid w-[95%] -translate-x-1/2 gap-4 rounded-3xl border border-zinc-800 bg-[#090909]/90 p-5 backdrop-blur-xl lg:grid-cols-3">

              <div className="text-center">

                <p className="text-2xl font-bold text-white">
                  UEFA B
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Treinador Certificado
                </p>

              </div>

              <div className="text-center">

                <p className="text-2xl font-bold text-white">
                  Braga
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Campo do Quinteiro
                </p>

              </div>

              <div className="text-center">

                <p className="text-2xl font-bold text-white">
                  +50
                </p>

                <p className="mt-1 text-sm text-zinc-400">
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