"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AthleteForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [club, setClub] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("athletes").insert([
      {
        full_name: fullName,
        phone: phone,
        club: club,
        main_goal: mainGoal,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Inscrição enviada com sucesso!");

    setFullName("");
    setPhone("");
    setClub("");
    setMainGoal("");
  }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-bold">
          Inscrição de Atleta
        </h2>

        <p className="mt-4 text-center text-zinc-400">
          Preenche o formulário e inicia o teu processo de evolução.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <input
            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            placeholder="Clube atual"
            value={club}
            onChange={(e) => setClub(e.target.value)}
          />

          <textarea
            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            placeholder="Objetivo principal"
            rows={5}
            value={mainGoal}
            onChange={(e) => setMainGoal(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
          >
            {loading ? "A enviar..." : "Enviar inscrição"}
          </button>
        </form>
      </div>
    </section>
  );
}