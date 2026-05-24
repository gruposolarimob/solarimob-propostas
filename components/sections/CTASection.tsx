import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 gradient-solar relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 text-sm font-medium">
            Orçamento 100% gratuito e sem compromisso
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Pronto para parar de
          <br />
          <span className="text-gradient-solar">pagar caro na luz?</span>
        </h2>

        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Fale agora com nossos especialistas. Em minutos calculamos quanto você
          pode economizar e como funciona o investimento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL("Olá! Quero saber quanto posso economizar com energia solar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-105"
          >
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/calculadora"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            Simular minha economia
          </Link>
        </div>

        <p className="text-slate-400 text-sm mt-6">
          Sem spam. Retornamos em até 1 hora no horário comercial.
        </p>
      </div>
    </section>
  );
}
