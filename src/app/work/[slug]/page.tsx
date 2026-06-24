import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailBody } from "@/features/projects/components/ProjectDetailBody";
import { ProjectDetailHero } from "@/features/projects/components/ProjectDetailHero";
import {
  getProjectBySlug,
  getProjects,
} from "@/features/projects/repositories/projectsRepository";

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Work not found | DevIyke Labs",
    };
  }

  return {
    title: `${project.title} | Work | DevIyke Labs`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="flex-1">
      <ProjectDetailHero project={project} />
      <ProjectDetailBody project={project} />
    </main>
  );
}
