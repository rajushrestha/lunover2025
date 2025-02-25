import fs from 'fs';
import path from 'path';
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const BLOGS_PATH = path.join(process.cwd(), 'src/markdown/blogs');

// Define your MDX components here or import them
const components = {
  // Your custom components here
};

export async function getMdxContent(slug: string) {
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');

  // Using compileMDX from next-mdx-remote/rsc
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrettyCode],
      },
    },
  });

  return {
    content,
    frontmatter: {
      slug,
      ...frontmatter,
    }
  };
}

export async function getAllPosts() {
  const files = fs.readdirSync(BLOGS_PATH).filter(file => file.endsWith('.mdx'));

  const posts = await Promise.all(files.map(async (file) => {
    const filePath = path.join(BLOGS_PATH, file);
    const source = fs.readFileSync(filePath, 'utf8');

    // Use compileMDX but only extract frontmatter for listing
    const { frontmatter } = await compileMDX({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      slug: file.replace('.mdx', ''),
      ...frontmatter,
    };
  }));

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}
