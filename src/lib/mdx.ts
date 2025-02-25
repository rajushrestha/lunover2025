import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const BLOGS_PATH = path.join(process.cwd(), 'src/markdown/blogs');

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
  content?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(BLOGS_PATH).filter(file => file.endsWith('.mdx'));

  const posts = files.map(file => {
    const filePath = path.join(BLOGS_PATH, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: file.replace('.mdx', ''),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      gradient: data.gradient,
      category: data.category,
      author: data.author,
      authorRole: data.authorRole,
      readTime: data.readTime,
    } as BlogPost;
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Serialize MDX content
  const mdxSource = await serialize(content);

  // Stringify the MDX source to avoid SSR issues with hooks
  const serializedMdxSource = JSON.stringify(mdxSource);

  return {
    frontmatter: {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      gradient: data.gradient,
      category: data.category,
      author: data.author,
      authorRole: data.authorRole,
      readTime: data.readTime,
    },
    mdxSource: serializedMdxSource // Pass serialized string instead of MDX object
  };
}
