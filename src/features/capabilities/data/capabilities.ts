import type { Capability } from "@/features/capabilities/types/capability";

export const capabilities = [
  {
    title: "Business-aware solution design",
    summary:
      "I work to understand the business rules, user intent, and product constraints behind a request, then shape the interface around the solution the product actually needs.",
    proofPoints: [
      "Turns rough ideas and requirements into clear user flows and interface decisions.",
      "Identifies rules, dependencies, and edge cases before they become broken product experiences.",
      "Connects business intent with technical implementation so the UI solves the right problem.",
    ],
    tools: ["Product logic", "Workflow mapping", "Requirements", "Edge cases"],
  },
  {
    title: "Product-grade interfaces",
    summary:
      "I turn product requirements into interfaces that feel clear, responsive, and dependable across real user journeys, not just polished static screens.",
    proofPoints: [
      "Reusable feature sections that support product growth.",
      "Responsive layouts shaped around hierarchy, scanning, and user intent.",
      "Accessibility, loading states, and empty states treated as product requirements.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "API-connected workflows",
    summary:
      "I build frontend flows with a clear understanding of the backend contract: data shape, validation, server state, auth-aware screens, and graceful failure paths.",
    proofPoints: [
      "Clean collaboration around payloads, edge cases, and response states.",
      "UI presentation separated from data access so API changes stay manageable.",
      "Data boundaries modeled early enough to make future backend integration smoother.",
    ],
    tools: ["REST APIs", "TanStack Query", "Validation", "Auth flows"],
  },
  {
    title: "Maintainable delivery",
    summary:
      "I care about the structure behind the screen: naming, folders, component boundaries, documentation, and decisions that make a project easier to extend after the first version ships.",
    proofPoints: [
      "Focused custom components instead of oversized files.",
      "Documented tradeoffs, privacy boundaries, and implementation reasoning.",
      "Room for future backend, CMS, and content workflows without reshaping the UI from scratch.",
    ],
    tools: ["Feature folders", "Design tokens", "Motion", "Documentation"],
  },
] as const satisfies readonly Capability[];
