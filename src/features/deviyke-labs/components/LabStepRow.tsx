import type {
  LabStep,
  LabStepTone,
} from "@/features/deviyke-labs/types/philosophy";

const toneStyles: Record<
  LabStepTone,
  {
    shell: string;
    marker: string;
    label: string;
    outcome: string;
  }
> = {
  signal: {
    shell:
      "border-signal/35 bg-linear-to-br from-signal/15 via-card/75 to-card/65",
    marker: "bg-signal text-signal-foreground shadow-[0_0_1.5rem_var(--signal)]",
    label: "text-signal",
    outcome: "border-signal/25 bg-signal/10",
  },
  cyan: {
    shell:
      "border-chart-2/35 bg-linear-to-br from-chart-2/15 via-card/75 to-card/65",
    marker: "bg-chart-2 text-background shadow-[0_0_1.5rem_var(--chart-2)]",
    label: "text-chart-2",
    outcome: "border-chart-2/25 bg-chart-2/10",
  },
  violet: {
    shell:
      "border-chart-3/35 bg-linear-to-br from-chart-3/15 via-card/75 to-card/65",
    marker: "bg-chart-3 text-background shadow-[0_0_1.5rem_var(--chart-3)]",
    label: "text-chart-3",
    outcome: "border-chart-3/25 bg-chart-3/10",
  },
  green: {
    shell:
      "border-chart-4/35 bg-linear-to-br from-chart-4/15 via-card/75 to-card/65",
    marker: "bg-chart-4 text-background shadow-[0_0_1.5rem_var(--chart-4)]",
    label: "text-chart-4",
    outcome: "border-chart-4/25 bg-chart-4/10",
  },
};

export function LabStepRow({ step }: { step: LabStep }) {
  const tone = toneStyles[step.tone];

  return (
    <article
      className={`relative overflow-hidden rounded-[1.75rem] border p-5 shadow-sm ${tone.shell}`}
    >
      <div
        className="absolute right-0 top-0 size-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-foreground/5 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-5 sm:grid-cols-[4.5rem_1fr]">
        <div>
          <span
            className={`grid size-12 place-items-center rounded-2xl font-mono text-sm font-semibold ${tone.marker}`}
          >
            {step.number}
          </span>
        </div>
        <div>
          <p
            className={`font-mono text-[0.68rem] uppercase tracking-[0.18em] ${tone.label}`}
          >
            {step.label}
          </p>
          <h3 className="mt-2 font-heading text-2xl leading-tight font-medium">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {step.description}
          </p>
          <div className={`mt-5 rounded-2xl border p-4 ${tone.outcome}`}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Outcome
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground/85">
              {step.outcome}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
