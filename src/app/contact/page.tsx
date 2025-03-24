"use client";

import { CheckIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import SubpageHero from "@/components/sections/subpage-hero";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showServiceError, setShowServiceError] = useState(false);

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices((prev) =>
      checked ? [...prev, service] : prev.filter((s) => s !== service)
    );
    if (checked) setShowServiceError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate services selection
    if (selectedServices.length === 0) {
      setShowServiceError(true);
      return;
    }

    setIsLoading(true);
    setShowServiceError(false);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch("/api/contact-email", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          services: selectedServices,
          project: formData.get("project"),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setIsSubmitted(false);
    setSelectedServices([]);
    setShowServiceError(false);
  };

  return (
    <>
      <SubpageHero
        title={
          isSubmitted
            ? "Thank you for reaching out!"
            : "Let's Build Something Amazing"
        }
        description="We're excited to hear about your project. Whether you're looking to build a new website, integrate AI solutions, or transform your digital presence, we're here to help."
      />

      <section className="py-12 md:py-20 lg:py-32 xl:py-40">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between gap-10 lg:gap-20">
          <div className="flex flex-col md:flex-row xl:flex-col gap-12 md:gap-10 lg:gap-20 xl:gap-24 xl:max-w-md mb-12 md:mb-20 xl:mb-0">
            <div className="w-1/2 xl:w-full">
              <h2 className="text-2xl md:text-3xl font-normal uppercase text-muted-foreground mb-4">
                Visit Us
              </h2>
              <p className="text-3xl md:text-4xl">Thamel, Kathmandu, Nepal</p>
            </div>
            <div className="w-1/2 xl:w-full">
              <h2 className="text-2xl md:text-3xl font-normal uppercase text-muted-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-3xl md:text-4xl">
                <a href="mailto:hello@lunover.com" className="hover:underline">
                  hello@lunover.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex-1">
            {isSubmitted ? (
              <div className="flex flex-col gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl">
                    Message Received!
                  </h2>
                  <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
                    Thank you for reaching out. We'll review your message and
                    get back to you within 24 hours.
                  </p>
                  <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
                    We're excited to learn more about your project and discuss
                    how we can help bring your vision to life.
                  </p>
                </div>
                <button
                  onClick={handleResend}
                  className="bg-foreground text-background px-8 py-4 rounded-full hover:bg-foreground/80 transition-colors font-medium text-xl lg:text-2xl self-start"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => handleSubmit(e)}
              >
                {/* Introduction Section */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl flex-shrink-0">
                    Hi, I'm
                  </h2>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isLoading}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors md:text-2xl lg:text-3xl disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <p className="text-3xl lg:text-4xl xl:text-5xl flex-shrink-0">
                    and I work at
                  </p>
                  <input
                    type="text"
                    name="company"
                    required
                    disabled={isLoading}
                    placeholder="Your company name"
                    className="w-full bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors md:text-2xl lg:text-3xl disabled:opacity-50"
                  />
                </div>

                {/* Services Selection */}
                <div className="flex flex-col lg:flex-row gap-4">
                  <p className="text-3xl lg:text-4xl xl:text-5xl">
                    I'm interested in:
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Custom Web Development",
                        "AI Integration",
                        "UI/UX Design",
                        "Digital Marketing",
                        "E-commerce Solutions",
                        "Mobile App Development",
                        "Other Services",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2 border border-border rounded-full px-4 py-2 md:px-6 md:py-3 cursor-pointer
                            hover:border-foreground hover:text-foreground
                            transition-all text-xl lg:text-2xl
                            [&:has(input:checked)]:bg-foreground
                            [&:has(input:checked)]:text-background
                            [&:has(input:checked)]:border-foreground
                            group"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={selectedServices.includes(service)}
                            onChange={(e) =>
                              handleServiceChange(service, e.target.checked)
                            }
                            disabled={isLoading}
                            className="hidden"
                          />
                          <CheckIcon
                            className="w-5 h-5
                            opacity-0
                            group-hover:opacity-50
                            [input:checked~&]:opacity-100
                            transition-opacity"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                    {showServiceError && (
                      <p className="text-red-500 text-lg">
                        Please select at least one service
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <p className="text-3xl lg:text-4xl xl:text-5xl">
                  You can reach me at:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isLoading}
                    placeholder="Your email address"
                    className="w-full bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors md:text-2xl lg:text-3xl disabled:opacity-50"
                  />
                  <p className="text-3xl lg:text-4xl xl:text-5xl flex-shrink-0">
                    and I'd love to chat.
                  </p>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-4">
                  <p className="text-3xl leading-normal lg:text-4xl/normal xl:text-5xl/normal mb-4">
                    Here's what I'd like to build:
                  </p>
                  <textarea
                    name="project"
                    required
                    disabled={isLoading}
                    placeholder="Tell us about your project goals and requirements"
                    rows={4}
                    className="w-full bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors resize-none md:text-2xl lg:text-3xl disabled:opacity-50"
                  />
                </div>

                {/* Privacy Policy and Submit */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      required
                      disabled={isLoading}
                      className="w-4 h-4"
                    />
                    <span className="text-xl lg:text-2xl">
                      I agree to the{" "}
                      <a href="/privacy" className="underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-foreground text-background px-8 py-4 rounded-full hover:bg-foreground/80 transition-colors font-medium text-xl lg:text-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      "START A PROJECT"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
