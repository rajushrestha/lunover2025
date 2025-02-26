import { BlogPost, getAllBlogs, getBlogContent } from "@/lib/mdx-compiler";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import GradientBackground from "@/components/gradient-background";
import TocSidebar from "@/components/toc-sidebar";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const post = await getBlogContent(slug);

  if (!post) {
    notFound();
  }

  // Get all posts for related posts section
  const allPosts = await getAllBlogs();

  // Get random related posts
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const relatedPosts = shuffleArray(
    allPosts.filter((p: BlogPost) => p.slug !== slug)
  ).slice(0, 3);

  const { frontmatter, content, headings } = post;

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-16 relative flex">
        {/* Table of Contents Sidebar */}
        <TocSidebar headings={headings} />

        {/* Post Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm bg-secondary px-3 py-1 rounded-full">
              {frontmatter.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {frontmatter.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
            {frontmatter.title}
          </h1>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div>
              <div className="font-medium">{frontmatter.author}</div>
              <div className="text-sm text-muted-foreground">
                {frontmatter.authorRole}
              </div>
            </div>
            <div className="ml-auto text-sm text-muted-foreground">
              {frontmatter.date}
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full aspect-video bg-gradient-to-br rounded-lg overflow-hidden relative mb-12">
            <GradientBackground gradient={frontmatter.gradient} />
          </div>

          {/* Post Content - Now using RSC */}
          <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-normal" id="content">
            {content}
          </article>
        </div>
      </div>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-normal">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-base md:text-lg font-medium group"
            >
              <span>See All Blogs</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="w-full aspect-[4/3] bg-gradient-to-br rounded-lg overflow-hidden relative mb-4">
                  <GradientBackground gradient={relatedPost.gradient} />
                </div>
                <h3 className="text-xl font-normal mb-2 group-hover:underline underline-offset-2">
                  {relatedPost.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {relatedPost.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
