
// Define the shape of a single form field
interface FormField {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  defaultValue?: string | number;
}

// Array of form fields for Corporate Training Form 2
export const corporateTrainingFields: FormField[] = [
  {
    label: "Please select a Scheme",
    type: "select",
    required: true,
    options: [
      "ISO 9001:2015 - Quality Management",
      "ISO 14001:2015 - Environmental Management",
      "ISO 45001:2018 - Occupational Health & Safety",
      "ISO 27001:2013 - Information Security",
      "FSSC 22000 - Food Safety System Certification",
      "ISO 13485:2016 - Medical Devices",
      "IATF 16949:2016 - Automotive Quality Management"
    ],
  },
  {
    label: "Please select a Training Category",
    type: "select",
    required: true,
    options: [
      "Fundamentals/Awareness",
      "Internal Auditor",
      "Lead Auditor",
      "Implementation",
      "Transition/Upgrade",
      "Advanced/Specialist"
    ],
  },
  {
    label: "Please select a Training Type",
    type: "select",
    required: true,
    options: [
      "Foundation Course",
      "Internal Auditor Training",
      "Lead Auditor Training",
      "Management Representative Training",
      "Advanced Auditing Techniques",
      "Risk-Based Thinking Workshop",
      "Document Control Training"
    ],
  },
  {
    label: "Please select Training delivery",
    type: "select",
    required: true,
    options: [
      "Virtual Live (Online)",
      "Classroom (On-site)",
      "Hybrid (Blended Learning)",
      "Self-paced eLearning",
      "On-demand Recorded Sessions"
    ],
  },
  {
    label: "Number of Learners",
    type: "number",
    required: true,
    placeholder: "Enter number of learners",
    defaultValue: 1,
  },
  {
    label: "Preferred Learning Event Date",
    type: "date",
    required: true,
    defaultValue: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  },
];