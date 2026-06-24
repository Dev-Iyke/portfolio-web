import type { Project } from "@/features/projects/types/project";

export const projects = [
  {
    slug: "noonprep",
    title: "Noonprep",
    kicker: "Learning product experience",
    summary:
      "An education-focused platform direction centered on clean study flows, responsive product surfaces, and a frontend architecture that can grow into richer backend-powered learning workflows.",
    evidenceStatus: "active-build",
    role: "Frontend-heavy full-stack developer",
    timeframe: "Current",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    impactAreas: [
      "frontend-architecture",
      "product-interface",
      "workflow-design",
    ],
    highlights: [
      "Designing clear learner-facing flows before locking backend contracts.",
      "Structuring UI and content boundaries so future API integration stays clean.",
      "Prioritizing responsive usability across small screens and desktop layouts.",
    ],
    links: [],
    caseStudy: {
      problem:
        "Learning products need to make progress feel simple: learners should understand where they are, what to do next, and how the interface supports their study rhythm.",
      approach:
        "Start with clear learner-facing flows and a frontend model that can later connect to curriculum, progress, assessment, and account data without forcing UI rewrites.",
      decisions: [
        {
          title: "Design the learning flow before the database",
          description:
            "The interface is being used to discover the real content and workflow needs before the backend model is finalized.",
        },
        {
          title: "Keep future API boundaries visible",
          description:
            "Project sections are shaped around likely backend entities such as lessons, progress states, and learner actions.",
        },
        {
          title: "Prioritize small-screen clarity",
          description:
            "The product direction assumes learners may interact from phones, so responsive hierarchy is treated as core product behavior.",
        },
      ],
      privacyNote:
        "Public notes will focus on interface decisions, workflow thinking, and technical architecture without exposing private product details.",
      nextSteps: [
        "Verify screenshots that can be safely shown.",
        "Map the final learning entities before backend implementation.",
        "Document one concrete engineering challenge from the build.",
      ],
    },
    featured: true,
  },
  {
    slug: "wesonline-marketplace",
    title: "WesOnline Marketplace",
    kicker: "Marketplace product system",
    summary:
      "A marketplace build focused on product discovery, seller-buyer interaction patterns, reusable interface sections, and the groundwork for API-backed commerce data.",
    evidenceStatus: "active-build",
    role: "Frontend-heavy full-stack developer",
    timeframe: "Current",
    stack: ["React", "TypeScript", "Tailwind CSS", "API-ready UI"],
    impactAreas: [
      "product-interface",
      "frontend-architecture",
      "backend-foundation",
    ],
    highlights: [
      "Building reusable marketplace UI patterns around product and listing data.",
      "Separating visual components from data shape decisions to support future services.",
      "Keeping the product story honest while the backend scope is still being defined.",
    ],
    links: [],
    caseStudy: {
      problem:
        "Marketplace interfaces need to help users evaluate listings quickly while keeping enough structure for search, filtering, seller flows, and future transaction data.",
      approach:
        "Build reusable product and listing surfaces first, then let those surfaces guide the backend contract for marketplace data and content management.",
      decisions: [
        {
          title: "Separate listing data from card presentation",
          description:
            "Cards and sections are kept reusable so different marketplace views can consume the same underlying project shape.",
        },
        {
          title: "Plan for API-backed commerce data",
          description:
            "The UI is being structured around likely listing, seller, media, and category boundaries rather than one-off page content.",
        },
        {
          title: "Use conservative public storytelling",
          description:
            "The case study can explain decision-making without revealing sensitive business workflows or private implementation details.",
        },
      ],
      privacyNote:
        "Public notes will avoid confidential marketplace logic and focus on reusable UI architecture, data boundaries, and problem-solving approach.",
      nextSteps: [
        "Confirm which listing screenshots can be published.",
        "Define the minimum marketplace fields for the future API.",
        "Add one architecture diagram after backend planning begins.",
      ],
    },
    featured: true,
  },
  {
    slug: "deviyke-labs-portfolio",
    title: "DevIyke Labs Portfolio",
    kicker: "Portfolio as product lab",
    summary:
      "This portfolio is treated as a living product: a dark-first interface, typed content models, backend-ready repositories, and carefully staged sections that turn personal work into technical evidence.",
    evidenceStatus: "active-build",
    role: "Product engineer and owner",
    timeframe: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
    ],
    impactAreas: [
      "frontend-architecture",
      "performance-accessibility",
      "backend-foundation",
    ],
    highlights: [
      "Using local typed repositories now so backend integration can replace data sources later.",
      "Establishing dark/light theme tokens, motion primitives, and reusable layout patterns.",
      "Documenting backend expectations only after the frontend content model becomes stable.",
    ],
    links: [
      {
        label: "View GitHub profile",
        href: "https://github.com/Dev-Iyke",
        kind: "github",
      },
    ],
    caseStudy: {
      problem:
        "A portfolio can easily become a static gallery, but this one needs to prove frontend craft while preparing for real backend content workflows later.",
      approach:
        "Treat the portfolio like a product: build a polished frontend, define typed local repositories, and let real content needs shape the eventual API.",
      decisions: [
        {
          title: "Use local repositories before the backend",
          description:
            "The UI consumes project data through functions that can later be backed by API calls without changing presentation components.",
        },
        {
          title: "Make dark mode the signature theme",
          description:
            "The visual system starts from a dark editorial/product feel while keeping light mode fully supported through CSS variables.",
        },
        {
          title: "Keep animation centralized",
          description:
            "Motion primitives live in a shared layer so sections can feel alive without scattering animation settings everywhere.",
        },
      ],
      privacyNote:
        "This case study can be public in more detail because it documents the portfolio itself and the reasoning behind the implementation.",
      nextSteps: [
        "Add real screenshots as the interface matures.",
        "Define profile, timeline, and contact content needs before starting the API.",
        "Replace local repositories with API-backed implementations after the model stabilizes.",
      ],
    },
    featured: true,
  },
] as const satisfies readonly Project[];
