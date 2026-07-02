import type { Project } from "@/features/projects/types/project";

export const projects = [
  {
    slug: "greysoft-school-management-platform",
    title: "Greysoft School Management Platform",
    kicker: "Multi-tenant school SaaS",
    summary:
      "A multi-tenant school management platform with role-based dashboards for school operations, academics, exams, payments, messaging, applicant onboarding, and Greysoft platform administration.",
    evidenceStatus: "shipped",
    role: "Frontend Engineer / Full-stack Integration Engineer",
    timeframe: "12 Months",
    projectType: "Frontend-heavy full-stack",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "Socket.IO",
      "Cloudinary",
    ],
    impactAreas: [
      "frontend-architecture",
      "product-interface",
      "workflow-design",
      "backend-foundation",
      "performance-accessibility",
    ],
    surfaces: [
      "Public site",
      "Tenant school portals",
      "School admin dashboard",
      "Teacher dashboard",
      "Student dashboard",
      "Sponsor/parent dashboard",
      "Applicant portal",
      "Exam portal",
      "Greysoft super-admin",
    ],
    highlights: [
      "Implemented tenant-aware routing for school-specific portals and branded dashboard experiences.",
      "Built reusable dashboard primitives for tables, filters, dialogs, uploads, pagination, exports, and loading states.",
      "Integrated REST APIs and Socket.IO workflows for messaging, exam progress, permissions, and data-heavy operations.",
    ],
    features: [
      {
        name: "Multi-tenant school portals",
        roles: ["Schools", "Admins", "Teachers", "Students", "Sponsors", "Applicants"],
        description:
          "Tenant-aware school experiences support branded portals and dashboards from a shared frontend codebase.",
        engineering:
          "Subdomain-aware middleware, tenant route namespaces, shared layout foundations, and school-specific branding boundaries.",
      },
      {
        name: "Role-based dashboards",
        roles: ["School admins", "Teachers", "Students", "Sponsors", "Applicants", "Platform admins"],
        description:
          "Each user type gets focused navigation and workflows for the school operations they actually need.",
        engineering:
          "Protected layouts, role-scoped session handling, permission-aware navigation, and reusable dashboard components.",
      },
      {
        name: "Messaging across users",
        roles: ["Teachers", "Students", "Sponsors", "Admins"],
        description:
          "Realtime communication patterns connect school stakeholders across dashboard surfaces.",
        engineering:
          "Socket.IO integration, connection feedback, shared messaging state, and API-backed conversation workflows.",
      },
      {
        name: "Exam and entrance exam flows",
        roles: ["Students", "Applicants", "Teachers", "Admins"],
        description:
          "Dedicated exam surfaces support assessment workflows, applicant entrance exams, and progress feedback.",
        engineering:
          "Protected exam routes, socket-powered progress acknowledgements, validation, loading states, and dashboard review flows.",
      },
      {
        name: "Academic operations",
        roles: ["Admins", "Teachers", "Students", "Sponsors"],
        description:
          "Classes, subjects, sections, timetables, assignments, learning materials, attendance, grading, and results are organized into reusable dashboard flows.",
        engineering:
          "Paginated queries, shared filters, reusable tables, form validation, upload states, and API-driven modules.",
      },
      {
        name: "Platform administration",
        roles: ["Greysoft super admins", "Greysoft admins"],
        description:
          "Greysoft operators can manage schools, permissions, support, user logs, customization, and cross-platform operational data.",
        engineering:
          "Super-admin dashboard surfaces, permission-aware screens, operational data tables, and reusable management UI patterns.",
      },
    ],
    outcomes: [
      "Scalable frontend foundation for a multi-school SaaS product.",
      "Consistent dashboard UX across many user roles and operational workflows.",
      "Reusable integration patterns for REST APIs, realtime sockets, media uploads, and exports.",
    ],
    talkingPoints: [
      "Built multi-tenant school portals through subdomain-aware routing and shared application architecture.",
      "Created role-based dashboard experiences for admins, teachers, students, sponsors, applicants, and platform operators.",
      "Used TanStack Query for API server state while Redux handled auth, exam, and messaging session state.",
      "Integrated Socket.IO for realtime messaging and exam progress feedback.",
      "Developed reusable dashboard primitives for data-heavy school operations.",
    ],
    links: [],
    caseStudy: {
      problem:
        "Schools often coordinate admissions, academics, payments, communication, reporting, and exams across disconnected tools. That creates duplicated work, unclear ownership, and extra operational load for administrators, teachers, students, sponsors, and platform operators.",
      approach:
        "Greysoft organizes those workflows into tenant-aware portals and role-based dashboards. The frontend separates user surfaces by role while sharing reusable components, protected layouts, API utilities, query patterns, form systems, and realtime interaction foundations.",
      decisions: [
        {
          title: "Use subdomain-aware routing for tenant portals",
          description:
            "The platform can serve many schools from one frontend while preserving school-specific URLs, route namespaces, and branded experiences.",
        },
        {
          title: "Separate dashboards by role and permission needs",
          description:
            "Admins, teachers, students, sponsors, applicants, and Greysoft operators have different jobs, so the UI keeps workflows focused while reusing shared dashboard primitives.",
        },
        {
          title: "Split server state from session state",
          description:
            "TanStack Query handles API data, caching, retries, and loading states, while Redux Toolkit keeps auth, exam, and messaging state globally available where needed.",
        },
        {
          title: "Centralize API integration and feedback",
          description:
            "Axios utilities and interceptors create consistent authenticated requests, error handling, and user feedback across a large dashboard surface area.",
        },
        {
          title: "Use realtime sockets for interactive workflows",
          description:
            "Messaging and exam progress need faster feedback than ordinary request-response flows, so Socket.IO supports live communication and progress acknowledgement patterns.",
        },
        {
          title: "Invest in reusable dashboard primitives",
          description:
            "Tables, filters, dialogs, upload states, empty states, pagination, and exports repeat across the product, so shared primitives reduce implementation drift as the app grows.",
        },
      ],
      challenges: [
        {
          title: "Multi-role complexity",
          description:
            "Supporting many user roles increases routing, navigation, token, and permission complexity, so role-specific layouts needed clear boundaries.",
        },
        {
          title: "Tenant routing complexity",
          description:
            "Subdomain routing supports a stronger SaaS model, but it requires careful middleware, environment, and local development handling.",
        },
        {
          title: "Frontend-heavy integration scope",
          description:
            "The frontend depends on many backend domains, so the interface needed clear API boundaries, consistent error handling, and careful separation between user flows and service integration.",
        },
        {
          title: "Sensitive operational data",
          description:
            "Schools, students, payments, logs, tickets, and messages require demo data or blurred screenshots for public portfolio use.",
        },
      ],
      outcome:
        "The result is a scalable frontend foundation for a multi-role school SaaS product, with reusable patterns that support tenant customization, protected dashboards, realtime workflows, and data-heavy school operations.",
      backendNote:
        "The frontend integrates with a dedicated backend API for authentication, school data, exams, messaging, payments, permissions, and media workflows.",
      privacyNote:
        "Public notes and screenshots should use demo data only. Real student records, school data, payment details, user logs, support tickets, messages, credentials, and private business logic should not be shown.",
      screenshots: [
        {
          label: "Public landing page",
          src: "/projects/greysoft/greysoft-landing-banner-figma.png",
          alt: "Greysoft landing page preview",
        },
        {
          label: "School admin dashboard home",
        },
        {
          label: "Admin user management table",
        },
        {
          label: "Teacher assignment or exam workflow",
        },
        {
          label: "Student dashboard home",
        },
        {
          label: "Sponsor performance or fees page",
        },
        {
          label: "Exam portal with demo questions",
        },
        {
          label: "Greysoft super-admin school management page",
        },
        {
          label: "Mobile dashboard with sidebar states",
        },
      ],
      nextSteps: [
        "Add polished demo screenshots for the main dashboard surfaces.",
        "Document the API integration boundaries behind the most important user flows.",
        "Turn the strongest feature flows into short interview talking points for applications.",
      ],
    },
    featured: true,
  },
  {
    slug: "noonprep",
    title: "Noonprep",
    kicker: "Learning product experience",
    summary:
      "An education-focused product experience centered on clear study flows, responsive learner interfaces, and structured learning activity screens.",
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
      "Designing learner-facing flows that make study progress and next actions easy to understand.",
      "Structuring UI and content boundaries around learning actions, progress states, and assessment flows.",
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
          title: "Design clear learning flows",
          description:
            "The interface prioritizes what learners need to see, do, and understand during study sessions.",
        },
        {
          title: "Keep data boundaries understandable",
          description:
            "Project sections are organized around lessons, progress states, assessments, and learner actions.",
        },
        {
          title: "Prioritize small-screen clarity",
          description:
            "The product direction assumes learners may interact from phones, so responsive hierarchy is treated as core product behavior.",
        },
      ],
      privacyNote:
        "The case study focuses on learner experience, workflow clarity, and frontend architecture without exposing private product details.",
      nextSteps: [
        "Add polished learner-flow screenshots.",
        "Document the main learning flows and content states.",
        "Document one concrete engineering challenge from the build.",
      ],
    },
    featured: true,
  },
  {
    slug: "wesonline-marketplace",
    title: "WesOnline Marketplace",
    kicker: "Named product platform",
    summary:
      "A product platform focused on structured workflows, reusable interface patterns, and API-connected user experiences.",
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
      "Building reusable interface sections around the product workflows and user actions.",
      "Organizing product screens around clear feature surfaces, roles, and integration points.",
      "Keeping the public story grounded in verified product behavior and engineering work.",
    ],
    links: [],
    caseStudy: {
      problem:
        "The product needs clear workflows, reusable interface patterns, and dependable API-connected screens.",
      approach:
        "The interface is organized around confirmed user flows, structured data, and reusable product sections.",
      decisions: [
        {
          title: "Keep product framing accurate",
          description:
            "The product story is grounded in the real workflows, user roles, and technical decisions visible in the application.",
        },
        {
          title: "Keep the interface model flexible",
          description:
            "The interface structure can support multiple surfaces, feature groups, outcomes, and integration details as the product grows.",
        },
        {
          title: "Use conservative public storytelling",
          description:
            "The case study can explain decision-making without revealing sensitive business workflows or private implementation details.",
        },
      ],
      privacyNote:
        "Public notes will avoid confidential product logic and focus on confirmed UI architecture, data boundaries, and problem-solving approach.",
      nextSteps: [
        "Add the strongest confirmed feature flows.",
        "Add polished screenshots for the main product surfaces.",
        "Clarify the main product surfaces and user journeys.",
      ],
    },
    featured: true,
  },
  {
    slug: "deviyke-labs-portfolio",
    title: "DevIyke Labs Portfolio",
    kicker: "Portfolio as product lab",
    summary:
      "A dark-first developer portfolio built as a product experience, with typed content, polished motion, case-study pages, and a clear path into API-backed content management.",
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
      "Using typed content repositories to keep presentation components clean and data access predictable.",
      "Establishing dark/light theme tokens, motion primitives, and reusable layout patterns.",
      "Keeping content, layout, and data boundaries clear as the portfolio grows.",
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
        "A portfolio can easily become a static gallery, but this one is designed to show product thinking, frontend craft, and structured case-study content.",
      approach:
        "Treat the portfolio like a product: build a polished frontend, define typed content boundaries, and keep the experience easy to extend.",
      decisions: [
        {
          title: "Use typed content repositories",
          description:
            "The UI consumes project data through repository functions so presentation components stay focused and predictable.",
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
        "Refine profile, timeline, and contact content as the portfolio matures.",
        "Connect the content model to an API-backed workflow when the portfolio admin layer is ready.",
      ],
    },
    featured: true,
  },
] as const satisfies readonly Project[];



