import type { Metadata } from "next";
import { RouteShell } from "@/features/page-shell/components/RouteShell";

export const metadata: Metadata = {
  title: "Contact | DevIyke Labs",
  description:
    "Start a conversation with Obasi Ikechukwu about frontend-heavy full-stack work, product interfaces, or collaboration.",
};

export default function ContactPage() {
  return (
    <RouteShell
      eyebrow="Contact"
      title="The contact form will become the first backend-powered feature."
      description="For the first release, this page marks the route and content intent. When we begin backend planning, contact submissions will help define validation, rate limiting, storage, and notification needs."
      primaryHref="/"
      primaryLabel="Back to homepage"
      notes={[
        "A simple form with name, email, project type, message, validation, and safe submission states.",
        "Backend handling for contact messages, rate limiting, and privacy-conscious storage.",
        "Clear expectations for response time, availability, and collaboration fit.",
      ]}
    />
  );
}
