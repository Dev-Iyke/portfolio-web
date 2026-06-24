export type ProjectEvidenceStatus = "shipped" | "active-build" | "experiment";

export type ProjectImpactArea =
  | "frontend-architecture"
  | "product-interface"
  | "backend-foundation"
  | "workflow-design"
  | "performance-accessibility";

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly kind: "case-study" | "live" | "github" | "external";
}

export interface ProjectDecision {
  readonly title: string;
  readonly description: string;
}

export interface ProjectCaseStudy {
  readonly problem: string;
  readonly approach: string;
  readonly decisions: readonly ProjectDecision[];
  readonly privacyNote: string;
  readonly nextSteps: readonly string[];
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly kicker: string;
  readonly summary: string;
  readonly evidenceStatus: ProjectEvidenceStatus;
  readonly role: string;
  readonly timeframe: string;
  readonly stack: readonly string[];
  readonly impactAreas: readonly ProjectImpactArea[];
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly caseStudy: ProjectCaseStudy;
  readonly featured: boolean;
}
