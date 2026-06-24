import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/features/projects/types/project";

export function ProjectDetailBody({ project }: { project: Project }) {
  return (
    <Section className="pt-0">
      <PageContainer>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal distance={16}>
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="text-2xl">Project context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>{project.caseStudy.problem}</p>
                <p>{project.caseStudy.approach}</p>
                <div className="rounded-2xl border border-border bg-surface/70 p-4">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Privacy boundary
                  </p>
                  <p className="mt-2 text-foreground/85">
                    {project.caseStudy.privacyNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} distance={18}>
              <Card className="border-border/70 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Core engineering decisions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {project.caseStudy.decisions.map((decision) => (
                      <div
                        key={decision.title}
                        className="rounded-2xl border border-border bg-surface/70 p-5"
                      >
                        <h2 className="font-heading text-xl font-medium">
                          {decision.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {decision.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.16} distance={18}>
              <Card className="border-border/70 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Screenshot slots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ScreenshotPlaceholder label="Primary product screen" />
                    <ScreenshotPlaceholder label="Responsive or workflow detail" />
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.24} distance={18}>
              <Card className="border-border/70 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-2xl">Next proof to add</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-foreground/85">
                    {project.caseStudy.nextSteps.map((step) => (
                      <li key={step} className="flex gap-3">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                          aria-hidden="true"
                        />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-surface/70 p-6 text-center">
      <p className="max-w-48 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
