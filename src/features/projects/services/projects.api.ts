import { useQuery } from "@tanstack/react-query";
import type { Project } from "@/features/projects/types/project";
import { api } from "@/lib/api/axiosInstance";
import type { QueryResponse } from "@/lib/api/queryTypes";

const projectsEndpoint = "/v1/projects";

export const projectQueryKeys = {
  all: ["projects"] as const,
  detail: (slug: string) => ["projects", "detail", slug] as const,
};

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: projectQueryKeys.all,
    queryFn: async () => {
      const response = await api.get<QueryResponse<Project[]>>(
        projectsEndpoint,
        { noToast: true },
      );
      return response.data.data;
    },
  });
};

export const useGetProjectBySlug = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: projectQueryKeys.detail(slug),
    queryFn: async () => {
      const response = await api.get<QueryResponse<Project>>(
        `${projectsEndpoint}/${encodeURIComponent(slug)}`,
        { noToast: true },
      );
      return response.data.data;
    },
    enabled: Boolean(slug),
  });
};
