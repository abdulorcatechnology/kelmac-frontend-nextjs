"use client";
import { useState } from "react";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { BlogCard } from "@/components/ui/blog/BlogCard";
import { Heading } from "@/components/ui/common/Heading";
import { blogItems } from "@/data/blogs";

const TrendingPost = ({ className = '' }) => {
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 w-fit ${className}`}>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <span>Trending Post</span>
        </div>
    );
};

export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;
    const totalPages = Math.ceil(blogItems.length / blogsPerPage);

    const getCurrentPageBlogs = () => {
        const startIndex = (currentPage - 1) * blogsPerPage;
        const endIndex = startIndex + blogsPerPage;
        return blogItems.slice(startIndex, endIndex);
    };

    const handlePageChange = (page: number): void => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const currentBlogs = getCurrentPageBlogs();

    return (
        <main className="main">
            <section className="bg-primary bg-[url('/images/bg/contact.png')] bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py">
                    <div className="text-white md:w-[85%] lg:w-[62%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
                            Read our latest blogs
                        </h1>
                        <p className="md:text-xl font-inter text-capitalize mt-8">
                            Please take the time to complete the following form and provide us with as much information as you are able to ensure we can deal with your request as promptly and accurately as we can. We look forward to hearing from you! Thank you for contacting Us!
                        </p>
                    </div>
                </div>
            </section>

            <section className="primary-py">
                <div className="main-container flex justify-center">
                    <div className="w-full h-[550px] text-white rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/blog-page-container.png')] flex flex-col justify-end p-8">
                        <TrendingPost className="mb-4" />
                        <h2 className="text-4xl md:text-5xl font-hedvig leading-snug mb-6 md:w-[80%]">
                            The Power of Employee Motivation: Boosting Productivity and Performance
                        </h2>
                        <p className="md:text-xl md:w-[80%] mb-8">
                            Please take the time to complete the following form and provide us with as much information as you are able to ensure we can deal with your request as promptly and accurately as we can. We look forward to hearing from you!<br /> Thank you for contacting Us!
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ width: '1200px', margin: '0 auto', padding: '80px 0' }}>
                    <Heading
                        subHeading="Timeline"
                        heading="Latest From The Blog"
                        className="text-primary"
                    />
                    <div style={{ width: '1200px', margin: '0 auto' }}>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '600px 600px', 
                            gap: '24px',
                            marginBottom: '32px',
                            justifyContent: 'center'
                        }}>
                            {currentBlogs.map((blog) => (
                                <div key={blog.id} style={{ width: '620px' }}>
                                    <BlogCard
                                        id={blog.id}
                                        imageUrl={blog.imageUrl}
                                        category={blog.category}
                                        date={blog.date}
                                        title={blog.title}
                                        excerpt={blog.excerpt}
                                        href={`/resources/latest-blogs/${blog.slug}`}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12 md:mt-16 bg-gray-100 p-4 rounded-xl">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg border border-border text-sm md:text-base font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer ${currentPage === index + 1
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-white text-primary hover:bg-primary hover:text-white hover:shadow-md'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            {totalPages > 2 && <span className="px-1 md:px-2 text-body text-sm md:text-base">...</span>}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-2 md:px-4 md:py-3 rounded-lg border border-border text-sm md:text-base font-medium flex items-center gap-1 md:gap-2 transition-all duration-300 transform ${currentPage === totalPages
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                                    : 'bg-white text-primary hover:bg-primary hover:text-white hover:scale-105 hover:shadow-md cursor-pointer'
                                    }`}
                            >
                                <span className="hidden sm:inline">Next</span>
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <NewsletterSection />
        </main>
    );
}