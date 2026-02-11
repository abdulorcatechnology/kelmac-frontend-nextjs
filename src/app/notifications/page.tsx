"use client";

import React, { useState, useEffect } from "react";
import {
  useGetNotificationsQuery,
  useMarkNotificationAsReadMutation,
  useMarkAllNotificationsAsReadMutation,
  useDeleteNotificationMutation,
} from "@/store";
import { Notification } from "@/types/notification";
import styles from "./notification.module.css";
import { useSocket } from "@/store/SocketProvider";

export default function NotificationsPage() {
  const [selectedNotificationId, setSelectedNotificationId] = useState<
    string | null
  >(null);
  const {
    data: notificationsData,
    isLoading,
    error,
    refetch,
  } = useGetNotificationsQuery();
  const [markAsRead] = useMarkNotificationAsReadMutation();
  const [markAllAsRead] = useMarkAllNotificationsAsReadMutation();
  const [deleteNotification] = useDeleteNotificationMutation();
  const { socket, isConnected } = useSocket();

  // const notifications = notificationsData?.data || [];
  // const unreadCount = notificationsData?.unread || 0;
  const notifications = notificationsData || [];
  const unreadCount =
    notifications.filter((n) => !n.readByIds || n.readByIds.length === 0)
      .length || 0;
  // Listen for real-time notifications via socket
  useEffect(() => {
    if (!socket || !isConnected) return;

    const handleNewNotification = (notification: any) => {
      console.log("New notification received:", notification);
      // Refetch notifications to update the list
      refetch();
    };

    const handleNotificationUpdate = (data: any) => {
      console.log("Notification updated:", data);
      // Refetch notifications to update the list
      refetch();
    };

    const handleNotificationDelete = (data: any) => {
      console.log("Notification deleted:", data);
      // Refetch notifications to update the list
      refetch();
    };

    // Subscribe to socket events
    socket.on("notification", handleNewNotification);
    socket.on("notificationUpdate", handleNotificationUpdate);
    socket.on("notificationDelete", handleNotificationDelete);

    // Cleanup on unmount
    return () => {
      socket.off("notification", handleNewNotification);
      socket.off("notificationUpdate", handleNotificationUpdate);
      socket.off("notificationDelete", handleNotificationDelete);
    };
  }, [socket, isConnected, refetch]);

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await markAsRead(notificationId).unwrap();
    } catch (err) {
      console.error("Failed to mark notification as read:", err);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead().unwrap();
    } catch (err) {
      console.error("Failed to mark all notifications as read:", err);
    }
  };

  const handleDelete = async (notificationId: string, userId: string) => {
    try {
      await deleteNotification({ notificationId, userId }).unwrap();
    } catch (err) {
      console.error("Failed to delete notification:", err);
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      course_updated: "Course Updated",
      course_started: "Course Started",
      course_completed: "Course Completed",
      reminder: "Reminder",
    };
    return labels[type] || type;
  };

  const getTypeBadgeColor = (type: string) => {
    const colors: Record<string, string> = {
      course_updated: "#3b82f6",
      course_started: "#10b981",
      course_completed: "#8b5cf6",
      reminder: "#f59e0b",
    };
    return colors[type] || "#6b7280";
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading notifications...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Failed to load notifications</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Notifications</h1>
          {unreadCount > 0 && (
            <span className={styles.unreadBadge}>{unreadCount} unread</span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            className={styles.markAllButton}
            onClick={handleMarkAllAsRead}
          >
            Mark All as Read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No notifications yet</p>
        </div>
      ) : (
        <div className={styles.notificationsList}>
          {notifications.map((notification: Notification) => {
            const isRead = Array.isArray(notification.readByIds)
              ? notification.readByIds.length > 0
              : notification.readByIds;

            return (
              <div
                key={notification.id}
                className={`${styles.notificationCard} ${isRead ? styles.read : styles.unread}`}
              >
                <div className={styles.notificationContent}>
                  <div className={styles.notificationHeader}>
                    <h3 className={styles.notificationTitle}>
                      {notification.title}
                    </h3>
                    <span
                      className={styles.typeBadge}
                      style={{
                        backgroundColor: getTypeBadgeColor(notification.type),
                      }}
                    >
                      {getTypeLabel(notification.type)}
                    </span>
                  </div>
                  <p className={styles.notificationMessage}>
                    {notification.message}
                  </p>
                  <div className={styles.notificationFooter}>
                    <span className={styles.timestamp}>
                      {new Date(notification.createdAt).toLocaleDateString()} at{" "}
                      {new Date(notification.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>

                <div className={styles.actions}>
                  {!isRead && (
                    <button
                      className={styles.actionButton}
                      onClick={() => handleMarkAsRead(notification.id)}
                      title="Mark as read"
                    >
                      ✓
                    </button>
                  )}
                  <button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={() => {
                      const userId = notification.receiverIds[0]?.id;
                      if (userId) {
                        handleDelete(notification.id, userId);
                      }
                    }}
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
