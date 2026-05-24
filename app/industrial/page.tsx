import type { Metadata } from "next";
import SegmentPage from "@/components/ui/SegmentPage";
import { SEGMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Energia Solar Industrial",
  description:
    "Usinas solares de grande porte para indústrias. Autonomia energética, redução de demanda contratada e opções PPA.",
};

export default function IndustrialPage() {
  const segment = SEGMENTS.find((s) => s.slug === "industrial")!;
  return <SegmentPage segment={segment} />;
}
