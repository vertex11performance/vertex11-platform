import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function AthletesPage() {

  const { data: athletes, error } = await supabase
    .from("athletes")
    .select("*")
    .order("created_at", { ascending: false });



  if (error) {
    return (
      <main className="min-h-screen bg-white p-10 text-black">

        <h1 className="text-2xl font-bold">
          Erro ao carregar atletas
        </h1>

        <p className="mt-4 text-red-600">
          {error.message}
        </p>

      </main>
    );
  }




  return (
    <main className="min-h-screen bg-white p-10 text-black">


      <div className="mx-auto max-w-6xl">



        <div className="flex items-center justify-between">


          <div>

            <h1 className="text-4xl font-bold">
              Atletas
            </h1>


            <p className="mt-2 text-zinc-600">
              Gestão dos atletas Vertex11.
            </p>

          </div>




          <Link
            href="/athletes/new"
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-80"
          >
            + Novo atleta
          </Link>



        </div>





        <div className="mt-10 grid gap-6 md:grid-cols-2">



          {athletes?.map((athlete) => (


            <Link
              key={athlete.id}
              href={`/athletes/${athlete.id}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >



              <div className="flex items-center justify-between">


                <h2 className="text-xl font-bold">
                  {athlete.full_name}
                </h2>



                <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                  {athlete.status || "Novo"}
                </span>



              </div>





              <div className="mt-6 space-y-2 text-sm text-zinc-600">


                <p>
                  <span className="font-semibold text-black">
                    Clube:
                  </span>{" "}
                  {athlete.club || "Não definido"}
                </p>



                <p>
                  <span className="font-semibold text-black">
                    Posição:
                  </span>{" "}
                  {athlete.primary_position || "Não definida"}
                </p>



                <p>
                  <span className="font-semibold text-black">
                    Pé dominante:
                  </span>{" "}
                  {athlete.dominant_foot || "Não definido"}
                </p>



              </div>




              <p className="mt-6 text-sm font-medium text-black">
                Ver perfil →
              </p>




            </Link>


          ))}



        </div>



      </div>


    </main>
  );
}