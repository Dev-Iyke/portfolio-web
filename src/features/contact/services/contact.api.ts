"use client";

import { useMutation } from "@tanstack/react-query";
import { api, type ApiRequestConfig } from "@/lib/api/axiosInstance";
import { showToast } from "@/lib/toast";
import type {
  ContactMessagePayload,
  ContactMessageResponse,
} from "@/features/contact/types/contact";

const contactEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/v1/contact";

const shouldUseMockContactApi =
  process.env.NEXT_PUBLIC_CONTACT_API_MODE !== "live";

function wait(ms: number) {
  return new Promise((resolve) => {
    globalThis.setTimeout(resolve, ms);
  });
}

export async function submitContactMessage(
  payload: ContactMessagePayload,
): Promise<ContactMessageResponse> {
  if (shouldUseMockContactApi) {
    await wait(850);

    const response = {
      message:
        "Message received. Backend delivery will be connected when the API is ready.",
      receivedAt: new Date().toISOString(),
      referenceId: `mock-${Date.now()}`,
    };

    showToast({
      title: "Message received",
      description: response.message,
      variant: "success",
    });

    return response;
  }

  const response = await api.post<ContactMessageResponse, ContactMessagePayload>(
    contactEndpoint,
    payload,
    {
      errorMessage:
        "Please check your details and try again. Your message is still here.",
      errorTitle: "Message not sent",
      noAuth: true,
      successMessage: "I will review it and respond clearly.",
      successTitle: "Message received",
    } satisfies ApiRequestConfig<ContactMessagePayload>,
  );

  return response.data;
}

export function useSubmitContactMessage() {
  return useMutation({
    mutationFn: (payload: ContactMessagePayload) =>
      submitContactMessage(payload),
  });
}
