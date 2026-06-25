import { CapabilityNarrativeSection } from "@/features/capabilities/components/CapabilityNarrativeSection";
import { FoundationHero } from "@/features/home/components/FoundationHero";
import { SelectedWorkSection } from "@/features/projects/components/SelectedWorkSection";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <FoundationHero />
      <SelectedWorkSection />
      <CapabilityNarrativeSection />
    </main>
  );
}
