import { defineField, defineType } from "sanity";

export const campanha = defineType({
  name: "campanha",
  title: "Landing Page de Campanha",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título da campanha", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL: /promo/slug)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "active", title: "Campanha ativa?", type: "boolean", initialValue: true }),
    defineField({ name: "headline", title: "Headline principal", type: "string" }),
    defineField({ name: "subheadline", title: "Subtítulo", type: "text", rows: 2 }),
    defineField({ name: "heroBg", title: "Imagem de fundo do hero", type: "image", options: { hotspot: true } }),
    defineField({
      name: "badge",
      title: "Badge/Destaque (ex: Promoção especial)",
      type: "string",
    }),
    defineField({
      name: "benefits",
      title: "Benefícios / bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "ctaText", title: "Texto do botão CTA", type: "string", initialValue: "Quero esta promoção" }),
    defineField({ name: "whatsappMessage", title: "Mensagem pré-definida do WhatsApp", type: "text" }),
    defineField({
      name: "segment",
      title: "Segmento alvo",
      type: "string",
      options: {
        list: [
          { title: "Residencial", value: "residencial" },
          { title: "Comercial", value: "comercial" },
          { title: "Rural", value: "rural" },
          { title: "Industrial", value: "industrial" },
          { title: "Geral", value: "geral" },
        ],
      },
    }),
    defineField({ name: "expiresAt", title: "Data de expiração", type: "datetime" }),
    defineField({ name: "content", title: "Conteúdo adicional (opcional)", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "seoTitle", title: "Título SEO", type: "string" }),
    defineField({ name: "seoDescription", title: "Descrição SEO", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "title", subtitle: "segment", media: "heroBg" },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ?? "Geral" };
    },
  },
});
