// RTK Query API slice for courses
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Booking, Course, Category } from "@/types/course";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Course", "Courses", "Category", "Categories", "Booking"],
  endpoints: (builder) => ({
    // Get course by slug
    getCourseBySlug: builder.query<Course, string>({
      query: (slug) => `/courses/slug/${slug}`,
      providesTags: (result, error, slug) => [{ type: "Course", id: slug }],
    }),

    // Get course by ID
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),

    // Get all courses with filters
    getAllCourses: builder.query<
      {
        data: Course[];
        hasNextPage: boolean;
        page: number;
        limit: number;
        total: number;
      },
      {
        page?: number;
        limit?: number;
        category?: string;
        search?: string;
      } | void
    >({
      query: (params) => {
        if (!params) return "/courses";
        const queryString = new URLSearchParams(
          params as Record<string, string>
        ).toString();
        return `/courses${queryString ? `?${queryString}` : ""}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "Course" as const,
                id: _id,
              })),
              { type: "Courses" as const, id: "LIST" },
            ]
          : [{ type: "Courses" as const, id: "LIST" }],
    }),
    getCategories: builder.query<
      {
        data: Category[];
        hasNextPage: boolean;
        page: number;
        limit: number;
        total: number;
      },
      {
        page?: number;
        limit?: number;
        search?: string;
        isActive?: boolean;
        isFeatured?: boolean;
      } | void
    >({
      query: (params) => {
        if (!params) return "/categories";
        const queryString = new URLSearchParams(
          params as Record<string, string>
        ).toString();
        return `/categories${queryString ? `?${queryString}` : ""}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "Category" as const,
                id: _id,
              })),
              { type: "Categories" as const, id: "LIST" },
            ]
          : [{ type: "Categories" as const, id: "LIST" }],
    }),
    // Create a new course (if needed)
    createCourse: builder.mutation<Course, Partial<Course>>({
      query: (courseData) => ({
        url: "/courses",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),
    createBooking: builder.mutation<Booking, Partial<Booking>>({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),
    getBookingById: builder.query<Booking, string>({
      query: (id) => `/bookings/${id}`,
      providesTags: (result, error, id) => [{ type: "Booking", id }],
    }),
    // Update a course (if needed)
    updateCourse: builder.mutation<
      Course,
      { id: string; data: Partial<Course> }
    >({
      query: ({ id, data }) => ({
        url: `/courses/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Course", id },
        { type: "Courses", id: "LIST" },
      ],
    }),

    // Delete a course (if needed)
    deleteCourse: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Course", id },
        { type: "Courses", id: "LIST" },
      ],
    }),

    // Get all class schedules with pagination and filters
    getAllClassSchedules: builder.query<
      {
        data: any[];
        hasNextPage: boolean;
        page: number;
        limit: number;
        total: number;
      },
      {
        search?: string;
        status?: string;
        studentId?: string;
        limit?: number;
        page?: number;
      } | void
    >({
      query: (params) => {
        if (!params) return "/class-schedule/paginated/list";
        const queryParams: any = {};
        if (params.search) queryParams.search = params.search;
        if (params.status) queryParams.status = params.status;
        if (params.studentId) queryParams.studentId = params.studentId;
        if (params.limit) queryParams.limit = params.limit;
        if (params.page) queryParams.page = params.page;
        const queryString = new URLSearchParams(queryParams).toString();
        return `/class-schedule/paginated/list?${queryString}`;
      },
      providesTags: [{ type: "Courses", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCourseBySlugQuery,
  useGetCourseByIdQuery,
  useGetAllCoursesQuery,
  useGetCategoriesQuery,
  useCreateCourseMutation,
  useCreateBookingMutation,
  useGetBookingByIdQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useGetAllClassSchedulesQuery,
} = courseApi;
