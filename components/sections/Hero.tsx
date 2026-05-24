"use client";

import Link from "next/link";
import { ArrowRight, Sun, Zap, Shield } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const badges = [
  { icon: Zap, text: "Até 95% de economia" },
  { icon: Shield, text: "Garantia de 25 anos" },
  { icon: Sun, text: "Energia limpa 24h" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-medium">
                Energia solar fotovoltaica
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Economize de verdade
              <br />
              <span className="text-gradient-solar">com energia solar</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Reduza sua conta de luz em até 95%. O{" "}
              <strong className="text-white">Grupo Solarimob</strong> projeta,
              instala e monitora seu sistema solar com tecnologia de ponta e
              garantia de longo prazo.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2"
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL("Olá! Quero um orçamento de energia solar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-105"
              >
                Orçamento grátis
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/calculadora"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                Simular economia
              </Link>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-80">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                    <Sun className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-xl">Sistema Solar</h3>
                  <p className="text-slate-400 text-sm mt-1">Monitoramento em tempo real</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-slate-400 text-sm">Geração hoje</span>
                    <span className="text-green-400 font-bold text-sm">28,4 kWh</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-slate-400 text-sm">Economia mês</span>
                    <span className="text-amber-400 font-bold text-sm">R$ 487</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-slate-400 text-sm">CO₂ evitado</span>
                    <span className="text-blue-400 font-bold text-sm">18,2 kg</span>
                  </div>
                </div>

                <div className="mt-4 bg-green-500/20 border border-green-500/30 rounded-xl p-3 text-center">
                  <p className="text-green-400 text-sm font-semibold">
                    ✓ Sistema operando normalmente
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs font-medium">Economia total</p>
                <p className="text-2xl font-bold">95%</p>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-slate-500 font-medium">Instalações</p>
                <p className="text-2xl font-bold text-slate-900">500+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-white/40 text-xs">Role para baixo</p>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
