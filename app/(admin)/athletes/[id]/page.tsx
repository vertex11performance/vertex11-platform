import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function AthleteProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const { data: athlete, error } = await supabase
    .from("athletes")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !athlete) {
    return (
      <main className="min-h-screen bg-white p-10">

        <h1 className="text-3xl font-bold text-black">
          Atleta não encontrado
        </h1>

        <p className="mt-3 text-zinc-600">
          Não foi possível carregar este perfil.
        </p>

        <Link
          href="/athletes"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
        >
          Voltar
        </Link>

      </main>
    );
  }

  return (

    <main className="min-h-screen bg-white p-10">

      <div className="mx-auto max-w-6xl">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-black">
              {athlete.full_name}
            </h1>

            <p className="mt-2 text-zinc-500">
              Perfil do atleta
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/athletes"
              className="rounded-xl border border-zinc-300 px-5 py-3 font-medium text-black hover:bg-zinc-100"
            >
              ← Voltar
            </Link>

            <Link
              href={`/athletes/${athlete.id}/edit`}
              className="rounded-xl bg-black px-5 py-3 font-medium text-white hover:opacity-80"
            >
              ✏️ Editar atleta
            </Link>

          </div>

        </div>



        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Informação pessoal
            </h2>

            <div className="mt-5 space-y-3">

              <p>
                <span className="font-semibold">
                  Email:
                </span>{" "}
                {athlete.email || "Não definido"}
              </p>

              <p>
                <span className="font-semibold">
                  Telemóvel:
                </span>{" "}
                {athlete.phone || "Não definido"}
              </p>

              <p>
                <span className="font-semibold">
                  Data de nascimento:
                </span>{" "}
                {athlete.birth_date || "Não definida"}
              </p>

            </div>

          </div>



          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Perfil desportivo
            </h2>

            <div className="mt-5 space-y-3">

              <p>
                <span className="font-semibold">
                  Clube:
                </span>{" "}
                {athlete.club || "Não definido"}
              </p>

              <p>
                <span className="font-semibold">
                  Posição:
                </span>{" "}
                {athlete.primary_position || "Não definida"}
              </p>

              <p>
                <span className="font-semibold">
                  Pé dominante:
                </span>{" "}
                {athlete.dominant_foot || "Não definido"}
              </p>

              <p>
                <span className="font-semibold">
                  Estado:
                </span>{" "}
                {athlete.status || "Novo"}
              </p>

            </div>

          </div>



          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:col-span-2">

            <h2 className="text-xl font-bold">
              Objetivos
            </h2>

            <p className="mt-4 text-zinc-700">
              {athlete.main_goal || "Sem objetivos definidos."}
            </p>

          </div>



          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Pontos fortes
            </h2>

            <p className="mt-4 text-zinc-700">
              {athlete.strengths || "Sem informação."}
            </p>

          </div>



          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Pontos a melhorar
            </h2>

            <p className="mt-4 text-zinc-700">
              {athlete.weaknesses || "Sem informação."}
            </p>

          </div>

        </div>

      </div>

    </main>

  );

}