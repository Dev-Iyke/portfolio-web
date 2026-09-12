import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/axiosInstance";
import type { MutationResponseWithoutData, QueryResponse } from "@/lib/api/queryTypes";

export const useWakeUpServer = () => {
  return useQuery({
    queryKey: ["wake-up-server"],
    queryFn: async () => {
      const response = await api.get<MutationResponseWithoutData>(
        `/v1/health`,
        { noToast: true },
      );
      return response.data
    },
  });
};