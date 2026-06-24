export function TechnologyList({
  technologies,
}: {
  technologies: readonly string[];
}) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
