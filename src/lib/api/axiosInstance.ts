"use client";

import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { showToast } from "@/lib/toast";

interface ApiErrorResponse {
  error?: string;
  message?: string;
}

export interface ApiRequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  noAuth?: boolean;
  noToast?: boolean;
  successMessage?: string;
  errorMessage?: string;
  successTitle?: string;
  errorTitle?: string;
}

type InternalApiRequestConfig<D = unknown> = InternalAxiosRequestConfig<D> &
  ApiRequestConfig<D>;

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
  withCredentials: true,
});

function isMutationMethod(method?: string) {
  return method
    ? !["get", "head", "options"].includes(method.toLowerCase())
    : false;
}

export function getApiErrorMessage(error: AxiosError<ApiErrorResponse>) {
  return (
    error.response?.data?.message ||
    error.response?.data?.error ||
    error.message ||
    "Something went wrong. Please try again."
  );
}

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const customConfig = config as InternalApiRequestConfig;

    if (customConfig.noAuth) {
      return config;
    }

    // Public portfolio requests do not need auth yet.
    // Admin/CMS auth can be added here later without changing service files.
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const config = response.config as InternalApiRequestConfig;
    const shouldToast = isMutationMethod(config.method) && !config.noToast;

    if (shouldToast) {
      showToast({
        title: config.successTitle || "Success",
        description:
          config.successMessage ||
          response.data?.message ||
          "Operation completed successfully.",
        variant: "success",
      });
    }

    return response;
  },
  (error: AxiosError<ApiErrorResponse>) => {
    const config = error.config as InternalApiRequestConfig | undefined;
    const shouldToast = isMutationMethod(config?.method) && !config?.noToast;

    if (shouldToast) {
      showToast({
        title: config?.errorTitle || "Request failed",
        description: config?.errorMessage || getApiErrorMessage(error),
        variant: "error",
      });
    }

    return Promise.reject(error);
  },
);

export const api = {
  delete: <TResponse = unknown>(
    url: string,
    config?: ApiRequestConfig,
  ) => axiosInstance.delete<TResponse>(url, config),
  get: <TResponse = unknown>(url: string, config?: ApiRequestConfig) =>
    axiosInstance.get<TResponse>(url, config),
  patch: <TResponse = unknown, TPayload = unknown>(
    url: string,
    data?: TPayload,
    config?: ApiRequestConfig<TPayload>,
  ) => axiosInstance.patch<TResponse>(url, data, config),
  post: <TResponse = unknown, TPayload = unknown>(
    url: string,
    data?: TPayload,
    config?: ApiRequestConfig<TPayload>,
  ) => axiosInstance.post<TResponse>(url, data, config),
  put: <TResponse = unknown, TPayload = unknown>(
    url: string,
    data?: TPayload,
    config?: ApiRequestConfig<TPayload>,
  ) => axiosInstance.put<TResponse>(url, data, config),
};

export default axiosInstance;
