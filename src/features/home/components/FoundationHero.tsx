import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FoundationHero() {
  return (
    <Section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-45"
        aria-hidden="true"
      >
        <div className="absolute top-[-15rem] left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-signal/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>
      <PageContainer>
        <div className="max-w-5xl flex flex-col items-center md:items-start">
          <Badge
            variant="outline"
            className="mb-6 gap-2 border-signal/35 bg-signal/8 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground"
          >
            <span className="size-1.5 rounded-full bg-signal shadow-[0_0_0.75rem_var(--signal)]" />
            Available for meaningful work
          </Badge>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm font-medium text-center md:text-start">
            Frontend-heavy full-stack developer
          </p>
          <h1 className="max-w-5xl font-heading text-4xl leading-[1.1] font-semibold tracking-[0.015em] text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center md:text-start">
            I build ambitious interfaces backed by dependable systems.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 text-center md:text-start">
            I&apos;m Obasi Ikechukwu. I turn product ideas into polished,
            responsive experiences with React, Next.js, TypeScript, and a
            growing full-stack toolkit.
          </p>
          <div className="mt-9 flex gap-3 flex-row flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-signal text-signal-foreground hover:bg-signal/85"
            >
              <Link href="/work">
                Explore selected work
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/brief">View recruiter brief</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
