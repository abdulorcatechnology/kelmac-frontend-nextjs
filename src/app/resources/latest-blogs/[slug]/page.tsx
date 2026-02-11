import { notFound } from "next/navigation";
import Image from "next/image";
import { blogItems } from "@/data/blogs";
import { Heading } from "@/components/ui/common/Heading";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { IconList } from "@/components/ui/common/IconList";
import { BlogCard } from "@/components/ui/blog/BlogCard";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogItems.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogItems.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogItems
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  return (
    <main className="main">
      <section className="bg-primary rounded-3xl overflow-hidden">
        <div className="main-container pt-20 pb-0">
          <div className="text-white max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-hedvig leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-lg">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.category}</span>
              <span>•</span>
              <span>Posted on {blog.postedBy}</span>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] mt-12 rounded-t-2xl overflow-hidden">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="main-container primary-py">
          <article className="max-w-[1150px] mx-auto font-inter-tight">
            <p className="text-base md:text-lg text-black leading-relaxed mb-12">
              {blog.content.introduction}
            </p>

            {blog.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                  {section.heading}
                </h2>

                <p className="text-base md:text-lg text-black leading-relaxed mb-6">
                  {section.content}
                </p>

                {section.list && (
                  <ul className="space-y-4 text-base md:text-lg text-black my-8 ml-6">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="font-semibold">{item.split(':')[0]}:</span>
                        {item.split(':')[1]}
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <div className="relative w-full h-[350px] md:h-[450px] my-8 rounded-2xl overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>

      {
        relatedBlogs.length > 0 && (
          <section className="bg-light">
            <div className="main-container primary-py">
              <Heading
                subHeading="Related Posts"
                heading="Discover Recent Posts"
                className="text-primary"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-light">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard
                    key={relatedBlog.id}
                    id={relatedBlog.id}
                    imageUrl={relatedBlog.imageUrl}
                    category={relatedBlog.category}
                    date={relatedBlog.date}
                    title={relatedBlog.title}
                    excerpt={relatedBlog.excerpt}
                    href={`/resources/latest-blogs/${relatedBlog.slug}`}
                    className="bg-light"
                  />
                ))}
              </div>
            </div>
          </section>
        )
      }

    </main >
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  const blog = blogItems.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}