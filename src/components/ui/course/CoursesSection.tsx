"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";
import { CourseCard } from "@/components/ui/course/CourseCard";
import { Heading } from "@/components/ui/common/Heading";
import {
  useGetAllCoursesQuery,
  useGetCategoriesQuery,
} from "@/store/api/courseApi";
import { Course, Category } from "@/types/course";

interface CoursesSectionProps {
  title?: string;
  subtitle?: string;
  showSearchBar?: boolean;
  showCategoryFilters?: boolean;
  showViewAllButton?: boolean;
  maxCoursesToShow?: number;
  className?: string;
  containerClassName?: string;
  onCourseClick?: (course: Course) => void;
  categories?: Array<{
    key: string;
    label: string;
    value: string;
  }>;
  useApiCategories?: boolean; // Option to fetch categories from API
}

export default function CoursesSection({
  title = "Delivering sustainable, societal impact & process based solutions",
  subtitle = "Courses",
  showSearchBar = true,
  showCategoryFilters = true,
  showViewAllButton = true,
  maxCoursesToShow,
  className = "primary-py bg-primary overflow-hidden rounded-3xl",
  containerClassName = "main-container",
  onCourseClick,
  categories: propCategories = [
    { key: "all", label: "Top Offer Courses", value: "all" },
    { key: "quality", label: "Quality Management", value: "quality" },
    {
      key: "environment",
      label: "Environment health & safety",
      value: "environment",
    },
  ],
  useApiCategories = true,
}: CoursesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const coursesRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Fetch categories from API if useApiCategories is true
  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategoriesQuery(
      {
        isActive: true,
        isFeatured: true,
        limit: 20,
      },
      {
        skip: !useApiCategories,
      }
    );

  // Fetch courses from API
  const {
    data: coursesData,
    isLoading,
    error,
  } = useGetAllCoursesQuery({
    page: 1,
    limit: maxCoursesToShow || 50,
    ...(activeCategory !== "all" ? { category: activeCategory } : {}),
    ...(searchQuery !== "" ? { search: searchQuery } : {}),
  });

  const courses = coursesData?.data || [];
  console.log("Categories used in CoursesSection:", categoriesData?.data);

  // Transform API categories to match component format
  const apiCategories =
    categoriesData?.data?.map((cat: Category) => ({
      key: cat.slug,
      label: cat.name,
      value: cat.id,
    })) || [];

  // Use API categories if available, otherwise use prop categories
  const categories = useApiCategories
    ? [{ key: "all", label: "All Courses", value: "all" }, ...apiCategories]
    : propCategories;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        clearSearch();
      }
    };

    if (isSearchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive]);

  const handleSearchClick = () => {
    setIsSearchActive(true);
    setActiveCategory("all");
    coursesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchActive(false);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setIsSearchActive(false);
    setSearchQuery("");
  };

  const handleCourseCardClick = (course: Course) => {
    if (onCourseClick) {
      onCourseClick(course);
    }
  };

  const displayedCourses = maxCoursesToShow
    ? courses.slice(0, maxCoursesToShow)
    : courses;

  return (
    <section ref={coursesRef} className={className}>
      <div className={containerClassName}>
        <Heading
          subHeading={subtitle}
          heading={
            <>
              {title.split("&").map((part, index) => (
                <span key={index}>
                  {part}
                  {index < title.split("&").length - 1 && (
                    <>
                      &<br />
                    </>
                  )}
                </span>
              ))}
            </>
          }
          headingClassName="text-white text-6xl"
        />

        <div>
          {/* Search Bar */}
          {showSearchBar && isSearchActive && (
            <div
              ref={searchBarRef}
              className="mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500"
            >
              <form
                className="relative"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <button
                  type="button"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                >
                  <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-primary hover:bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-white stroke-[2.5]" />
                  </div>
                </button>

                <input
                  type="text"
                  placeholder="Search courses by title, category, or description..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full h-[56px] md:h-[64px] pl-[60px] md:pl-[68px] pr-6 md:pr-8 rounded-full text-gray-900 text-base md:text-lg font-normal placeholder:text-gray-500 placeholder:font-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  autoFocus
                />
              </form>

              {searchQuery && courses.length > 0 && (
                <div className="text-center text-white mt-4">
                  <p className="text-lg">
                    Found {courses.length} course
                    {courses.length !== 1 ? "s" : ""} for "{searchQuery}"
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Category Filters */}
          {showCategoryFilters && !isSearchActive && (
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 items-center justify-center mb-8 md:mb-12 lg:mb-16 px-4 sm:px-0">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  size="lg"
                  text={category.label}
                  className="!px-3 !py-2 !text-xs sm:!px-5 sm:!py-3 sm:!text-base md:!px-7 md:!py-4 md:!text-xl shrink-0"
                  color={
                    activeCategory === category.value
                      ? "white"
                      : "semitransparent"
                  }
                  onClick={() => handleCategoryClick(category.value)}
                />
              ))}

              {showSearchBar && (
                <Button
                  size="lg"
                  text="Search Courses"
                  className="!px-3 !py-2 !text-xs sm:!px-5 sm:!py-3 sm:!text-base md:!px-7 md:!py-4 md:!text-xl shrink-0"
                  color="transparent"
                  iconPosition="before"
                  iconclassName="bg-transparent !min-w-5 !min-h-5 sm:!min-w-6 sm:!min-h-6 md:!min-w-8 md:!min-h-8"
                  icon={<Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
                  onClick={handleSearchClick}
                />
              )}
            </div>
          )}

          {/* Loading State */}
          {(isLoading || categoriesLoading) && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <p className="ml-4 text-white text-lg">
                Loading{" "}
                {isLoading && categoriesLoading
                  ? "courses and categories"
                  : isLoading
                  ? "courses"
                  : "categories"}
                ...
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-xl text-red-300 mb-4">
                Failed to load courses. Please try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="text-secondary hover:text-gray-300 text-lg underline"
              >
                Refresh page
              </button>
            </div>
          )}

          {/* Courses Grid */}
          {!isLoading && !categoriesLoading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-18">
                {displayedCourses?.length > 0 ? (
                  displayedCourses?.map((course) => (
                    <CourseCard
                      key={course.id}
                      category={course?.category?.name}
                      title={course.title}
                      description={course.description}
                      hours={
                        course.snapshot?.totalDuration?.toString() || "N/A"
                      }
                      lessons={course.snapshot?.totalLectures || 0}
                      mode={course.snapshot?.skillLevel || "Online"}
                      imageUrl={course.thumbnailUrl}
                      slug={course.slug}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-xl text-white mb-4">
                      No courses found matching your{" "}
                      {isSearchActive ? "search" : "filter"}.
                    </p>
                    <button
                      onClick={() => {
                        clearSearch();
                        setActiveCategory("all");
                      }}
                      className="text-secondary hover:text-gray-500 text-lg"
                    >
                      Clear filters and view all courses
                    </button>
                  </div>
                )}
              </div>

              {/* View All Button */}
              {showViewAllButton && (
                <div className="text-center">
                  <Button
                    size="lg"
                    text="View all courses"
                    href="/course/all-courses/"
                    color="transparent"
                    iconclassName="bg-transparent"
                    icon={<IconArrowRight />}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
