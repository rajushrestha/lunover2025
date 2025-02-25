import ArrowUpRight from "@/components/icons/arrow-up-right";
import { getAllPosts } from "@/lib/mdx-compiler";
import Image from "next/image";
import Link from "next/link";
import GradientBackground from '@/components/gradient-background';

export default async function BlogPage() {
  const blogPosts = await getAllPosts();
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-[7vw] font-normal leading-[1.05] tracking-tight sm:-mx-2">
            Our Blog
          </h1>

          <div className="py-8 sm:py-10 md:py-12 lg:py-16">
            <p className="max-w-3xl text-2xl leading-normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight">
              Insights, strategies, and stories about creating growth-focused
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
              <div className="w-full md:w-1/2 aspect-video bg-gradient-to-br rounded-lg overflow-hidden relative">
                <GradientBackground gradient={featuredPost.gradient} />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:underline">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-muted-foreground">
                    {featuredPost.date}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-lg font-medium group"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Post Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full"
              >
                <div className="w-full aspect-video md:aspect-[4/3] rounded-lg overflow-hidden relative mb-6">
                  <GradientBackground gradient={post.gradient} />
                </div>
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-3 group-hover:underline underline-offset-2">
                  {post.title}
                </h3>
                <p className="text-base text-muted-foreground mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
