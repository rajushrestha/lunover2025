"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TocSection {
  heading: TocItem;
  subheadings: TocItem[];
}

interface TocSidebarProps {
  headings: TocItem[];
}

export default function TocSidebar({ headings }: TocSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showMobileToc, setShowMobileToc] = useState(false);

  // Group headings into sections (h2 as main sections, h3 and h4 as subsections)
  const sections: TocSection[] = headings.reduce((acc: TocSection[], heading: TocItem) => {
    if (heading.level === 2) {
      // Create a new section with the h2 heading
      acc.push({
        heading,
        subheadings: [],
      });
    } else if (heading.level > 2 && acc.length > 0) {
      // Add this subheading to the last section
      acc[acc.length - 1].subheadings.push(heading);
    }
    return acc;
  }, []);

  // Determine if a section is active (either directly or via its children)
  const isSectionActive = (section: TocSection) => {
    return (
      activeId === section.heading.id ||
      section.subheadings.some(subheading => activeId === subheading.id)
    );
  };

  // Set up intersection observer to track visible headings
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);

            // Find which section this heading belongs to
            const section = sections.find(
              (section) =>
                section.heading.id === entry.target.id ||
                section.subheadings.some(subheading => subheading.id === entry.target.id)
            );

            if (section && !openSections.includes(section.heading.id)) {
              setOpenSections(prev => [...prev, section.heading.id]);
            }
          }
        });
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    // Observe all section headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings, openSections, sections]);

  // New observer for #content element to control TOC visibility
  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        // Check if content element is visible
        const isContentVisible = entries[0]?.isIntersecting || false;
        setShowMobileToc(isContentVisible);
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Show TOC when at least 10% of content is visible
      }
    );

    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentObserver.observe(contentElement);
    }

    return () => {
      if (contentElement) {
        contentObserver.unobserve(contentElement);
      }
    };
  }, []);

  // Toggle a section open/closed
  const toggleSection = (id: string) => {
    setOpenSections(prev =>
      prev.includes(id)
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop TOC - unchanged */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6">
          <h4 className="font-medium text-lg mb-6 text-foreground uppercase">On this page</h4>
          <nav className="toc-nav">
            <div className="space-y-1">
              {sections.map((section) => (
                <div key={section.heading.id} className="mb-2">
                  <button
                    onClick={() => toggleSection(section.heading.id)}
                    className={cn(
                      "flex items-center justify-between w-full text-left py-2 rounded-lg transition-colors text-base",
                      isSectionActive(section)
                        ? "text-primary font-medium"
                        : "text-foreground"
                    )}
                  >
                    <Link
                      href={`#${section.heading.id}`}
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation(); // Don't toggle when clicking link
                        document.getElementById(section.heading.id)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {section.heading.text}
                    </Link>
                    {section.subheadings.length > 0 && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform ml-2",
                          openSections.includes(section.heading.id) ? "transform rotate-180" : ""
                        )}
                      />
                    )}
                  </button>

                  {section.subheadings.length > 0 && openSections.includes(section.heading.id) && (
                    <div className="mt-1 ml-4 pl-2 border-l border-border/50 space-y-1">
                      {section.subheadings.map((subheading) => (
                        <Link
                          key={subheading.id}
                          href={`#${subheading.id}`}
                          className={cn(
                            "block px-4 py-1.5 text-sm rounded-lg transition-colors",
                            activeId === subheading.id
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(subheading.id)?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                        >
                          {subheading.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile TOC - visible only when content is on screen */}
      {showMobileToc && (
        <div className="lg:hidden fixed left-0 right-0 bottom-0 z-50 -mx-4 px-4">
          <div className="bg-background border-t border-border shadow-lg">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full py-3 px-4 flex items-center justify-between text-foreground"
            >
              <span className="font-medium flex items-center gap-2">
                <Menu className="h-4 w-4" /> On this page
              </span>
              {mobileTocOpen ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronUp className="h-5 w-5" />
              )}
            </button>

            {mobileTocOpen && (
              <div className="max-h-[60vh] overflow-y-auto p-4 border-t border-border/50">
                <nav className="toc-nav">
                  <div className="space-y-1">
                    {sections.map((section) => (
                      <div key={section.heading.id} className="mb-2">
                        <button
                          onClick={() => toggleSection(section.heading.id)}
                          className={cn(
                            "flex items-center justify-between w-full text-left py-2 rounded-lg transition-colors text-base",
                            isSectionActive(section)
                              ? "text-primary font-medium"
                              : "text-foreground"
                          )}
                        >
                          <Link
                            href={`#${section.heading.id}`}
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              document.getElementById(section.heading.id)?.scrollIntoView({
                                behavior: "smooth",
                              });
                              setMobileTocOpen(false); // Close mobile TOC after selection
                            }}
                          >
                            {section.heading.text}
                          </Link>
                          {section.subheadings.length > 0 && (
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform ml-2",
                                openSections.includes(section.heading.id) ? "transform rotate-180" : ""
                              )}
                            />
                          )}
                        </button>

                        {section.subheadings.length > 0 && openSections.includes(section.heading.id) && (
                          <div className="mt-1 ml-4 pl-2 border-l border-border/50 space-y-1">
                            {section.subheadings.map((subheading) => (
                              <Link
                                key={subheading.id}
                                href={`#${subheading.id}`}
                                className={cn(
                                  "block px-4 py-1.5 text-sm rounded-lg transition-colors",
                                  activeId === subheading.id
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                                )}
                                onClick={(e) => {
                                  e.preventDefault();
                                  document.getElementById(subheading.id)?.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                  setMobileTocOpen(false); // Close mobile TOC after selection
                                }}
                              >
                                {subheading.text}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
