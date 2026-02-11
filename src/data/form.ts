export interface FormField {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'select';
  required?: boolean;
  options?: string[];
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
    options: ["+92", "+91", "+880", "+1", "+44"],
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