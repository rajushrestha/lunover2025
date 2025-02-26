"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import { BlogPost, getLatestBlogs } from "@/lib/mdx-compiler";

export default function Blog() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        // Fetch from an API route instead of direct function call
        const response = await fetch('/api/blog/latest?count=4');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const posts = await response.json();
        setLatestPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  useEffect(() => {
    if (latestPosts.length > 0) {
      setSelectedPost(latestPosts[0]);
    }
  }, [latestPosts]);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end mb-10 lg:mb-20">
          <div className="pb-4 md:pb-8 lg:pr-20 lg:pb-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal">
              Our Blogs and Insights
            </h2>
          </div>

          <Link
            href="/services"
            className="text-lg sm:text-2xl font-medium inline-flex flex-shrink-0 uppercase underline underline-offset-8 hover:no-underline"
          >
            More Articles
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* image preview of first blog post and change on hover to each blog post */}
          <div className="hidden lg:flex lg:w-2/5 h-full lg:pr-10 lg:sticky lg:top-28 lg:h-[55vh] xl:h-[65vh]">
            <div className="rounded-lg overflow-hidden w-full h-full relative">
              {selectedPost?.image && (
                <Image
                  src={selectedPost.image || ""}
                  alt={selectedPost.title || ""}
                  width={1000}
                  height={1000}
                />
              )}
              {selectedPost?.gradient && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${selectedPost.gradient}`}
                />
              )}
            </div>
          </div>

          <div className="lg:w-3/5 divide-y divide-border xl:pl-10">
            {latestPosts.map((post, index) => {
              const active = selectedPost?.slug === post.slug;
              return (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setSelectedPost(post)}
                  className="group"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "flex items-start justify-between py-6 xl:py-10",
                      "transition-colors group-hover:text-foreground",
                      active ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    <div className="flex flex-col pr-6 sm:pr-10">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal mb-2">
                        {post.title}
                      </h3>
                      <span
                        className={cn(
                          "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl transition-colors group-hover:text-muted-foreground",
                          active
                            ? "text-muted-foreground"
                            : "text-muted-foreground/50"
                        )}
                      >
                        {post.date}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 border-2 rounded-full flex flex-shrink-0 items-center justify-center",
                        active
                          ? "border-border"
                          : "border-border/40"
                      )}
                    >
                      {/* <ArrowUpRight
                        className={cn(
                          "w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 group-hover:rotate-45 transition-transform",
                          active
                            ? "text-foreground rotate-45"
                            : "text-foreground/60"
                        )}
                      /> */}
                      <ArrowUpRight className={cn(
                          "w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 group-hover:rotate-45 transition-transform",
                          active
                            ? "text-foreground rotate-45"
                            : "text-foreground/60"
                        )} />
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
