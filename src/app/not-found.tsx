import Link from 'next/link';
import ArrowUpRight from '@/components/icons/arrow-up-right';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight">
        Oops! Digital Dead End
      </h1>

      <h2 className="text-2xl md:text-3xl font-normal mb-8 text-muted-foreground">
        We've searched our entire digital universe, but this page is nowhere to be found.
      </h2>

      <div className="w-full max-w-xl h-[2px] bg-gradient-to-r from-transparent via-border to-transparent my-8 md:my-12"></div>

      <p className="text-xl md:text-2xl max-w-2xl mb-12">
        Let's get you back to somewhere more interesting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-colors hover:bg-primary/90"
        >
          Return Home
        </Link>

        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md text-lg font-medium transition-colors hover:bg-secondary/80 group"
        >
          Explore Blog
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </div>
  );
}
