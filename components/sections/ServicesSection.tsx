import Link from "next/link";
import { Home, Building2, Tractor, Factory, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Home,
  Building2,
  Tractor,
  Factory,
} as const;

const colorMap = {
  solar: {
    bg: "bg-amber-50",
    icon: "bg-amber-100 text-amber-600",
    hover: "hover:border-amber-300",
    arrow: "text-amber-600",
  },
  navy: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-600",
    hover: "hover:border-blue-300",
    arrow: "text-blue-600",
  },
  eco: {
    bg: "bg-green-50",
    icon: "bg-green-100 text-green-600",
    hover: "hover:border-green-300",
    arrow: "text-green-600",
  },
} as const;

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Nossas soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Energia solar para cada necessidade
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Do residencial ao industrial, desenvolvemos projetos personalizados
            para maximizar sua economia com energia fotovoltaica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative bg-white border-2 border-gray-100 ${colors.hover} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div
                  className={`flex items-center gap-1 text-sm font-semibold ${colors.arrow} group-hover:gap-2 transition-all`}
                >
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
