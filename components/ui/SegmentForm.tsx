"use client";

import { WHATSAPP_URL } from "@/lib/constants";

interface Props {
  segmentTitle: string;
  ctaText: string;
}

export default function SegmentForm({ segmentTitle, ctaText }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nome = (form.elements.namedItem("nome") as HTMLInputElement)?.value;
        const conta = (form.elements.namedItem("conta") as HTMLInputElement)?.value;
        const msg = `Olá! Me chamo ${nome}. Tenho interesse em energia solar ${segmentTitle.toLowerCase()}. Minha conta de luz é R$ ${conta}/mês. Vi no site a página de ${segmentTitle}.`;
        window.open(WHATSAPP_URL(msg), "_blank");
      }}
      className="space-y-4"
    >
      <input
        type="text"
        name="nome"
        required
        placeholder="Seu nome"
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
      />
      <input
        type="number"
        name="conta"
        required
        min="100"
        placeholder="Valor da conta de luz (R$)"
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
      />
      <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 rounded-xl text-base transition-all"
      >
        {ctaText}
      </button>
    </form>
  );
}
