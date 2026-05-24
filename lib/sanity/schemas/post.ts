import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post do Blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Resumo", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Imagem de capa", type: "image", options: { hotspot: true } }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Energia Solar", value: "energia-solar" },
          { title: "Economia", value: "economia" },
          { title: "Tecnologia", value: "tecnologia" },
          { title: "Legislação", value: "legislacao" },
          { title: "Financiamento", value: "financiamento" },
        ],
      },
    }),
    defineField({ name: "content", title: "Conteúdo", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "publishedAt", title: "Data de publicação", type: "datetime" }),
    defineField({ name: "seoDescription", title: "Descrição SEO", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "title", media: "coverImage" } },
  orderings: [{ title: "Mais recente", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
