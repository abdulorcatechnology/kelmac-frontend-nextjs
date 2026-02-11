import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth, baseQueryWithoutAuth } from "./api";

export interface EnquiryPayload {
  subject: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  enquiryType: "auditing" | "consulting" | "training";

  // Auditing specific fields
  scheme?: string;
  certificationsHeld?: string;
  delivery?: string;
  numberOfLocations?: string;
  hoursOfOperation?: string;
  certifiedScope?: string;
  auditingDelivery?: string;
  industry?: string;

  // Consulting specific fields
  organizationType?: string;
  language?: string;

  // Training specific fields
  trainingCategory?: string;
  trainingType?: string;
  trainingDelivery?: string;
  numberOfLearners?: number;
  preferredLearningDate?: string;
}

export const enquiriesApi = createApi({
  reducerPath: "enquiriesApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Enquiries"],
  endpoints: (builder) => ({
    createEnquiry: builder.mutation<any, EnquiryPayload>({
      query: (body) => ({
        url: "/enquiries",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Enquiries"],
    }),
  }),
});

export const { useCreateEnquiryMutation } = enquiriesApi;
