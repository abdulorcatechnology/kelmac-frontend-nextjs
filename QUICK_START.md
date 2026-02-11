# Quick Start Guide - Course API Integration

## 🚀 Get Started in 3 Steps

### Step 1: Configure Environment

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### Step 2: Verify Backend is Running

Make sure your backend API is running on the specified URL and the endpoint `/api/v1/courses/slug/{slug}` is accessible.

### Step 3: Test the Integration

Visit the course page with the slug:

```
http://localhost:3000/course/complete-executive-mastery-all-access
```

## ✅ What Was Integrated

- ✅ Dynamic course data fetching by slug
- ✅ Loading state with spinner
- ✅ Error handling with user-friendly messages
- ✅ Hero section displays course title, subtitle, topics, and overview
- ✅ Course Snapshot shows duration, lectures, skill level, language, students, and certificate info
- ✅ TypeScript type safety throughout

## 📋 Files to Know

| File | Purpose |
|------|---------|
| `src/lib/api.ts` | API configuration and fetch utility |
| `src/types/course.ts` | Course TypeScript interfaces |
| `src/services/courseService.ts` | Course API methods |
| `src/app/course/[slug]/page.tsx` | Course detail page component |

## 🔧 Troubleshooting

### Course Not Loading?

1. Check backend is running: `http://localhost:3000/api/v1/courses/slug/complete-executive-mastery-all-access`
2. Verify `.env.local` has correct API URL
3. Check browser console for errors

### Type Errors?

Ensure your backend response matches the types in `src/types/course.ts`

### CORS Issues?

Enable CORS in your backend for the frontend origin

## 📖 Full Documentation

See `COURSE_API_INTEGRATION.md` and `IMPLEMENTATION_SUMMARY.md` for complete details.

## 🎯 Next Steps

1. Test with your actual course data
2. Update sessions section to use `course.sessions[]`
3. Pass FAQs data to Faqs component
4. Implement related courses filtering
5. Add instructor data integration

---

**Ready to use!** The integration is complete and error-free.
