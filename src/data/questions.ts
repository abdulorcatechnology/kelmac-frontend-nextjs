import type {
  SubjectCategory,
  IndustryCategory,
  TrainingOptionConfig,
  QuestionConfig,
} from "@/data/questionTypes";


export const subjects: SubjectCategory[] = [
  {
    value: "computer-science",
    label: "Computer Science",
  },
  {
    value: "business-administration",
    label: "Business Administration",
  },
  {
    value: "psychology",
    label: "Psychology",
  },
  {
    value: "mechanical-engineering",
    label: "Mechanical Engineering",
  },
  {
    value: "electrical-engineering",
    label: "Electrical Engineering",
  },
];

export const industries: IndustryCategory[] = [
  {
    value: "information-technology",
    label: "Information Technology",
  },
  {
    value: "healthcare",
    label: "Healthcare",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "manufacturing",
    label: "Manufacturing",
  },
];


export const trainingOptions: TrainingOptionConfig[] = [
  {
    id: "basic",
    label: "Basic Training",
    description: "Beginners, Awareness Level",
  },
  {
    id: "internal",
    label: "Internal Auditor Training",
    description: "For Professionals Auditing Within Their Own Company",
  },
  {
    id: "lead",
    label: "Lead Auditor Training",
    description:
      "For Professionals Auditing External Suppliers Or Conducting Full Audits",
  },
  {
    id: "upgrade",
    label: "Upgrade Training",
    description:
      "For Professionals With Existing Certification Needing An Update, E.G. ISO 9001:2015",
  },
];


export const questionSteps: QuestionConfig[] = [
  { id: "Ques-1", name: "Curriculum Selection" },
  { id: "Ques-2", name: "Training Type" },
];


export const getTrainingOption = (id: string): TrainingOptionConfig | undefined => {
  return trainingOptions.find((option) => option.id === id);
};


export const getSubject = (value: string): SubjectCategory | undefined => {
  return subjects.find((subject) => subject.value === value);
};


export const getIndustry = (value: string): IndustryCategory | undefined => {
  return industries.find((industry) => industry.value === value);
};