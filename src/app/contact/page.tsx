import type { Metadata } from "next";
import { ContactPageContent } from "@/features/contact/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | DevIyke Labs",
  description:
    "Start a conversation with Obasi Ikechukwu about frontend-heavy full-stack work, product interfaces, or collaboration.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
