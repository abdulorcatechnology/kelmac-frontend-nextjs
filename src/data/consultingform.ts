// form.ts

export interface FormField {
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "select";
  required?: boolean;
  options?: string[]; // dropdown ke liye
}

export const corporateFormFields: FormField[] = [
  {
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },
  {
    label: "Email Address",
    placeholder: "Enter your email address",
    type: "email",
    required: true,
  },
  {
    label: "Phone number",
    placeholder: "Enter your phone number",
    type: "tel",
    required: true,
    options: ["+92", "+91", "+880", "+1", "+44"], // country codes list
  },
  {
    label: "Company name",
    placeholder: "Write your company name",
    type: "text",
    required: true,
  },
  {
    label: "Designation",
    placeholder: "Write your designation",
    type: "text",
    required: true,
  },
];

export interface FieldOption {
  label: string;
  options?: string[];
}

export const corporateConsultingFields: FieldOption[] = [
  {
    label: "Please select a Scheme",
    options: [
      "ISO 9001:2015 - Quality Management",
      "ISO 14001:2015 - Environmental Management",
      "ISO 45001:2018 - Occupational Health & Safety",
      "ISO 27001:2013 - Information Security",
      "FSSC 22000 - Food Safety System Certification",
      "ISO 13485:2016 - Medical Devices",
      "IATF 16949:2016 - Automotive Quality Management",
    ],
  },
  {
    label: "Please select Organization Type",
    options: ["Private", "Public", "Non-Profit"],
  },
  { label: "Language", options: ["English", "French", "German"] },
  {
    label: "Certifications held (if any)",
    options: ["ISO 9001", "ISO 14001", "None"],
  },
  { label: "Delivery", options: ["On-site", "Online", "Hybrid"] },
  {
    label: "Please select an Industry",
    options: ["IT", "Finance", "Healthcare"],
  },
  { label: "Number of Locations/Suppliers", options: ["1-5", "6-10", "10+"] },
  { label: "Hours of Operation", options: ["9-5", "24/7", "Flexible"] },
  { label: "Certified Scope", options: ["Local", "International"] },
  { label: "Auditing delivery", options: ["Internal", "External"] },
];
