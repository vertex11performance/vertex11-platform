import { supabase } from "@/lib/supabase";

export default async function AthletesPage() {
  const { data: athletes, error } = await supabase
    .from("athletes")
    .select("*")
    .order("created_at", { ascending: false });


  if (error) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-2xl font-bold">
          Erro ao carregar atletas
        </h1>
        <p className="mt-4 text-red-400">
          {error.message}
        </p>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-black p-10 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold">
          Atletas
        </h1>

        <p className="mt-2 text-zinc-400">
          Gestão dos atletas Vertex11.
        </p>


        <div className="mt-8 space-y-4">

          {athletes?.map((athlete) => (

            <div
              key={athlete.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >

              <h2 className="text-xl font-semibold">
                {athlete.full_name}
              </h2>

              <div className="mt-3 grid gap-2 text-sm text-zinc-400 md:grid-cols-3">

                <p>
                  Clube: {athlete.club || "Não definido"}
                </p>

                <p>
                  Posição: {athlete.primary_position || "Não definida"}
                </p>

                <p>
                  Estado: {athlete.status || "Novo"}
                </p>

              </div>

            </div>

          ))}

        </div>


      </div>

    </main>
  );
}