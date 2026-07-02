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
      title="Experiments, technical notes, and product-engineering ideas."
      description="A focused space for interface experiments, architecture notes, data-flow breakdowns, and small explorations that show how I think through product engineering problems."
      primaryHref="/"
      primaryLabel="Back to homepage"
      notes={[
        "Small experiments that show curiosity without bloating the main portfolio.",
        "Technical notes about interface architecture, data flow, and product decisions.",
        "Explorations around backend-aware UI, automation, and practical product systems.",
      ]}
    />
  );
}
