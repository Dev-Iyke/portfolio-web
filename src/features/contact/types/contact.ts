export type ContactInquiryType =
  | "role-opportunity"
  | "project-collaboration"
  | "technical-discussion"
  | "other";

export interface ContactFormValues {
  name: string;
  email: string;
  inquiryType: ContactInquiryType;
  message: string;
}

export interface ContactMessagePayload extends ContactFormValues {
  source: "portfolio";
}

export interface ContactMessageResponse {
  message: string;
  receivedAt?: string;
  referenceId?: string;
}
