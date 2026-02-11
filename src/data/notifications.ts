// Notification data and constants

export const notificationTypes = {
  COURSE_UPDATED: "course_updated",
  COURSE_STARTED: "course_started",
  COURSE_COMPLETED: "course_completed",
  REMINDER: "reminder",
} as const;

export const notificationTypeLabels: Record<string, string> = {
  course_updated: "Course Updated",
  course_started: "Course Started",
  course_completed: "Course Completed",
  reminder: "Reminder",
};

export const notificationColors: Record<string, string> = {
  course_updated: "#3b82f6",
  course_started: "#10b981",
  course_completed: "#8b5cf6",
  reminder: "#f59e0b",
};

// Sample notifications for testing
export const sampleNotifications = [
  {
    id: "69732a96432af64f51b233e1",
    title: "Course Updated",
    message: "Your course has been updated",
    type: "course_updated",
    receiverIds: [
      {
        id: "69731f4d2d4b42ec94c73f2b",
        email: "hamzaali1997.h@gmail.com",
        firstName: "amir",
        lastName: "khan",
        company: "orca-technologies",
        jobTitle: "project manager",
      },
    ],
    readByIds: false,
    meta: {
      courseId: "6973229dd129ccf7ec02e9c3",
    },
    createdAt: "2026-01-23T08:00:22.399Z",
    updatedAt: "2026-01-23T08:00:22.399Z",
  },
];
