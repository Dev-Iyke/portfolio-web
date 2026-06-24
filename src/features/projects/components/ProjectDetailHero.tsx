import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ProjectStatusBadge } from "@/features/projects/components/ProjectStatusBadge";
import { TechnologyList } from "@/features/projects/components/TechnologyList";
import type { Project } from "@/features/projects/types/project";

export function ProjectDetailHero({ project }: { project: Project }) {
  const externalLink = project.links.find((link) => link.kind !== "case-study");

  return (
    <Section className="relative overflow-hidden pb-12 pt-20 sm:pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-signal/12 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal className="max-w-5xl">
          <Button asChild variant="ghost" className="-ml-3 mb-8">
            <Link href="/work">
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Back to work
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.evidenceStatus} />
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
              {project.timeframe}
            </span>
          </div>

          <p className="mt-7 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {project.kicker}
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <TechnologyList technologies={project.stack} />
            {externalLink ? (
              <Button asChild variant="outline" className="sm:ml-auto">
                <Link
                  href={externalLink.href}
                  target={
                    externalLink.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    externalLink.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {externalLink.label}
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
