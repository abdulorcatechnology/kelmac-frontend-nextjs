"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CourseCard } from "@/components/ui/course/CourseCard";
import Button from "@/components/ui/button/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { Search, Filter, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Heading } from "@/components/ui/common/Heading";
import { bundleItems } from "@/data/bundles";
import BundleSlider from "@/components/ui/course/BundleSlider";
import {
  useGetAllCoursesQuery,
  useGetCategoriesQuery,
} from "@/store/api/courseApi";
import { Course, Category } from "@/types/course";
import ViewCertificateButton from "@/components/ui/course/View-Certificate-Button";

export default function AllCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch categories from API
  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategoriesQuery({
      isActive: true,
      isFeatured: true,
      limit: 20,
    });

  // Fetch courses from API
  const {
    data: coursesData,
    isLoading: coursesLoading,
    error,
  } = useGetAllCoursesQuery({
    page: 1,
    limit: 50,
    ...(selectedCategory !== "" ? { category: selectedCategory } : {}),
    ...(debouncedSearch !== "" ? { search: debouncedSearch } : {}),
  });

  const courses = coursesData?.data || [];
  const categories = categoriesData?.data || [];

  // Get unique categories from API data
  const availableCategories = categories.map((cat: Category) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }));

  // Debug logging
  // useEffect(() => {
  //   console.log("Selected Category:", selectedCategory);
  //   console.log("Available Categories:", availableCategories);
  //   console.log("Courses Data:", coursesData);
  //   console.log("Query params:", {
  //     page: 1,
  //     limit: 50,
  //     ...(selectedCategory !== "" ? { category: selectedCategory } : {}),
  //     ...(debouncedSearch !== "" ? { search: debouncedSearch } : {}),
  //   });
  // }, [selectedCategory, availableCategories, debouncedSearch, coursesData]);

  const visibleCourses = courses.slice(0, visibleCount);
  const hasMoreCourses = visibleCount < courses.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategorySelect = (categoryId: string) => {
    console.log("Selecting category:", categoryId);
    setSelectedCategory(categoryId === selectedCategory ? "" : categoryId);
    setVisibleCount(6); // Reset visible count when filtering
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setVisibleCount(6);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setVisibleCount(6);
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearchClick = () => {
    setVisibleCount(6);
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="main">
      <section className="relative overflow-hidden rounded-3xl min-h-screen">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div
            className="absolute top-0 left-0 right-0 h-full min-h-screen bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/images/all-courses.png')" }}
          />
          <div className="absolute left-0 right-0 bottom-0 h-96 bg-gradient-to-b from-transparent to-primary"></div>
        </div>

        <div className="main-container primary-py relative z-10">
          <div className="text-center text-white mb-16 pt-8">
            <h1 className="text-4xl md:text-6xl font-hedvig leading-snug mb-6">
              All Courses
            </h1>
            <p className="md:text-xl font-inter mb-8 max-w-3xl mx-auto">
              Leading an Industry for Innovation, Trusted by Notified Bodies &
              Well
              <br className="hidden md:block" />
              Known Brands, Upskilling is just a Click Away.
            </p>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Search Form */}
              <form
                className="relative max-w-xs mx-auto"
                onSubmit={handleSearch}
              >
                <button
                  type="submit"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  onClick={handleSearchClick}
                >
                  <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-white stroke-[2.5]" />
                  </div>
                </button>
                <input
                  type="text"
                  placeholder="Find your course"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[56px] md:h-[64px] pl-[60px] md:pl-[68px] pr-6 md:pr-8 rounded-full text-primary text-base md:text-lg font-normal placeholder:text-gray-500 placeholder:font-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                />
              </form>

              {/* Category Filter */}
              {!categoriesLoading && availableCategories.length > 0 && (
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-3">
                    Filter by category:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {availableCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category.id
                            ? "bg-white text-primary shadow-lg"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        {category.name}
                        {selectedCategory === category.id && " ✓"}
                      </button>
                    ))}
                    {(searchQuery || selectedCategory) && (
                      <button
                        onClick={handleClearFilters}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-red-500/20 text-white hover:bg-red-500/30 transition-all flex items-center gap-2"
                      >
                        <X className="w-4 h-4" />
                        Clear All
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div id="courses-section">
            {/* Search Results Info */}
            {/* {(searchQuery || selectedCategory) && !coursesLoading && (
              <div className="text-center text-white mb-8">
                <div className="bg-white/10 flex items-center justify-around backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Filter className="w-5 h-5" />
                    <span className="text-lg font-medium">Search Results</span>
                  </div>
                  {searchQuery && (
                    <p className="text-sm mb-1">
                      Searching for:{" "}
                      <span className="font-semibold">"{searchQuery}"</span>
                    </p>
                  )}
                  {selectedCategory && (
                    <p className="text-sm mb-1">
                      Category:{" "}
                      <span className="font-semibold">
                        {
                          availableCategories.find(
                            (cat) => cat.id === selectedCategory
                          )?.name
                        }
                      </span>
                    </p>
                  )}
                  <p className="text-lg font-semibold">
                    {courses.length > 0
                      ? `${courses.length} course${
                          courses.length !== 1 ? "s" : ""
                        } found`
                      : "No courses found"}
                  </p>
                </div>
              </div>
            )} */}

            {/* Loading State */}
            {(coursesLoading || categoriesLoading) && (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <p className="ml-4 text-white text-lg">
                  Loading{" "}
                  {coursesLoading && categoriesLoading
                    ? "courses and categories"
                    : coursesLoading
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
            {!coursesLoading && !categoriesLoading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {visibleCourses.map((course: Course) => (
                  <CourseCard
                    key={course._id}
                    category={course?.category?.name || "General"}
                    title={course.title}
                    description={course.description}
                    hours={course.snapshot?.totalDuration?.toString() || "N/A"}
                    lessons={course.snapshot?.totalLectures || 0}
                    mode={course.snapshot?.skillLevel || "Online"}
                    imageUrl={course.thumbnailUrl}
                    slug={course.slug}
                  />
                ))}
              </div>
            )}

            {/* Empty State */}
            {!coursesLoading &&
              !error &&
              courses.length === 0 &&
              (searchQuery || selectedCategory) && (
                <div className="text-center py-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
                    <Search className="w-16 h-16 text-white/50 mx-auto mb-4" />
                    <p className="text-xl text-white mb-4">
                      No courses found matching your criteria.
                    </p>
                    <p className="text-white/70 mb-6">
                      Try adjusting your search terms or category filters.
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-full font-medium transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              )}

            {/* Load More Button */}
            {!coursesLoading && !error && hasMoreCourses && (
              <div className="text-center pb-8">
                <button
                  onClick={loadMore}
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <span>Show More Courses</span>
                  <span className="bg-white/20 group-hover:bg-white/30 rounded-full px-2 py-1 text-sm font-semibold">
                    +{Math.min(6, courses.length - visibleCount)}
                  </span>
                </button>
                <p className="text-white/70 mt-3 text-sm">
                  Showing {visibleCourses.length} of {courses.length} courses
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="rounded-3xl bg-white overflow-hidden pb-12">
        <div className="main-container primary-py">
          <Heading
            subHeading="Category"
            heading="Explore Our Categories"
            headingClassName="text-primary"
          />
          {categoriesLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="ml-4 text-primary text-lg">Loading categories...</p>
            </div>
          ) : (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={5}
              slidesPerView="auto"
              loop={availableCategories.length > 3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-primary",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-secondary",
              }}
              className="!overflow-visible !pb-12"
            >
              {availableCategories.map((category, i) => (
                <SwiperSlide key={category.id} className="!w-[320px]">
                  <div
                    className="rounded-4xl min-h-[280px] flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer transition-transform hover:scale-105"
                    onClick={() => {
                      handleCategorySelect(category.id);
                      // Scroll to courses section
                      document
                        .getElementById("courses-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80" />
                    <div className="absolute inset-0 bg-black/20" />
                    <h3 className="text-2xl md:text-3xl text-white font-hedvig relative z-10 px-6">
                      {category.name}
                    </h3>
                    <div className="absolute bottom-4 right-4 z-10">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Search className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {/* Bundle Section */}
      <section>
        <div className="main-container primary-py">
          <Heading
            subHeading="Training Bundles"
            heading="Learn More. Spend Less. Unlock value-packed course bundles today"
            headingClassName="text-primary max-w-3xl mx-auto"
          />

          <BundleSlider bundles={bundleItems} />
        </div>
      </section>

      <section className="bg-light overflow-hidden">
        <div className="main-container primary-py">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
            <div className="space-y-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-secondary font-medium">Certificate</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-hedvig text-primary">
                View Sample Certificate of Completion
              </h2>

              <p className="text-lg text-body">
                Upon successful completion, each Learner shall receive a digital
                Certificate of Completion that is recognized globally
              </p>
              {/* Certificate page doesnt exist */}
              <ViewCertificateButton />
            </div>

            <div className="relative w-full lg:w-[120%] h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/certificate.png"
                alt="Sample Certificate of Completion"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
