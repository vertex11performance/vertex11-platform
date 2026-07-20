"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#"
          className="text-xl font-extrabold tracking-[0.3em] text-white transition hover:text-red-500"
        >
          VERTEX11
        </a>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">

          <a
            href="#sobre"
            className="transition duration-300 hover:text-white"
          >
            Sobre
          </a>

          <a
            href="#servicos"
            className="transition duration-300 hover:text-white"
          >
            Serviços
          </a>

          <a
            href="#programas"
            className="transition duration-300 hover:text-white"
          >
            Programas
          </a>

          <a
            href="#testemunhos"
            className="transition duration-300 hover:text-white"
          >
            Testemunhos
          </a>

          <a
  href="/login"
  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
>
  Área Privada
</a>

          <a
            href="#inscricao"
            className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:scale-105 hover:bg-red-500"
          >
            Marcar treino
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
            {/* Mobile Menu */}

      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">

          <div className="flex flex-col px-6 py-6">

            <a
              href="#sobre"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 transition hover:text-white"
            >
              Sobre
            </a>

            <a
              href="#servicos"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 transition hover:text-white"
            >
              Serviços
            </a>

            <a
              href="#programas"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 transition hover:text-white"
            >
              Programas
            </a>

            <a
              href="#testemunhos"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 transition hover:text-white"
            >
              Testemunhos
            </a>

<a
  href="/login"
  onClick={() => setOpen(false)}
  className="py-3 text-zinc-300 transition hover:text-white"
>
  Área Privada
</a>

            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-red-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
            >
              Marcar treino
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}