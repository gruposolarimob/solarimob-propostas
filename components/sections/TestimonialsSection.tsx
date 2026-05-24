import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário residencial",
    city: "Goiânia, GO",
    text: "Minha conta de luz caiu de R$ 780 para R$ 43 reais. O processo foi muito tranquilo, a equipe foi super profissional do início ao fim.",
    stars: 5,
    savings: "R$ 737/mês",
  },
  {
    name: "Mariana Costa",
    role: "Gestora — Mercado Bem-Viver",
    city: "Anápolis, GO",
    text: "Implantamos 120 painéis no nosso centro de distribuição. Já economizamos mais de R$ 180 mil no primeiro ano. Retorno veio muito antes do previsto.",
    stars: 5,
    savings: "R$ 15.000/mês",
  },
  {
    name: "Roberto Alves",
    role: "Produtor rural",
    city: "Rio Verde, GO",
    text: "A irrigação da minha fazenda consumia uma fortuna. Hoje gero minha própria energia. A Solarimob entende bem as particularidades do campo.",
    stars: 5,
    savings: "R$ 8.200/mês",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Clientes que já economizam todo mês
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Mais de 500 clientes confiam na Solarimob para gerar sua própria
            energia. Veja o que eles dizem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <Stars count={t.stars} />
              <p className="text-slate-700 mt-4 mb-6 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                  <p className="text-slate-400 text-xs">{t.city}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Economia</p>
                  <p className="text-lg font-black text-green-600">{t.savings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
