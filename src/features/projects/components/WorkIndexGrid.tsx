import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { getProjects } from "@/features/projects/repositories/projectsRepository";

export function WorkIndexGrid() {
  const projects = getProjects();

  return (
    <Section className="pt-0">
      <PageContainer>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={0.06 * index}
              distance={18}
              className="min-h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
