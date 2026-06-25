const orbitItems = ["Context", "Flow", "Contract", "Proof"] as const;

export function LabProcessVisual() {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-5 shadow-sm sm:p-7">
      <div
        className="absolute -left-20 -top-20 size-56 rounded-full bg-signal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-0 size-72 rounded-full bg-chart-3/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] opacity-30 [background-size:22px_22px]"
        aria-hidden="true"
      />

      <div className="relative flex h-full min-h-[25rem] flex-col justify-between gap-8">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            Operating loop
          </p>
          <h3 className="mt-4 max-w-sm font-heading text-3xl leading-tight font-semibold">
            From business idea to reliable product interface.
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            The work moves through business context, user flow, backend
            contract, and public proof. Each layer keeps the next one honest.
          </p>
        </div>

        <div className="relative mx-auto grid size-64 place-items-center sm:size-72">
          <div
            className="absolute inset-4 rounded-full border border-dashed border-signal/35"
            aria-hidden="true"
          />
          <div
            className="absolute inset-14 rounded-full border border-border bg-background/55 backdrop-blur"
            aria-hidden="true"
          />
          <div className="relative z-10 rounded-3xl border border-border bg-surface/85 px-5 py-4 text-center shadow-sm">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
              DevIyke Labs
            </p>
            <p className="mt-1 font-heading text-xl font-medium">Method</p>
          </div>

          {orbitItems.map((item, index) => (
            <span
              key={item}
              className={getOrbitClassName(index)}
              aria-label={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function getOrbitClassName(index: number) {
  const base =
    "absolute z-20 rounded-full border px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] shadow-sm backdrop-blur";

  const positions = [
    "left-1/2 top-0 -translate-x-1/2 border-signal/40 bg-signal/15 text-foreground",
    "right-0 top-1/2 -translate-y-1/2 border-chart-2/40 bg-chart-2/15 text-foreground",
    "bottom-0 left-1/2 -translate-x-1/2 border-chart-3/40 bg-chart-3/15 text-foreground",
    "left-0 top-1/2 -translate-y-1/2 border-chart-4/40 bg-chart-4/15 text-foreground",
  ] as const;

  return `${base} ${positions[index]}`;
}
