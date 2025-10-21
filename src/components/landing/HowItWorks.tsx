"use client";

import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ArrowRightIcon, ZapIcon } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Ask Questions",
    description:
      "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.",
    icon: "/audio.png",
    alt: "Voice Chat",
    features: ["24/7 Available", "Instant Response"],
  },
  {
    id: 2,
    title: "Get Expert Advice",
    description:
      "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.",
    icon: "/brain.png",
    alt: "AI Brain",
    features: ["AI-Powered", "Personalized"],
  },
  {
    id: 3,
    title: "Book & Get Care",
    description:
      "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.",
    icon: "/calendar.png",
    alt: "Calendar",
    features: ["Verified Doctors", "Follow-up Care"],
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative z-10 mx-auto max-w-7xl px-6 py-32"
      aria-labelledby="how-it-works-heading"
    >
      {/* === HEADER === */}
      <div className="mb-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10 px-4 py-2 backdrop-blur-sm">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Simple Process</span>
        </div>

        <h2
          id="how-it-works-heading"
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Our streamlined process makes dental care accessible, convenient, and stress-free for
          everyone.
        </p>
      </div>

      {/* === STEPS === */}
      <div className="relative">
        {/* Connection Line (Visible on Large Screens) */}
        <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 transform bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="group relative transition-all duration-500"
              aria-label={`Step ${step.id}: ${step.title}`}
            >
              <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={step.icon}
                    alt={step.alt}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </div>

                {/* Step Title */}
                <h3 className="mb-4 text-center text-2xl font-bold">{step.title}</h3>

                {/* Step Description */}
                <p className="mb-6 text-center leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {step.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === CTA BUTTON === */}
      <div className="mt-16 text-center">
        <SignUpButton mode="modal">
          <Button size="lg" className="group">
            <ArrowRightIcon className="mr-2 size-5 transition-transform group-hover:translate-x-1" />
            Get Started Now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}
