import type { Metadata } from "next";
import { RecruiterBriefPageContent } from "@/features/brief/components/RecruiterBriefPageContent";

export const metadata: Metadata = {
  title: "Recruiter Brief",
  description:
    "A concise recruiter-facing summary of Obasi Ikechukwu's frontend-heavy full-stack profile, project evidence, stack, and role fit.",
};

export default function BriefPage() {
  return <RecruiterBriefPageContent />;
}
