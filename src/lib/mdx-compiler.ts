import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const MARKDOWN_PATH = path.join(process.cwd(), "src/markdown");

// Define your MDX components here or import them
const components = {
  // Your custom components here
};

// Define the blog post interface
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  gradient: string;
  category: string;
  author?: string;
  authorRole?: string;
  readTime: string;
  content?: React.ReactNode;
}

// Type for frontmatter from MDX files
export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  gradient: string;
  category: string;
  author?: string;
  authorRole?: string;
  readTime: string;
  [key: string]: any; // For any other frontmatter properties
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage?: string;
  gradient: string;
  order: number;
  lists?: string[];
  tags?: string[];
  benefits?: string[];
  content?: React.ReactNode;
}

// Type for frontmatter from MDX files
export interface ServiceFrontmatter {
  title: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage?: string;
  gradient: string;
  order: number;
  lists?: string[];
  tags?: string[];
  benefits?: string[];
  [key: string]: any;
}

export async function getBlogContent(slug: string): Promise<{
  content: React.ReactNode;
  frontmatter: BlogPost;
  headings: { id: string; text: string; level: number }[];
} | null> {
  const filePath = path.join(MARKDOWN_PATH, "blogs", `${slug}.mdx`);

  const source = await fs.readFile(filePath, "utf8");

  const rehypeSlug = (await import("rehype-slug")).default;

  // Using compileMDX from next-mdx-remote/rsc
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  // Extract headings from raw MDX
  const headings = extractHeadings(source);

  return {
    content,
    headings,
    frontmatter: {
      slug,
      ...frontmatter,
    } as BlogPost,
  };
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const BLOGS_PATH = path.join(MARKDOWN_PATH, "blogs");
  const files = await fs.readdir(BLOGS_PATH);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(BLOGS_PATH, file);
      const source = await fs.readFile(filePath, "utf8");

      // Use compileMDX but only extract frontmatter for listing
      const { frontmatter } = await compileMDX<BlogFrontmatter>({
        source,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      });

      return {
        slug: file.replace(".mdx", ""),
        ...frontmatter,
      } as BlogPost;
    })
  );

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

// Add this function to extract headings
const extractHeadings = (content: string) => {
  const headings = [];
  const headingRegex = /^(#{2,4})\s+(.+)$/gm; // Match h2, h3, h4
  let match;

  // Keep track of heading text occurrences
  const headingCounts = new Map<string, number>();

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // Number of # symbols
    const text = match[2].trim();

    // Create base id
    let baseId = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove all chars except word chars, spaces, hyphens
      .replace(/\s+/g, (match) => match.length > 1 ? '--' : '-'); // Replace multiple spaces with -- and single space with -

    // Get current count for this heading text
    const count = (headingCounts.get(baseId) || 0) + 1;
    headingCounts.set(baseId, count);

    // Add number suffix for duplicates
    const id = count === 1 ? baseId : `${baseId}-${count}`;

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
};

// Modify getServiceContent to include rehype-slug for heading IDs
export async function getServiceContent(slug: string): Promise<{
  content: React.ReactNode;
  frontmatter: Service;
  headings: { id: string; text: string; level: number }[];
} | null> {
  const filePath = path.join(MARKDOWN_PATH, "services", `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const rehypeSlug = (await import("rehype-slug")).default;

    // Use a simplified MDX compilation configuration
    const { content, frontmatter } = await compileMDX<ServiceFrontmatter>({
      source,
      components,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkDebug],
          rehypePlugins: [rehypeSlug], // Add rehype-slug for heading IDs
        },
      },
    });

    // Extract headings from raw MDX
    const headings = extractHeadings(source);

    return {
      content,
      frontmatter: {
        slug,
        ...frontmatter,
      } as Service,
      headings,
    };
  } catch (error) {
    console.error(`Error compiling MDX for ${slug}:`, error);
    return null;
  }
}

export async function getAllServices(): Promise<Service[]> {
  const SERVICES_PATH = path.join(MARKDOWN_PATH, "services");

  try {
    const files = await fs.readdir(SERVICES_PATH);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    if (mdxFiles.length === 0) {
      console.warn("No MDX files found in services directory");
      return [];
    }

    const services = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(SERVICES_PATH, file);
        const source = await fs.readFile(filePath, "utf8");
        const slug = file.replace(".mdx", "");

        try {
          const { frontmatter } = await compileMDX<ServiceFrontmatter>({
            source,
            options: {
              parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                // Temporarily disable rehype plugins
                rehypePlugins: [],
              },
            },
          });

          return {
            slug,
            ...frontmatter,
          } as Service;
        } catch (error) {
          console.error(`Error processing service ${file}:`, error);
          return null;
        }
      })
    );

    // Filter out any null values from failed processing
    const validServices = services.filter(
      (service) => service !== null
    ) as Service[];

    // Sort services by order property
    return validServices.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error getting all services:", error);
    return [];
  }
}

export async function getAIServices(): Promise<Service[]> {
  const allServices = await getAllServices();
  return allServices.filter(
    (service) => service.tags && service.tags.includes("ai")
  );
}

// Custom remark plugin for debugging
function remarkDebug() {
  return (tree: any) => {
    // console.log("Processing MDX with remark");
  };
}
