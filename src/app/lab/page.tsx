import type { Metadata } from "next";
import { RouteShell } from "@/features/page-shell/components/RouteShell";

export const metadata: Metadata = {
  title: "Lab | DevIyke Labs",
  description:
    "Experiments, technical notes, and product-engineering ideas from DevIyke Labs.",
};

export default function LabPage() {
  return (
    <RouteShell
      eyebrow="Lab"
      title="Experiments and technical notes will live here after the core portfolio is stable."
      description="The lab should not distract from the initial portfolio launch. It will become a place for experiments, architecture notes, interface ideas, and small backend explorations."
      primaryHref="/"
      primaryLabel="Back to homepage"
      notes={[
        "Small experiments that show curiosity without bloating the main portfolio.",
        "Technical notes about interface architecture, data flow, and product decisions.",
        "Future backend and AI-assisted ideas only after enough verified content exists.",
      ]}
    />
  );
}
