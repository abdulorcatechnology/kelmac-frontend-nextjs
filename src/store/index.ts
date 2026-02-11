// Central export file for all RTK Query functionality
// Import everything you need from this single file

// API Hooks
export {
  useGetCourseBySlugQuery,
  useGetCourseByIdQuery,
  useGetAllCoursesQuery,
  useGetCategoriesQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  courseApi,
} from "./api/courseApi";

// Notification API Hooks
export {
  useGetNotificationsQuery,
  useGetUnreadCountQuery,
  useMarkNotificationAsReadMutation,
  useMarkAllNotificationsAsReadMutation,
  useDeleteNotificationMutation,
  notificationApi,
} from "./api/notificationApi";

// Redux Hooks
export { useAppDispatch, useAppSelector, useAppStore } from "./hooks";

// Store
export { store } from "./store";
export type { RootState, AppDispatch } from "./store";

// Provider
export { ReduxProvider } from "./ReduxProvider";
