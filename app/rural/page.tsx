import type { Metadata } from "next";
import SegmentPage from "@/components/ui/SegmentPage";
import { SEGMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Energia Solar Rural e Agronegócio",
  description:
    "Energia solar para propriedades rurais, fazendas e agroindústria. Reduza o custo de irrigação e operações com energia fotovoltaica.",
};

export default function RuralPage() {
  const segment = SEGMENTS.find((s) => s.slug === "rural")!;
  return <SegmentPage segment={segment} />;
}
