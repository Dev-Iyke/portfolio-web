import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Capability } from "@/features/capabilities/types/capability";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <Card className="h-full border-border/70 bg-card/70 transition-colors hover:border-signal/35">
      <CardHeader>
        <CardTitle className="text-2xl leading-tight">
          {capability.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-6">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          {capability.summary}
        </p>

        <div>
          <p className="mb-3 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            How this shows up
          </p>
          <ul className="space-y-3 text-sm leading-6 text-foreground/85">
            {capability.proofPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2" aria-label="Related tools">
          {capability.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
