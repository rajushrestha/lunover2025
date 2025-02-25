"use client";

import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';
import { runSync } from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  Image,
  Link,
  h1: (props: any) => <h1 className="text-4xl font-normal mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-normal mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-normal mb-3 mt-6" {...props} />,
  p: (props: any) => <p className="mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
  // Add other custom components as needed
};

export default function MDXRenderer({ code }: { code: string }) {
  const Content = useMemo(() => {
    const { default: MDXContent } = runSync(code, { ...runtime });
    return MDXContent;
  }, [code]);

  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
}
