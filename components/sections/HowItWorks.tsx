import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Do orçamento ao sol gerando energia
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Processo simples e transparente. Cuidamos de tudo para que você
            comece a economizar o quanto antes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-amber-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-amber-400 rounded-2xl flex flex-col items-center justify-center mb-5 shadow-md shadow-amber-100">
                  <span className="text-amber-500 text-xs font-bold tracking-wider">
                    PASSO
                  </span>
                  <span className="text-amber-600 text-3xl font-black leading-none">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
