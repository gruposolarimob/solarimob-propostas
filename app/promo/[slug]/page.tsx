import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import { WHATSAPP_URL } from "@/lib/constants";

export const revalidate = 300;

interface Campanha {
  _id: string;
  title: string;
  slug: { current: string };
  active: boolean;
  headline?: string;
  subheadline?: string;
  badge?: string;
  benefits?: string[];
  ctaText?: string;
  whatsappMessage?: string;
  segment?: string;
  expiresAt?: string;
  seoTitle?: string;
  seoDescription?: string;
}

async function getCampanha(slug: string): Promise<Campanha | null> {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "campanha" && slug.current == $slug && active == true][0]`,
      { slug }
    );
    return data ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const campanha = await getCampanha(slug);
  if (!campanha) return { title: "Promoção não encontrada" };
  return {
    title: campanha.seoTitle ?? campanha.title,
    description: campanha.seoDescription ?? campanha.subheadline,
  };
}

export default async function PromoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campanha = await getCampanha(slug);

  if (!campanha) notFound();

  const expired = campanha.expiresAt && new Date(campanha.expiresAt) < new Date();
  if (expired) notFound();

  const msg = campanha.whatsappMessage ?? `Olá! Vi a promoção "${campanha.title}" no site e quero saber mais.`;

  return (
    <div className="min-h-screen gradient-hero">
      {/* Badge */}
      {campanha.badge && (
        <div className="bg-amber-400 text-white text-center py-3 text-sm font-semibold">
          {campanha.badge}
        </div>
      )}

      {/* Hero */}
      <section className="pt-24 pb-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {campanha.expiresAt && (
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-1.5 mb-6">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm font-medium">
                Válida até{" "}
                {new Date(campanha.expiresAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                })}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {campanha.headline ?? campanha.title}
          </h1>

          {campanha.subheadline && (
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              {campanha.subheadline}
            </p>
          )}

          <a
            href={WHATSAPP_URL(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-white font-black px-10 py-5 rounded-2xl text-lg transition-all shadow-2xl shadow-amber-400/40 hover:scale-105 animate-pulse-solar"
          >
            {campanha.ctaText ?? "Quero esta promoção"}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Benefits */}
      {campanha.benefits && campanha.benefits.length > 0 && (
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              O que você recebe
            </h2>
            <ul className="space-y-4">
              {campanha.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <a
                href={WHATSAPP_URL(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                {campanha.ctaText ?? "Quero esta promoção"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
