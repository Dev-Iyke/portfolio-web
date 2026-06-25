import type { Metadata } from "next";
import { RouteShell } from "@/features/page-shell/components/RouteShell";

export const metadata: Metadata = {
  title: "About | DevIyke Labs",
  description:
    "About Obasi Ikechukwu, a frontend-heavy full-stack developer building product interfaces with backend-aware thinking.",
};

export default function AboutPage() {
  return (
    <RouteShell
      eyebrow="About"
      title="The fuller story is being shaped around real work, not filler copy."
      description="This page will cover my journey, working principles, strengths, and the direction I am taking as a frontend-heavy full-stack developer."
      primaryHref="/work"
      primaryLabel="View work instead"
      notes={[
        "A concise journey from frontend craft into deeper product and backend-aware engineering.",
        "Working principles that show how I approach business logic, UI decisions, collaboration, and delivery.",
        "A clearer picture of what I am looking for next and the teams I can help.",
      ]}
    />
  );
}
