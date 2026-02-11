
export type TrainingType = "basic" | "internal" | "lead" | "upgrade";


export interface FormData {
  subject: string;
  industry: string;
  trainingType: TrainingType | "";
}

export interface FormErrors {
  subject: boolean;
  industry: boolean;
  trainingType: boolean;
}

export type QuestionStep = 1 | 2;

export interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: FormData) => void | Promise<void>;
}

export interface SidebarProps {
  activeIndex: number;
}

export interface TrainingOptionProps {
  id: string;
  label: string;
  description: string;
  checked?: boolean;
  onChange?: () => void;
}

export interface QuestionConfig {
  id: string;
  name: string;
}

export interface TrainingOptionConfig {
  id: TrainingType;
  label: string;
  description: string;
  level?: string;
  duration?: string;
}

export interface SubjectCategory {
  value: string;
  label: string;
  description?: string;
}

export interface IndustryCategory {
  value: string;
  label: string;
  description?: string;
}

export interface CourseRecommendation {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  matchScore: number;
}

export interface RecommendationResponse {
  success: boolean;
  recommendations: CourseRecommendation[];
  message?: string;
}