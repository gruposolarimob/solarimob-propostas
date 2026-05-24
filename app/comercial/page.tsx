import type { Metadata } from "next";
import SegmentPage from "@/components/ui/SegmentPage";
import { SEGMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Energia Solar Comercial",
  description:
    "Energia solar para empresas e comércios. Reduza custos operacionais e ganhe competitividade com energia fotovoltaica.",
};

export default function ComercialPage() {
  const segment = SEGMENTS.find((s) => s.slug === "comercial")!;
  return <SegmentPage segment={segment} />;
}
