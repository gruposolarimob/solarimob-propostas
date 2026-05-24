import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, Users, Sun, CheckCircle2, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça o Grupo Solarimob, especialistas em energia solar fotovoltaica com mais de 8 anos de experiência e centenas de projetos instalados.",
};

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Transparência em cada etapa do projeto. Você sabe exatamente o que está contratando.",
  },
  {
    icon: Award,
    title: "Excelência técnica",
    description:
      "Equipe certificada, equipamentos de primeira linha e projetos aprovados pelas concessionárias.",
  },
  {
    icon: Users,
    title: "Foco no cliente",
    description:
      "Atendemos do orçamento ao pós-venda. Sua satisfação é nossa maior entrega.",
  },
  {
    icon: Sun,
    title: "Sustentabilidade",
    description:
      "Acreditamos que energia limpa e acessível transforma vidas e preserve o planeta.",
  },
];

const certifications = [
  "ABSOLAR — Associação Brasileira de Energia Solar Fotovoltaica",
  "INMETRO — Instaladores certificados",
  "CREA — Responsabilidade técnica",
  "Fabricantes homologados (Growatt, Deye, Canadian Solar, JA Solar)",
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Quem somos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Energia solar que transforma
              <br />
              <span className="text-amber-400">vidas há mais de 8 anos</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              O Grupo Solarimob nasceu da crença de que energia solar deve ser
              acessível para todos. Somos especialistas em projetos fotovoltaicos
              para residências, empresas, propriedades rurais e indústrias.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-3">
                Nossa história
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Especialistas no mercado solar brasileiro
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fundado com o propósito de democratizar o acesso à energia
                  limpa, o Grupo Solarimob acumula anos de experiência no setor
                  fotovoltaico brasileiro, acompanhando cada fase da evolução do
                  mercado — desde os primeiros sistemas residenciais até projetos
                  de grande porte para o agronegócio e a indústria.
                </p>
                <p>
                  Nossa equipe é formada por engenheiros, técnicos certificados
                  e consultores especializados, prontos para desenhar a solução
                  ideal para cada cliente. Fazemos o processo completo: estudo
                  de viabilidade, projeto técnico, instalação, homologação junto
                  à concessionária e monitoramento pós-instalação.
                </p>
                <p>
                  Com centenas de projetos entregues e clientes satisfeitos em
                  todo o Centro-Oeste, seguimos crescendo com o compromisso de
                  entregar economia real, qualidade comprovada e suporte de longo
                  prazo.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="font-bold text-slate-900 text-lg mb-6">
                Certificações e associações
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4">
                  Números que orgulham
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "Projetos" },
                    { value: "8+", label: "Anos de mercado" },
                    { value: "R$ 2M+", label: "Economia/ano gerada" },
                    { value: "98%", label: "Satisfação" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-4 text-center">
                      <p className="text-2xl font-black text-amber-500">{s.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-3">
              Nossos valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              O que nos guia todos os dias
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
