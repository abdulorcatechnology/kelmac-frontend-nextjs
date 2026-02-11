# RTK Query Integration Guide

## Overview

This project now uses **RTK Query** (Redux Toolkit Query) for efficient data fetching, caching, and state management. RTK Query provides powerful features like automatic caching, background updates, and optimistic updates out of the box.

## Installation

RTK Query is already installed in this project:

```bash
npm install @reduxjs/toolkit react-redux
```

## Project Structure

```
src/
├── store/
│   ├── api/
│   │   └── courseApi.ts        # Course API endpoints
│   ├── store.ts                # Redux store configuration
│   ├── hooks.ts                # Typed Redux hooks
│   └── ReduxProvider.tsx       # Redux Provider component
└── app/
    └── layout.tsx              # Root layout with ReduxProvider
```

## Core Files

### 1. Course API (`src/store/api/courseApi.ts`)

Defines all course-related API endpoints:

```typescript
import { useGetCourseBySlugQuery } from "@/store/api/courseApi";

// In your component
const { data, isLoading, isError, error } = useGetCourseBySlugQuery(slug);
```

**Available Endpoints:**

| Hook | Description | Parameters |
|------|-------------|------------|
| `useGetCourseBySlugQuery` | Fetch course by slug | `slug: string` |
| `useGetCourseByIdQuery` | Fetch course by ID | `id: string` |
| `useGetAllCoursesQuery` | Fetch all courses | `{ page?, limit?, category?, search? }` |
| `useCreateCourseMutation` | Create new course | `courseData: Partial<Course>` |
| `useUpdateCourseMutation` | Update existing course | `{ id, data }` |
| `useDeleteCourseMutation` | Delete course | `id: string` |

### 2. Redux Store (`src/store/store.ts`)

Configures the Redux store with RTK Query middleware:

```typescript
import { store } from "@/store/store";
import type { RootState, AppDispatch } from "@/store/store";
```

### 3. Redux Provider (`src/store/ReduxProvider.tsx`)

Wraps the app with Redux Provider (already added to `layout.tsx`).

### 4. Typed Hooks (`src/store/hooks.ts`)

Provides type-safe Redux hooks:

```typescript
import { useAppDispatch, useAppSelector } from "@/store/hooks";
```

## Usage Examples

### Example 1: Fetch Course by Slug

```typescript
"use client";
import { useGetCourseBySlugQuery } from "@/store/api/courseApi";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: course, isLoading, isError, error } = useGetCourseBySlugQuery(slug, {
    skip: !slug, // Skip query if slug is not available
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.status}</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
```

### Example 2: Fetch All Courses with Pagination

```typescript
"use client";
import { useState } from "react";
import { useGetAllCoursesQuery } from "@/store/api/courseApi";

export default function CoursesPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetAllCoursesQuery({
    page,
    limit: 12,
  });

  return (
    <div>
      {isLoading && <div>Loading courses...</div>}
      {isFetching && <div>Updating...</div>}
      
      <div className="grid grid-cols-3 gap-4">
        {data?.data.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>

      {data?.hasNextPage && (
        <button onClick={() => setPage(p => p + 1)}>
          Load More
        </button>
      )}
    </div>
  );
}
```

### Example 3: Create Course (Mutation)

```typescript
"use client";
import { useCreateCourseMutation } from "@/store/api/courseApi";

export default function CreateCourseForm() {
  const [createCourse, { isLoading, isSuccess, isError }] = useCreateCourseMutation();

  const handleSubmit = async (formData: any) => {
    try {
      const result = await createCourse(formData).unwrap();
      console.log("Course created:", result);
    } catch (error) {
      console.error("Failed to create course:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Course"}
      </button>
      {isSuccess && <div>Course created successfully!</div>}
      {isError && <div>Failed to create course</div>}
    </form>
  );
}
```

### Example 4: Update Course

```typescript
const [updateCourse] = useUpdateCourseMutation();

const handleUpdate = async () => {
  try {
    await updateCourse({
      id: courseId,
      data: { title: "New Title" }
    }).unwrap();
  } catch (error) {
    console.error("Update failed:", error);
  }
};
```

### Example 5: Polling & Refetching

```typescript
// Automatic polling every 30 seconds
const { data } = useGetAllCoursesQuery(
  { page: 1 },
  {
    pollingInterval: 30000, // Poll every 30s
    refetchOnMountOrArgChange: true, // Refetch on mount
    refetchOnFocus: true, // Refetch when window regains focus
    refetchOnReconnect: true, // Refetch when reconnecting
  }
);
```

## RTK Query Features

### 1. Automatic Caching

RTK Query automatically caches API responses:

```typescript
// First call - fetches from API
const { data } = useGetCourseBySlugQuery("my-course");

// Second call with same slug - uses cached data
const { data: cachedData } = useGetCourseBySlugQuery("my-course");
```

### 2. Cache Invalidation

Mutations automatically invalidate related cache:

```typescript
// Creating a course invalidates the courses list
const [createCourse] = useCreateCourseMutation(); // This will refetch useGetAllCoursesQuery

// Updating a course invalidates that specific course
const [updateCourse] = useUpdateCourseMutation(); // This will refetch useGetCourseByIdQuery
```

