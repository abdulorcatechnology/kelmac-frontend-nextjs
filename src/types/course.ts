// Course types based on the backend schema

export interface CourseSession {
  id: string;
  title: string;
  description: string;
  sessionType:
    | "introduction"
    | "lecture"
    | "practical"
    | "assessment"
    | "break";
  startTime: string;
  endTime: string;
  duration: number;
  isFree: boolean;
  isBreak: boolean;
  topics: SessionTopic[];
  resources: any[];
  color: string;
  order: number;
  dayGroup: string;
  dayNumber: number;
  timeBlocks: {
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    timeZone: string;
  }[];
  seatsLeft: number;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  courseId: Course | string;
  studentId: User | string;
  sessionId: CourseSession | string;
  timeTableId: string;
  paymentMethod: string;
  status: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SessionTopic {
  title: string;
  description: string;
  isCompleted: boolean;
  order: number;
}

export interface Category {
  _id: string;
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string; // Icon URL or icon class name
  image?: string; // Category image URL
  color?: string; // Hex color for UI
  subcategories: string[]; // Array of subcategory names
  courseCount: number; // Number of courses in this category
  order: number; // Display order
  isActive: boolean;
  isFeatured: boolean;
  deletedAt?: Date;
  createdAt?: string;
  updatedAt?: string;
}

export interface CourseSnapshot {
  totalLectures: number;
  totalDuration: number;
  skillLevel: string;
  language: string;
  captionsLanguage: string;
  enrolledStudents: number;
  certificate: boolean;
  lifetimeAccess: boolean;
  mobileAccess: boolean;
}

export interface CourseDetails {
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  features: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface CourseTimeTable {
  id: string;
  date: string;
  description: string;
  time: string;
}
export interface User {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
}

export interface Course {
  id: any;
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  instructor: User | string;
  category: Category;
  subcategories: string[];
  topics: string[];
  overview: string;
  thumbnailUrl: string;
  sessions: CourseSession[];
  snapshot: CourseSnapshot;
  details: CourseDetails;
  faqs: CourseFaq[];
  price: number;
  currency: string;
  enrolledCount: number;
  averageRating: number;
  totalReviews: number;
  totalRatings: number;
  isPublished: boolean;
  isFeatured: boolean;
  isBestseller: boolean;
  isNew: boolean;
  timeTable: CourseTimeTable[];
  discountedPrice: number;
  createdAt: string;
  updatedAt: string;
}
