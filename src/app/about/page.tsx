import type { Metadata } from "next";
import { AboutPageContent } from "@/features/about/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Obasi Ikechukwu, a frontend-heavy full-stack developer who builds product interfaces with strong systems thinking and backend-aware discipline.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
