import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo Solarimob. Orçamento gratuito para energia solar residencial, comercial e industrial.",
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta mais rápida. Fale diretamente com um consultor.",
    action: "Abrir WhatsApp",
    href: WHATSAPP_URL(),
    color: "bg-green-50 border-green-200",
    iconColor: "bg-green-100 text-green-600",
    btnColor: "bg-green-600 hover:bg-green-700 text-white",
    external: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Para projetos comerciais e documentação formal.",
    action: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-blue-100 text-blue-600",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
    external: false,
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Vamos conversar sobre
              <br />
              <span className="text-amber-400">seu projeto solar?</span>
            </h1>
            <p className="text-slate-300 text-lg">
              Nossa equipe está pronta para calcular sua economia e montar o
              projeto ideal. Atendimento sem enrolação.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: channels */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Escolha como prefere falar
              </h2>
              <div className="space-y-4 mb-10">
                {channels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className={`border-2 rounded-2xl p-6 ${c.color}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.iconColor}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 text-base mb-1">
                            {c.title}
                          </h3>
                          <p className="text-slate-500 text-sm mb-4">
                            {c.description}
                          </p>
                          <a
                            href={c.href}
                            target={c.external ? "_blank" : undefined}
                            rel={c.external ? "noopener noreferrer" : undefined}
                            className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${c.btnColor}`}
                          >
                            {c.action}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Info */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Horário de atendimento</p>
                    <p className="text-slate-500 text-sm">
                      Segunda a sexta: 8h às 18h<br />
                      Sábado: 8h às 13h
                    </p>
                  </div>
                </div>
                {COMPANY.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Endereço</p>
                      <p className="text-slate-500 text-sm">{COMPANY.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: quick form (static, connects to WhatsApp) */}
            <div className="bg-slate-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Solicite seu orçamento
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                Preencha abaixo e um consultor entra em contato em até 1 hora.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
