import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutTimeline } from "@/features/about/data/about"

export function AboutTimelineSection() {
  return (
    <Section className="pt-6">
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Timeline
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              A quick view of the path behind the work.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              This is the recent journey reflected in my current CV: the roles,
              products, and progression that shaped the way I now approach
              frontend and backend-aware product engineering.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4">
          {aboutTimeline.map((entry, index) => (
            <Reveal key={`${entry.organisation}-${entry.period}`} delay={0.05 * index} distance={18}>
              <Card className="rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader className="gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                      {entry.period}
                    </p>
                    <CardTitle className="mt-3 text-xl sm:text-2xl">
                      {entry.title}
                    </CardTitle>
                    <p className="mt-2 text-sm font-medium text-foreground/80">
                      {entry.organisation}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)]">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {entry.summary}
                  </p>
                  <div className="grid gap-3">
                    {entry.notes.map((note) => (
                      <div
                        key={note}
                        className="rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 text-sm leading-6 text-foreground/85"
                      >
                        {note}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  )
}
