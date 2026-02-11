// Notification types based on the backend schema

export interface NotificationReceiver {
  id: string;
  email: string;
  password: string;
  provider: string;
  isEmailVerified: boolean;
  socialId: string | null;
  firstName: string;
  lastName: string;
  role: {
    id: number;
  };
  status: {
    id: number;
  };
  company: string;
  jobTitle: string;
  emailAddress: string;
  phoneNumber: number;
  industry: string;
  country: string;
  isDeleted: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationMeta {
  courseId?: string;
  [key: string]: any;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type:
    | "course_updated"
    | "course_started"
    | "course_completed"
    | "reminder"
    | string;
  receiverIds: NotificationReceiver[];
  readByIds: boolean | string[];
  meta: NotificationMeta;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationResponse {
  data: Notification[];
  total: number;
  unread: number;
}

export interface UnreadCountResponse {
  unreadCount: number;
}
