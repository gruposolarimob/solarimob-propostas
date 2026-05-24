"use client";

import { WHATSAPP_URL } from "@/lib/constants";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nome = (form.elements.namedItem("nome") as HTMLInputElement)?.value;
        const tipo = (form.elements.namedItem("tipo") as HTMLSelectElement)?.value;
        const conta = (form.elements.namedItem("conta") as HTMLInputElement)?.value;
        const msg = `Olá! Me chamo ${nome}. Tenho interesse em energia solar para ${tipo}. Minha conta de luz é de R$ ${conta}/mês.`;
        window.open(WHATSAPP_URL(msg), "_blank");
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Seu nome
        </label>
        <input
          type="text"
          name="nome"
          required
          placeholder="Nome completo"
          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Tipo de instalação
        </label>
        <select
          name="tipo"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-sm"
        >
          <option value="">Selecione</option>
          <option value="residência">Residência</option>
          <option value="empresa/comércio">Empresa / Comércio</option>
          <option value="propriedade rural">Propriedade rural</option>
          <option value="indústria">Indústria</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Valor médio da conta de luz (R$)
        </label>
        <input
          type="number"
          name="conta"
          required
          min="100"
          placeholder="Ex: 450"
          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 rounded-xl text-base transition-all shadow-md hover:shadow-lg"
      >
        Quero meu orçamento grátis
      </button>

      <p className="text-xs text-slate-400 text-center">
        Ao enviar, você será direcionado ao WhatsApp. Sem spam.
      </p>
    </form>
  );
}
