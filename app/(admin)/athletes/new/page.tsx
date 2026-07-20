"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewAthletePage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    birth_date: "",
    club: "",
    primary_position: "",
    dominant_foot: "",
    main_goal: "",
    strengths: "",
    weaknesses: "",
  });



  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const phoneRegex =
    /^9\d{8}$/;



  function updateField(
    field: string,
    value: string
  ) {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

  }



  function validateForm() {


    if (form.full_name.trim().length < 3) {
      return "O nome completo é obrigatório (mínimo 3 caracteres).";
    }


    if (!form.email) {
      return "O email é obrigatório.";
    }


    if (!emailRegex.test(form.email)) {
      return "O email introduzido não é válido.";
    }


    if (!form.phone) {
      return "O telemóvel é obrigatório.";
    }


    if (!phoneRegex.test(form.phone)) {
      return "O telemóvel deve ter 9 números e começar por 9.";
    }


    if (!form.birth_date) {
      return "A data de nascimento é obrigatória.";
    }


    const birthDate = new Date(form.birth_date);
    const today = new Date();


    if (birthDate > today) {
      return "A data de nascimento não pode ser futura.";
    }



    if (!form.club.trim()) {
      return "O clube é obrigatório.";
    }



    if (!form.primary_position.trim()) {
      return "A posição é obrigatória.";
    }



    if (!form.dominant_foot) {
      return "Seleciona o pé dominante.";
    }



    if (!form.main_goal.trim()) {
      return "Os objetivos são obrigatórios.";
    }



    if (!form.strengths.trim()) {
      return "Indica os pontos fortes.";
    }



    if (!form.weaknesses.trim()) {
      return "Indica os pontos a melhorar.";
    }



    return "";

  }





  async function handleSubmit() {


    setError("");


    const validationError = validateForm();


    if (validationError) {

      setError(validationError);
      return;

    }



    setLoading(true);



    const { error } = await supabase
      .from("athletes")
      .insert([
        {
          ...form,
          status: "Novo",
        },
      ]);



    if (error) {

      setError(error.message);
      setLoading(false);
      return;

    }



    router.push("/athletes");
    router.refresh();

  }





  return (

    <main className="min-h-screen bg-white p-10 text-black">


      <div className="mx-auto max-w-4xl">


        <h1 className="text-4xl font-bold">
          Novo atleta
        </h1>


        <p className="mt-2 text-zinc-600">
          Criar novo atleta Vertex11.
        </p>



        <div className="mt-10 grid gap-6 md:grid-cols-2">



          <input
            placeholder="Nome completo"
            value={form.full_name}
            onChange={(e) =>
              updateField("full_name", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <input
            placeholder="Telemóvel"
            value={form.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <input
            type="date"
            value={form.birth_date}
            onChange={(e) =>
              updateField("birth_date", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <input
            placeholder="Clube"
            value={form.club}
            onChange={(e) =>
              updateField("club", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <input
            placeholder="Posição"
            value={form.primary_position}
            onChange={(e) =>
              updateField(
                "primary_position",
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <select
            value={form.dominant_foot}
            onChange={(e) =>
              updateField(
                "dominant_foot",
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-200 p-4"
          >

            <option value="">
              Pé dominante
            </option>

            <option value="Direito">
              Direito
            </option>

            <option value="Esquerdo">
              Esquerdo
            </option>

            <option value="Ambidestro">
              Ambidestro
            </option>

          </select>



          <textarea
            placeholder="Objetivos"
            value={form.main_goal}
            onChange={(e) =>
              updateField(
                "main_goal",
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-200 p-4 md:col-span-2"
          />



          <textarea
            placeholder="Pontos fortes"
            value={form.strengths}
            onChange={(e) =>
              updateField(
                "strengths",
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-200 p-4"
          />



          <textarea
            placeholder="Pontos a melhorar"
            value={form.weaknesses}
            onChange={(e) =>
              updateField(
                "weaknesses",
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-200 p-4"
          />


        </div>




        {error && (

          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>

        )}




        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-80 disabled:opacity-50"
        >

          {loading
            ? "A guardar..."
            : "Criar atleta"}

        </button>



      </div>


    </main>

  );
}