"use client";

import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from './mdx-components';
import { useMemo } from 'react';

interface MDXContentProps {
  // Instead of passing MDXRemoteSerializeResult directly, pass the serialized string
  source: any;
}

export default function MDXContent({ source }: MDXContentProps) {
  // Parse the serialized content in the client component
  const mdxSource = useMemo(() => {
    if (typeof source === 'string') {
      return JSON.parse(source);
    }
    return source;
  }, [source]);

  return <MDXRemote {...mdxSource} components={MDXComponents} />;
}
