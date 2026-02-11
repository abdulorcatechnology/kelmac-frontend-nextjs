// Example: Courses List Component using RTK Query
"use client";

import { useState } from "react";
import { useGetAllCoursesQuery } from "@/store/api/courseApi";
import { CourseCard } from "@/components/ui/course/CourseCard";
import { Heading } from "@/components/ui/common/Heading";

export default function CoursesListExample() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<string | undefined>();

  // RTK Query automatically handles loading, error, and caching
  const { data, isLoading, isError, error, isFetching } = useGetAllCoursesQuery(
    {
      page,
      limit: 12,
      category,
    }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            {error && "status" in error
              ? `Error: ${error.status}`
              : "Failed to load courses"}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container primary-py">
      <Heading
        subHeading="Our Courses"
        heading="Browse All Courses"
        headingClassName="text-primary"
      />

      {/* Show fetching indicator */}
      {isFetching && (
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">Updating...</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((course) => (
          <CourseCard
            key={course._id}
            category={course.subcategories[0] || "Course"}
            title={course.title}
            description={course.description}
            hours={`${course.snapshot.totalDuration}`}
            lessons={course.snapshot.totalLectures}
            mode={course.snapshot.skillLevel}
            imageUrl={course.thumbnailUrl}
          />
        ))}
      </div>

      {/* Pagination */}
      {data && data.hasNextPage && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            disabled={isFetching}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
