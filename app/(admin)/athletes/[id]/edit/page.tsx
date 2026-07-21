"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function EditAthletePage() {

  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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

  useEffect(() => {

    async function loadAthlete() {
      const {
  data: { session },
} = await supabase.auth.getSession();

console.log("SESSION:", session);

      console.log("ID recebido:", id);

      const { data, error } = await supabase
        .from("athletes")
        .select("*")

console.log("TODOS:", data);
console.log("ERROR:", error);

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error || !data) {
        setError(error?.message || "Atleta não encontrado.");
        setLoading(false);
        return;
      }

      setForm({
        full_name: data.full_name || "",
        email: data.email || "",
        phone: data.phone || "",
        birth_date: data.birth_date || "",
        club: data.club || "",
        primary_position: data.primary_position || "",
        dominant_foot: data.dominant_foot || "",
        main_goal: data.main_goal || "",
        strengths: data.strengths || "",
        weaknesses: data.weaknesses || "",
      });

      setLoading(false);

    }

    loadAthlete();

  }, [id]);

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
    async function handleSave() {

    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log("SESSION:", session);

    setSaving(true);

    const result = await supabase
      .from("athletes")
      .update({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        birth_date: form.birth_date,
        club: form.club,
        primary_position: form.primary_position,
        dominant_foot: form.dominant_foot,
        main_goal: form.main_goal,
        strengths: form.strengths,
        weaknesses: form.weaknesses,
      })
      .eq("id", id)
      .select();

    console.log("UPDATE RESULT:", result);

    const { error } = result;

    if (error) {
      setError(error.message);
      setSaving(false);
      return;
    }

    router.push(`/athletes/${id}`);
    router.refresh();

  }

  if (loading) {

    return (
      <main className="min-h-screen bg-white p-10 text-black">
        A carregar atleta...
      </main>
    );

  }

  return (

    <main className="min-h-screen bg-white p-10 text-black">

      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          Editar atleta
        </h1>

        <p className="mt-2 text-zinc-600">
          Atualizar informação do atleta.
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
              updateField("primary_position", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />

          <select
            value={form.dominant_foot}
            onChange={(e) =>
              updateField("dominant_foot", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          >
            <option value="">Pé dominante</option>
            <option value="Direito">Direito</option>
            <option value="Esquerdo">Esquerdo</option>
            <option value="Ambidestro">Ambidestro</option>
          </select>

          <textarea
            placeholder="Objetivos"
            value={form.main_goal}
            onChange={(e) =>
              updateField("main_goal", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4 md:col-span-2"
          />
                    <textarea
            placeholder="Pontos fortes"
            value={form.strengths}
            onChange={(e) =>
              updateField("strengths", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />

          <textarea
            placeholder="Pontos a melhorar"
            value={form.weaknesses}
            onChange={(e) =>
              updateField("weaknesses", e.target.value)
            }
            className="rounded-xl border border-zinc-200 p-4"
          />

        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="mt-8 flex gap-4">

          <button
            onClick={() => router.push(`/athletes/${id}`)}
            className="rounded-xl border border-zinc-300 px-8 py-4 font-semibold text-black transition hover:bg-zinc-100"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-80 disabled:opacity-50"
          >
            {saving
              ? "A guardar..."
              : "Guardar alterações"}
          </button>

        </div>

      </div>

    </main>

  );

  
}