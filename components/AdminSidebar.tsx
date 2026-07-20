import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="relative min-h-screen w-72 border-r border-white/10 bg-black p-6">

      {/* Logo */}

      <div className="mb-12">

        <h2 className="text-2xl font-extrabold tracking-[0.25em] text-white">
          VERTEX11
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Performance Platform
        </p>

      </div>


      {/* Menu */}

      <nav className="flex flex-col gap-2">


        <Link
          href="/dashboard"
          className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
        >
          📊 Dashboard
        </Link>


        <Link
          href="/athletes"
          className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
        >
          👥 Atletas
        </Link>


        <div className="my-4 h-px bg-white/10" />


        <Link
          href="/sessions"
          className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
        >
          📅 Sessões
        </Link>


        <Link
          href="/evaluations"
          className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
        >
          📝 Avaliações
        </Link>


        <Link
          href="/programs"
          className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
        >
          📂 Programas
        </Link>


      </nav>


      {/* Admin */}

      <div className="absolute bottom-6 left-6">

        <p className="font-semibold text-white">
          Leonardo
        </p>

        <p className="text-sm text-zinc-500">
          Administrador
        </p>

      </div>


    </aside>
  );
}