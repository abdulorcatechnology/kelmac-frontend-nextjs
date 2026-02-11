// Helper file to convert course data to display format
import { Course } from "@/types/course";
import { CourseSessionProps } from "@/components/ui/course/CourseSession";

export function formatCourseDuration(duration: number): string {
  const hours = duration;
  if (hours < 8) {
    return `${hours} hours`;
  }
  const days = Math.ceil(hours / 8);
  return `${days} Days (${hours} hours)`;
}

export function mapCourseSessionsToProps(course: Course): CourseSessionProps[] {
  // This is a placeholder - in real implementation,
  // you would map actual session data from the backend
  return course.sessions.map((session, index) => ({
    label: session.title,
    date: `${session.dayGroup} - Day ${session.dayNumber}`,
    time: `${session.startTime} - ${session.endTime}`,
    sessionBadge: session.sessionType,
    sessionBadgeType: getSessionBadgeType(session.sessionType),
    href: "#",
    seatsLeft: 4, // This should come from backend
  }));
}

function getSessionBadgeType(
  sessionType: string
): "green" | "purple" | "yellow" | "red" {
  const typeMap: Record<string, "green" | "purple" | "yellow" | "red"> = {
    introduction: "green",
    lecture: "purple",
    practical: "yellow",
    assessment: "red",
  };
  return typeMap[sessionType] || "green";
}
