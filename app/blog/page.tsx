import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo sobre energia solar, economia, financiamento e tecnologia fotovoltaica para residências, empresas e propriedades rurais.",
};

export const revalidate = 3600;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
}

async function getPosts(): Promise<Post[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0..11] {
        _id, title, slug, excerpt, category, publishedAt
      }`
    );
  } catch {
    return [];
  }
}

const categoryLabels: Record<string, string> = {
  "energia-solar": "Energia Solar",
  "economia": "Economia",
  "tecnologia": "Tecnologia",
  "legislacao": "Legislação",
  "financiamento": "Financiamento",
};

const placeholderPosts: Post[] = [
  { _id: "1", title: "Como funciona a geração distribuída de energia solar?", slug: { current: "geracao-distribuida" }, excerpt: "Entenda como o sistema de compensação de energia funciona e como você pode gerar créditos com sua usina solar.", category: "energia-solar", publishedAt: "2026-05-15" },
  { _id: "2", title: "Vale a pena instalar energia solar em 2026? Veja os números", slug: { current: "vale-a-pena-2026" }, excerpt: "Com as tarifas atuais e os custos de instalação, analisamos se o investimento em energia solar ainda faz sentido.", category: "economia", publishedAt: "2026-05-01" },
  { _id: "3", title: "Financiamento solar: como pagar o sistema com a economia que ele gera", slug: { current: "financiamento-solar" }, excerpt: "As principais linhas de crédito disponíveis para energia solar e como funciona o financiamento sem entrada.", category: "financiamento", publishedAt: "2026-04-20" },
  { _id: "4", title: "TOPCon vs Mono PERC: qual tecnologia de painel solar escolher?", slug: { current: "topcon-vs-perc" }, excerpt: "Comparamos as duas principais tecnologias de painéis solares disponíveis no mercado brasileiro.", category: "tecnologia", publishedAt: "2026-04-10" },
  { _id: "5", title: "GD1, GD2 e GD3: entenda as regras da geração distribuída no Brasil", slug: { current: "gd1-gd2-gd3" }, excerpt: "A lei do marco legal da energia solar e o que muda para quem instala um sistema hoje.", category: "legislacao", publishedAt: "2026-03-28" },
  { _id: "6", title: "Energia solar para fazendas: irrigação, armazenamento e benefícios rurais", slug: { current: "solar-rural" }, excerpt: "Como produtores rurais podem usar energia solar para reduzir custos com irrigação e operações agropecuárias.", category: "energia-solar", publishedAt: "2026-03-15" },
];

export default async function BlogPage() {
  const posts = await getPosts();
  const displayPosts = posts.length > 0 ? posts : placeholderPosts;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Tudo sobre
              <br />
              <span className="text-amber-400">energia solar</span>
            </h1>
            <p className="text-slate-300 text-lg">
              Conteúdo técnico e prático sobre fotovoltaica, economia de energia,
              financiamento e regulação no Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                {/* Placeholder image */}
                <div className="h-44 gradient-solar flex items-center justify-center">
                  <Tag className="w-10 h-10 text-amber-400/50" />
                </div>
                <div className="p-6">
                  {post.category && (
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                      {categoryLabels[post.category] ?? post.category}
                    </span>
                  )}
                  <h2 className="text-slate-900 font-bold text-base mt-3 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    {post.publishedAt && (
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs">
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                        </span>
                      </div>
                    )}
                    <span className="text-amber-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
