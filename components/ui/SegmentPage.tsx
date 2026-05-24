import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import SegmentForm from "@/components/ui/SegmentForm";
import { WHATSAPP_URL } from "@/lib/constants";
import type { SEGMENTS } from "@/lib/constants";

type Segment = (typeof SEGMENTS)[number];

export default function SegmentPage({ segment }: { segment: Segment }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Energia solar {segment.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {segment.title}
                <br />
                <span className="text-amber-400">{segment.subtitle}</span>
              </h1>
              <p className="text-slate-300 text-lg mb-8 max-w-xl">
                {segment.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL(segment.ctaText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-400/30 hover:scale-105"
                >
                  {segment.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/calculadora"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  Simular economia
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <h3 className="text-white font-bold text-lg mb-6">
                Perfil típico — {segment.title}
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Sistema típico", value: segment.typicalSystem },
                  { label: "Conta de luz", value: segment.avgBill },
                  { label: "Economia estimada", value: segment.avgSavings + "/ano" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white/10 rounded-xl px-5 py-3"
                  >
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="text-amber-400 font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-3">
                Benefícios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Por que energia solar para {segment.title.toLowerCase()}?
              </h2>
              <ul className="space-y-4">
                {segment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="font-bold text-slate-900 text-xl mb-6">
                Solicite seu orçamento grátis
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Preencha abaixo. Um consultor especializado em projetos{" "}
                {segment.title.toLowerCase()} entra em contato em até 1 hora.
              </p>

              <SegmentForm segmentTitle={segment.title} ctaText={segment.ctaText} />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
