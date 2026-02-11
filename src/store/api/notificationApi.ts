// RTK Query API slice for notifications
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Notification,
  NotificationResponse,
  UnreadCountResponse,
} from "@/types/notification";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Notification", "Notifications", "UnreadCount"],
  endpoints: (builder) => ({
    // Get all notifications for current user
    getNotifications: builder.query<any[], void>({
      query: () => "/notifications",
      providesTags: ["Notifications"],
    }),

    // Get unread notification count
    getUnreadCount: builder.query<UnreadCountResponse, void>({
      query: () => "/notifications",
      providesTags: ["UnreadCount"],
    }),

    // Mark single notification as read
    markNotificationAsRead: builder.mutation<Notification, string>({
      query: (notificationId) => ({
        url: `/notifications/${notificationId}/read`,
        method: "PATCH",
      }),
      invalidatesTags: ["Notifications", "UnreadCount"],
    }),

    // Mark all notifications as read
    markAllNotificationsAsRead: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/notifications/mark-all-read",
        method: "PATCH",
      }),
      invalidatesTags: ["Notifications", "UnreadCount"],
    }),

    // Delete a notification
    deleteNotification: builder.mutation<
      { message: string },
      { notificationId: string; userId: string }
    >({
      query: ({ notificationId, userId }) => ({
        url: `/notifications/${notificationId}?userId=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notifications", "UnreadCount"],
    }),
  }),
});

// Export hooks
export const {
  useGetNotificationsQuery,
  useGetUnreadCountQuery,
  useMarkNotificationAsReadMutation,
  useMarkAllNotificationsAsReadMutation,
  useDeleteNotificationMutation,
} = notificationApi;
