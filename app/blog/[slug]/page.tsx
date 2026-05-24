import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import CTASection from "@/components/sections/CTASection";

export const revalidate = 3600;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  content?: unknown[];
  seoDescription?: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id, title, slug, excerpt, category, publishedAt, content, seoDescription
      }`,
      { slug }
    );
    return post ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <section className="pt-32 pb-12 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          {post.category && (
            <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-400/20 border border-amber-400/30 px-2.5 py-1 rounded-full mb-4">
              <Tag className="w-3 h-3 inline mr-1" />
              {post.category}
            </span>
          )}

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          {post.publishedAt && (
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.excerpt && (
            <p className="text-xl text-slate-600 leading-relaxed mb-10 pb-10 border-b border-slate-100 font-medium">
              {post.excerpt}
            </p>
          )}

          {/* Content rendered from Sanity portable text */}
          {post.content ? (
            <div className="prose prose-slate prose-lg max-w-none">
              {/* portable text renderer goes here — add @portabletext/react if needed */}
              <p className="text-slate-500 italic">Conteúdo completo disponível quando o Sanity CMS estiver configurado.</p>
            </div>
          ) : (
            <p className="text-slate-500 italic">
              Este post ainda não tem conteúdo publicado.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
