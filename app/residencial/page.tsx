import type { Metadata } from "next";
import SegmentPage from "@/components/ui/SegmentPage";
import { SEGMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Energia Solar Residencial",
  description:
    "Energia solar para sua casa. Reduza até 95% da conta de luz com sistema fotovoltaico instalado pelo Grupo Solarimob.",
};

export default function ResidencialPage() {
  const segment = SEGMENTS.find((s) => s.slug === "residencial")!;
  return <SegmentPage segment={segment} />;
}
