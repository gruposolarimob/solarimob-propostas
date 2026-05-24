import type { Metadata } from "next";
import { MapPin, Zap, Calendar } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Conheça os projetos de energia solar instalados pelo Grupo Solarimob. Residencial, comercial, rural e industrial.",
};

const projects = [
  {
    title: "Residência Família Albuquerque",
    location: "Goiânia, GO",
    type: "Residencial",
    power: "8,25 kWp",
    panels: "15 painéis",
    date: "Março 2026",
    savings: "R$ 520/mês",
    typeColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Supermercado Central Ltda",
    location: "Anápolis, GO",
    type: "Comercial",
    power: "75 kWp",
    panels: "120 painéis",
    date: "Janeiro 2026",
    savings: "R$ 12.000/mês",
    typeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Fazenda São Jorge",
    location: "Rio Verde, GO",
    type: "Rural",
    power: "42 kWp",
    panels: "70 painéis",
    date: "Novembro 2025",
    savings: "R$ 7.800/mês",
    typeColor: "bg-green-100 text-green-700",
  },
  {
    title: "Indústria Metalúrgica Ferro Forte",
    location: "Aparecida de Goiânia, GO",
    type: "Industrial",
    power: "220 kWp",
    panels: "400 painéis",
    date: "Setembro 2025",
    savings: "R$ 38.000/mês",
    typeColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Condomínio Villa Verde",
    location: "Goiânia, GO",
    type: "Residencial",
    power: "33 kWp",
    panels: "60 painéis",
    date: "Agosto 2025",
    savings: "R$ 4.200/mês",
    typeColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Clínica Médica Saúde Total",
    location: "Goiânia, GO",
    type: "Comercial",
    power: "18 kWp",
    panels: "30 painéis",
    date: "Julho 2025",
    savings: "R$ 2.900/mês",
    typeColor: "bg-blue-100 text-blue-700",
  },
];

export default function ProjetosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Portfólio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Projetos que geramos
              <br />
              <span className="text-amber-400">economia de verdade</span>
            </h1>
            <p className="text-slate-300 text-lg">
              Cada projeto é um compromisso cumprido. Veja alguns dos sistemas
              que instalamos e acompanhamos.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow"
              >
                {/* Placeholder image */}
                <div className="h-48 gradient-solar flex items-center justify-center">
                  <Zap className="w-16 h-16 text-amber-400/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.typeColor}`}>
                      {p.type}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs">{p.date}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-1">{p.title}</h3>

                  <div className="flex items-center gap-1 text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-sm">{p.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Potência</p>
                      <p className="text-sm font-bold text-slate-800">{p.power}</p>
                    </div>
                    <div className="text-center border-x border-slate-100">
                      <p className="text-xs text-slate-400">Painéis</p>
                      <p className="text-sm font-bold text-slate-800">{p.panels}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Economia</p>
                      <p className="text-sm font-bold text-green-600">{p.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">
              Estes são apenas alguns exemplos. Temos centenas de projetos entregues.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
