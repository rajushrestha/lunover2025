import Link from "next/link";
import ArrowUpRight from "../icons/arrow-up-right";
import { cn } from "@/lib/utils";

export default function ArrowButtonLink({
  href,
  children,
  variant = "default",
  hideArrow = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "inverse" | "secondary";
  hideArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 px-8 py-3 text-lg font-medium rounded-full border-2 border-border hover:bg-foreground hover:text-background transition-colors duration-300 group",
        variant === "inverse" &&
          "bg-foreground text-background hover:bg-background hover:text-foreground",
        variant === "secondary" &&
          "bg-background/30 hover:bg-background/50 hover:text-foreground"
      )}
    >
      <span>{children}</span>
      {!hideArrow && (
        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      )}
    </Link>
  );
}
