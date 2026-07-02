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

export interface ProjectFeature {
  readonly name: string;
  readonly roles: readonly string[];
  readonly description: string;
  readonly engineering: string;
}

export interface ProjectScreenshot {
  readonly label: string;
  readonly src?: string;
  readonly alt?: string;
}

export interface ProjectCaseStudy {
  readonly problem: string;
  readonly approach: string;
  readonly decisions: readonly ProjectDecision[];
  readonly privacyNote: string;
  readonly nextSteps: readonly string[];
  readonly outcome?: string;
  readonly backendNote?: string;
  readonly challenges?: readonly ProjectDecision[];
  readonly screenshots?: readonly ProjectScreenshot[];
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly kicker: string;
  readonly summary: string;
  readonly heroImage?: {
    readonly src: string;
    readonly alt?: string;
  };
  readonly evidenceStatus: ProjectEvidenceStatus;
  readonly role: string;
  readonly timeframe: string;
  readonly stack: readonly string[];
  readonly impactAreas: readonly ProjectImpactArea[];
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly caseStudy: ProjectCaseStudy;
  readonly featured: boolean;
  readonly projectType?: string;
  readonly surfaces?: readonly string[];
  readonly features?: readonly ProjectFeature[];
  readonly outcomes?: readonly string[];
  readonly talkingPoints?: readonly string[];
}
