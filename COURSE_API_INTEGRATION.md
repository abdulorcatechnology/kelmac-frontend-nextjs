# Course API Integration

This document explains how the course detail page integrates with the backend API to fetch and display course data dynamically.

## Overview

The course detail page (`/course/[slug]`) now fetches course data from the backend API using the course slug parameter and displays it dynamically.

## Files Created/Modified

### New Files

1. **`src/lib/api.ts`** - API configuration and fetch utility
   - Configures base API URL from environment variables
   - Provides `fetchApi()` helper function for making API calls
   - Includes error handling with custom `ApiError` class

2. **`src/types/course.ts`** - TypeScript type definitions
   - `Course` interface matching the backend schema
   - `CourseSession`, `CourseSnapshot`, `CourseDetails`, `CourseFaq` interfaces
   - Ensures type safety across the application

3. **`src/services/courseService.ts`** - Course API service
   - `getCourseBySlug(slug)` - Fetches course by slug
   - `getCourseById(id)` - Fetches course by ID
   - `getAllCourses(params)` - Fetches all courses with filters

4. **`src/lib/courseHelpers.ts`** - Helper functions
   - `formatCourseDuration()` - Formats duration for display
   - `mapCourseSessionsToProps()` - Maps sessions to component props

5. **`.env.example`** - Environment variable template
   - Template for API configuration

### Modified Files

1. **`src/app/course/[slug]/page.tsx`**
   - Added `useParams()` to get the slug from URL
   - Added state management for course data, loading, and errors
   - Added `useEffect()` to fetch course data on mount
   - Updated hero section to display dynamic data:
     - Course title, subtitle, description
     - Topics from course data
     - Subcategory as tag label
   - Updated Course Snapshot section with dynamic data:
     - Total duration
     - Total lectures
     - Skill level
     - Language
     - Enrolled students
     - Certificate availability
   - Added loading and error states with UI feedback

## API Endpoint

The page fetches course data from:
```
GET /api/v1/courses/slug/{slug}
```

Example:
```
GET /api/v1/courses/slug/complete-executive-mastery-all-access
```

## Environment Setup

1. Create a `.env.local` file in the project root:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

2. For production, update with your production API URL:
```bash
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com
```

## Usage

### Accessing a Course Page

Navigate to:
```
/course/complete-executive-mastery-all-access
```

The page will:
1. Extract the slug from the URL
2. Fetch course data from the API
3. Display loading state while fetching
4. Show course data when loaded
5. Display error message if fetch fails

### Course Data Structure

The course object includes:
- **Basic Info**: title, subtitle, slug, description
- **Content**: sessions, topics, overview
- **Snapshot**: duration, lectures, skill level, language, etc.
- **Details**: what you'll learn, requirements, target audience, features
- **FAQs**: question and answer pairs
- **Pricing**: price, currency
- **Metadata**: ratings, reviews, enrollment count

## State Management

The page uses React hooks for state management:

```typescript
const [course, setCourse] = useState<Course | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```

## Error Handling

Three states are handled:

1. **Loading State**: Shows spinner and "Loading course..." message
2. **Error State**: Shows error message with link to browse all courses
3. **Success State**: Renders the full course page with dynamic data

## Dynamic Data Integration

### Hero Section
- **Tag**: `course.subcategories[0]`
- **Title**: `course.title`
- **Subtitle**: `course.subtitle` (if exists)
- **Topics**: First 3 from `course.topics[]`
- **Description**: `course.overview`

### Course Snapshot
- **Duration**: `course.snapshot.totalDuration`
- **Lessons**: `course.snapshot.totalLectures`
- **Skill Level**: `course.snapshot.skillLevel`
- **Language**: `course.snapshot.language`
- **Students**: `course.snapshot.enrolledStudents`
- **Certificate**: `course.snapshot.certificate`

## Next Steps

To further enhance the integration:

1. **Sessions Data**: Update sessions section to use `course.sessions[]`
2. **FAQs**: Update Faqs component to accept and display `course.faqs[]`
3. **Overview Tab**: Pass course details to Overview component
4. **Syllabus Tab**: Pass course sessions to Syllabus component
5. **Instructor**: Fetch and display instructor data using `course.instructor` ID
6. **Category**: Fetch and display category data using `course.category` ID

## Example Course Data

See the JSON structure in the user request for the complete course data format.

## Troubleshooting

### Course Not Loading

1. Check that the backend API is running
2. Verify the API URL in `.env.local`
3. Check browser console for errors
4. Verify the slug matches a course in the database

### Type Errors

1. Ensure all type definitions in `src/types/course.ts` match backend schema
2. Check that optional fields are handled with `?.` operator

### CORS Errors

If you encounter CORS errors:
1. Ensure backend allows requests from frontend origin
2. Check backend CORS configuration

## Testing

Test the integration:

1. Start the backend API server
2. Start the Next.js dev server
3. Navigate to `/course/complete-executive-mastery-all-access`
4. Verify data loads correctly
5. Test loading state by throttling network
6. Test error state by using invalid slug

## Production Deployment

Before deploying:

1. Set `NEXT_PUBLIC_API_BASE_URL` environment variable in your hosting platform
2. Test with production API endpoint
3. Verify all course slugs work correctly
4. Test loading and error states

## Security Considerations

- API URL is public (NEXT_PUBLIC_ prefix)
- No sensitive data should be in frontend code
- Authentication tokens (if needed) should be handled securely
- Validate and sanitize all data received from API
