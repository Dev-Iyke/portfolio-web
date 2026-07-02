import type { Metadata } from "next";
import { RouteShell } from "@/features/page-shell/components/RouteShell";

export const metadata: Metadata = {
  title: "Recruiter Brief | DevIyke Labs",
  description:
    "A concise recruiter-facing summary for Obasi Ikechukwu's frontend-heavy full-stack profile.",
};

export default function BriefPage() {
  return (
    <RouteShell
      eyebrow="Recruiter brief"
      title="A focused summary for quick evaluation."
      description="A scannable view of my role, strengths, project evidence, stack, availability, and contact path for teams that need the short version first."
      primaryHref="/contact"
      primaryLabel="Start a conversation"
      notes={[
        "Frontend-heavy full-stack positioning with honest backend scope.",
        "Selected project evidence, responsibilities, and technical strengths.",
        "A recruiter-friendly structure without the noise of a full case study.",
      ]}
    />
  );
}
