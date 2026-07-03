import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutSnapshot } from "@/features/about/data/about"

export function AboutHeroSection() {
  return (
    <Section className="relative overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:gap-10">
          <Reveal distance={16}>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                About
              </p>
              <h1 className="font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
                I build product interfaces that make complex systems feel clear,
                useful, and dependable.
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                <p>
                  I am a frontend-heavy full-stack developer who enjoys working
                  at the point where interface quality, business logic, and
                  system thinking meet.
                </p>
                <p>
                  Most of my work has been frontend-led, but the way I approach
                  products is already shaped by data flow, backend contracts,
                  operational edge cases, and how the system will scale beyond
                  the first release.
                </p>
                <p>
                  The goal is not just to make screens look good. It is to make
                  ambitious products easier to use, easier to extend, and easier
                  for teams to trust.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/work">
                    Explore selected work
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Start a conversation
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} distance={20}>
            <Card className="h-full rounded-[1.8rem] border border-border/70 bg-card/75 py-0 shadow-sm">
              <CardHeader className="border-b border-border/70 px-6 py-6">
                <CardTitle className="text-xl">
                  Snapshot of how I work
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-1">
                {aboutSnapshot.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/70 bg-surface/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.label}
                      </p>
                      <span className="font-mono text-[0.68rem] text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-foreground/85">
                      {item.value}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  )
}
