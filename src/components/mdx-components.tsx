import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ImageProps } from "next/image";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: function H1({ className = "", children, ...props }) {
      return (
        <h1
          className={`scroll-m-20 text-xl tracking-tight mb-6 ${className}`}
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: function H2({ className = "", children, ...props }) {
      return (
        <h2 className={`tracking-tight text-lg mb-4 ${className}`} {...props}>
          {children}
        </h2>
      );
    },
    h3: function H3({ className = "", children, ...props }) {
      return (
        <h3 className={`tracking-tight text-sm mb-2 ${className}`} {...props}>
          {children}
        </h3>
      );
    },
    h4: function H4({ className = "", children, ...props }) {
      return (
        <h4 className={`tracking-tight ${className}`} {...props}>
          {children}
        </h4>
      );
    },
    p: function P({ className = "", children, ...props }) {
      return (
        <p
          className={`leading-7 text-secondary text-sm [&:not(:first-child)]:mt-6 mb-6 ${className}`}
          {...props}
        >
          {children}
        </p>
      );
    },
    ul: function UL({ className = "", children, ...props }) {
      return (
        <ul
          className={`my-6 ml-6 mb-6 list-disc text-sm text-secondary [&>li]:mt-2 ${className}`}
          {...props}
        >
          {children}
        </ul>
      );
    },
    ol: function OL({ className = "", children, ...props }) {
      return (
        <ol
          className={`my-6 ml-6 mb-6 list-decimal text-sm text-secondary [&>li]:mt-2 ${className}`}
          {...props}
        >
          {children}
        </ol>
      );
    },
    li: function LI({ className = "", children, ...props }) {
      return (
        <li
          className={`leading-7 text-sm text-secondary flex items-start gap-2 ${className}`}
          {...props}
        >
          <span>◇</span>
          <span>{children}</span>
        </li>
      );
    },
    hr: function HR({ className = "", ...props }) {
      return <hr className={`py-6 ${className}`} {...props} />;
    },
    blockquote: function Blockquote({ className = "", children, ...props }) {
      return (
        <blockquote
          className={`mt-6 border-l-2 border-gray-300 pl-6 italic text-gray-800 dark:text-gray-200 ${className}`}
          {...props}
        >
          {children}
        </blockquote>
      );
    },
    a: function A({ className = "", children, ...props }) {
      return (
        <Link
          className={`text-primary underline underline-offset-4 hover:text-primary/80 ${className}`}
          {...props}
        >
          {children}
        </Link>
      );
    },
    img: function Img(props) {
      return (
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
        />
      );
    },
    pre: function Pre({ className = "", children, title, ...props }) {
      const lang = className?.replace("language-", "") || "typescript";

      return (
        <div className="pt-2 pb-8">
          <div className="relative group overflow-hidden border border-border bg-[#0C0C0C] bg-noise">
            <div className="flex items-center justify-between px-4 py-2 bg-[#1C1C1C] border-b border-border">
              <div className="flex items-center gap-2">
                <div className="text-xs">
                  <span className="text-muted-foreground">
                    {title ? title : lang}
                  </span>
                </div>
              </div>
            </div>
            <pre
              className={`mb-4 mt-2 overflow-x-auto relative ${className}`}
              {...props}
            >
              {children}
            </pre>
          </div>
        </div>
      );
    },
    code: async function Code({ className = "", children, title, ...props }) {
      const code = children?.toString() || "";
      const lang = className?.replace("language-", "") || "typescript";

      return (
        <code
          className={`rounded border-b-2 border-gray-200 border-dashed px-[0.3rem] py-[0.2rem] font-mono text-xs ${className}`}
          {...props}
        >
          {children}
        </code>
      );
    },
    table: function Table({ className = "", children, ...props }) {
      return (
        <div className="my-6 w-full overflow-y-auto">
          <table
            className={`w-full border-collapse text-sm border-border ${className}`}
            {...props}
          >
            {children}
          </table>
        </div>
      );
    },
    thead: function THead({ className = "", children, ...props }) {
      return (
        <thead className={`border-b-2 border-border ${className}`} {...props}>
          {children}
        </thead>
      );
    },
    tbody: function TBody({ className = "", children, ...props }) {
      return (
        <tbody className={`divide-y divide-border ${className}`} {...props}>
          {children}
        </tbody>
      );
    },
    tr: function TR({ className = "", children, ...props }) {
      return (
        <tr
          className={`transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
          {...props}
        >
          {children}
        </tr>
      );
    },
    th: function TH({ className = "", children, ...props }) {
      return (
        <th
          className={`h-10 px-4 py-2 text-left align-middle font-medium text-foreground bg-muted/50 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className}`}
          {...props}
        >
          {children}
        </th>
      );
    },
    td: function TD({ className = "", children, ...props }) {
      return (
        <td
          className={`px-4 py-2 align-middle text-secondary [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className}`}
          {...props}
        >
          {children}
        </td>
      );
    },
    ...components,
  };
}

export default useMDXComponents;