### 3. Optimistic Updates

Update UI before server confirms:

```typescript
const [updateCourse] = useUpdateCourseMutation();

await updateCourse({
  id: courseId,
  data: updatedData,
}, {
  // Optimistic update
  optimisticUpdate: {
    Course: (draft, { id, data }) => {
      Object.assign(draft, data);
    }
  }
});
```

### 4. Loading States

RTK Query provides granular loading states:

```typescript
const { data, isLoading, isFetching, isSuccess, isError } = useGetCourseBySlugQuery(slug);

// isLoading: true only on initial load
// isFetching: true on any fetch (including background refetch)
// isSuccess: true when data is available
// isError: true when request failed
```

### 5. Error Handling

```typescript
const { error } = useGetCourseBySlugQuery(slug);

if (error) {
  if ('status' in error) {
    // HTTP error
    const errMsg = error.status === 404 
      ? "Course not found" 
      : `Error: ${error.status}`;
  } else {
    // Network error
    const errMsg = "Network error";
  }
}
```

## Advanced Features

### Conditional Queries

Skip queries based on conditions:

```typescript
const { data } = useGetCourseBySlugQuery(slug, {
  skip: !slug || slug === "", // Don't run if slug is empty
});
```

### Manual Refetch

```typescript
const { data, refetch } = useGetCourseBySlugQuery(slug);

// Later, manually trigger refetch
const handleRefresh = () => {
  refetch();
};
```

### Prefetching

```typescript
import { useEffect } from "react";
import { courseApi } from "@/store/api/courseApi";
import { useAppDispatch } from "@/store/hooks";

function CourseLink({ slug }) {
  const dispatch = useAppDispatch();

  const handleMouseEnter = () => {
    // Prefetch course data on hover
    dispatch(courseApi.util.prefetch('getCourseBySlug', slug, { force: false }));
  };

  return (
    <a href={`/course/${slug}`} onMouseEnter={handleMouseEnter}>
      View Course
    </a>
  );
}
```

## Migration from Previous Implementation

### Before (Custom Fetch)

```typescript
const [course, setCourse] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCourse = async () => {
    try {
      const data = await courseService.getCourseBySlug(slug);
      setCourse(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchCourse();
}, [slug]);
```

### After (RTK Query)

```typescript
const { data: course, isLoading: loading } = useGetCourseBySlugQuery(slug);
```

## Benefits

✅ **Automatic caching** - No need to manage cache manually
✅ **Background updates** - Keeps data fresh automatically
✅ **Deduplication** - Multiple components requesting same data = 1 request
✅ **Loading states** - Built-in loading/error states
✅ **Optimistic updates** - Update UI before server confirms
✅ **Cache invalidation** - Automatic cache updates on mutations
✅ **TypeScript support** - Full type safety
✅ **DevTools** - Redux DevTools integration
✅ **Polling** - Automatic data refresh at intervals
✅ **Retry logic** - Automatic retry on failure

## Environment Configuration

Make sure `.env.local` is configured:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

## Debugging with Redux DevTools

1. Install Redux DevTools browser extension
2. Open DevTools in your browser
3. Navigate to Redux tab
4. See all API requests, cache state, and mutations

## Best Practices

### 1. Use Skip for Conditional Queries

```typescript
const { data } = useGetCourseBySlugQuery(slug, {
  skip: !slug, // Don't run query if no slug
});
```

### 2. Handle All States

```typescript
if (isLoading) return <Spinner />;
if (isError) return <ErrorMessage error={error} />;
if (!data) return <NotFound />;
return <CourseDetail course={data} />;
```

### 3. Use Mutations for Data Changes

```typescript
// ❌ Don't use GET requests to change data
const { data } = useGetCourseByIdQuery(id);

// ✅ Use mutations
const [updateCourse] = useUpdateCourseMutation();
```

### 4. Leverage Cache Tags

Tags automatically invalidate related queries:

```typescript
// In courseApi.ts
providesTags: ["Course", "Courses"],
invalidatesTags: ["Courses"], // Invalidates all courses queries
```

## Troubleshooting

### Issue: Data not updating after mutation

**Solution**: Check that tags are properly configured:
```typescript
invalidatesTags: [{ type: "Courses", id: "LIST" }]
```

### Issue: Too many requests

**Solution**: Use `skip` option or adjust `refetchOnFocus`:
```typescript
const { data } = useGetCourseBySlugQuery(slug, {
  refetchOnFocus: false,
});
```

### Issue: Type errors

**Solution**: Ensure types match API response:
```typescript
// Define proper return types in courseApi.ts
builder.query<Course, string>({ ... })
```

## Resources

- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React-Redux Hooks](https://react-redux.js.org/api/hooks)

## Next Steps

1. ✅ RTK Query is fully integrated
2. Consider adding more API endpoints (categories, instructors, etc.)
3. Implement optimistic updates for better UX
4. Add error boundaries for better error handling
5. Set up polling for real-time updates

---

**Status**: ✅ RTK Query Integration Complete
**Version**: 1.0.0
**Last Updated**: 2025-11-06
