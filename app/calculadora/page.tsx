"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Zap, Sun, TrendingDown, DollarSign, ArrowRight, Info } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const TARIFA_MEDIA = 0.85; // R$/kWh - média Brasil 2026
const FATOR_GERACAO = 130; // kWh/kWp/mês - média Centro-Oeste
const CUSTO_POR_KWP = 4200; // R$/kWp instalado
const REDUCAO = 0.9; // 90% de cobertura

type Segment = "residencial" | "comercial" | "rural" | "industrial";

const segmentConfig: Record<Segment, { label: string; tipicoBill: string }> = {
  residencial: { label: "Residencial", tipicoBill: "200 – 800" },
  comercial: { label: "Comercial / Empresarial", tipicoBill: "1.000 – 20.000" },
  rural: { label: "Rural / Agronegócio", tipicoBill: "1.000 – 50.000" },
  industrial: { label: "Industrial", tipicoBill: "10.000+" },
};

export default function CalculadoraPage() {
  const [bill, setBill] = useState("");
  const [segment, setSegment] = useState<Segment>("residencial");
  const [result, setResult] = useState<null | {
    kWp: number;
    panels: number;
    areaTelhado: number;
    economiaAnual: number;
    investimento: number;
    payback: number;
    economia25anos: number;
  }>(null);

  function calcular() {
    const billNum = parseFloat(bill.replace(",", "."));
    if (!billNum || billNum < 50) return;

    const consumoMensal = billNum / TARIFA_MEDIA;
    const kWp = (consumoMensal * REDUCAO) / FATOR_GERACAO;
    const panels = Math.ceil(kWp / 0.55);
    const areaTelhado = Math.ceil(panels * 2.6);
    const economiaAnual = billNum * REDUCAO * 12;
    const investimento = Math.ceil(kWp * CUSTO_POR_KWP / 100) * 100;
    const payback = investimento / economiaAnual;
    const economia25anos = economiaAnual * 25 - investimento;

    setResult({
      kWp: Math.round(kWp * 100) / 100,
      panels,
      areaTelhado,
      economiaAnual: Math.round(economiaAnual),
      investimento,
      payback: Math.round(payback * 10) / 10,
      economia25anos: Math.round(economia25anos),
    });
  }

  const whatsappMsg = result
    ? `Olá! Usei a calculadora do site. Minha conta é R$ ${bill}/mês (${segmentConfig[segment].label}). O sistema indicado foi de ${result.kWp} kWp com retorno em ${result.payback} anos. Quero saber mais!`
    : undefined;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Calculadora solar
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Descubra quanto você pode
            <br />
            <span className="text-amber-400">economizar com solar</span>
          </h1>
          <p className="text-slate-300 text-lg">
            Simulação instantânea e gratuita. Informe sua conta de luz e veja
            o tamanho do sistema ideal, o investimento e o retorno.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            {/* Form */}
            <div className="p-8 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Dados para simulação
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tipo de instalação
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => { setSegment(e.target.value as Segment); setResult(null); }}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-amber-400 bg-white text-sm"
                  >
                    {Object.entries(segmentConfig).map(([key, val]) => (
                      <option key={key} value={key}>{val.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-400 mt-1.5">
                    Conta típica: R$ {segmentConfig[segment].tipicoBill}/mês
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Valor médio da conta de luz (R$)
                  </label>
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => { setBill(e.target.value); setResult(null); }}
                    placeholder="Ex: 450"
                    min="50"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 bg-white text-sm"
                  />
                  <p className="text-xs text-slate-400 mt-1.5">
                    Veja na sua fatura de energia elétrica
                  </p>
                </div>
              </div>

              <button
                onClick={calcular}
                disabled={!bill || parseFloat(bill) < 50}
                className="mt-6 w-full bg-amber-400 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Calcular minha economia
              </button>

              <div className="flex items-start gap-2 mt-4">
                <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400">
                  Simulação baseada na tarifa média de R$ {TARIFA_MEDIA}/kWh e irradiação
                  do Centro-Oeste. Valores aproximados — a proposta técnica detalhada é
                  feita por nossos engenheiros.
                </p>
              </div>
            </div>

            {/* Result */}
            {result && (
              <div className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-500" />
                  Resultado da simulação
                </h2>

                {/* System specs */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Potência do sistema", value: `${result.kWp} kWp`, desc: "Potência instalada" },
                    { label: "Quantidade de painéis", value: result.panels, desc: "Painéis 550W" },
                    { label: "Área de telhado", value: `≈ ${result.areaTelhado} m²`, desc: "Necessária" },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-2xl p-4 text-center">
                      <p className="text-2xl font-black text-slate-900">{item.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* Financial */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
                    <TrendingDown className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-3xl font-black text-green-700">
                      R$ {result.economiaAnual.toLocaleString("pt-BR")}
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Economia no 1º ano
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
                    <DollarSign className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <p className="text-3xl font-black text-amber-700">
                      R$ {result.investimento.toLocaleString("pt-BR")}
                    </p>
                    <p className="text-sm text-amber-600 font-medium mt-1">
                      Investimento estimado
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                    <Sun className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-3xl font-black text-blue-700">
                      {result.payback} anos
                    </p>
                    <p className="text-sm text-blue-600 font-medium mt-1">
                      Retorno do investimento
                    </p>
                  </div>
                </div>

                {/* 25 years highlight */}
                <div className="bg-slate-900 rounded-2xl p-6 text-center mb-6">
                  <p className="text-slate-400 text-sm mb-1">
                    Economia líquida em 25 anos (vida útil do sistema)
                  </p>
                  <p className="text-4xl font-black text-amber-400">
                    R$ {result.economia25anos.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Após recuperar o investimento, tudo é lucro puro.
                  </p>
                </div>

                <a
                  href={WHATSAPP_URL(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/30"
                >
                  Quero este projeto — falar com consultor
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
