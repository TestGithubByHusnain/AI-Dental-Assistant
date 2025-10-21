"use client";

import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";

const USERS = [
  {
    name: "Jessica Davis",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sam Miller",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Anna Lopez",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Mike Rodriguez",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Katie Lee",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* ==== GRID BACKGROUND ==== */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      {/* ==== GRADIENT ORBS ==== */}
      <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 blur-3xl" />

      {/* ==== CONTENT WRAPPER ==== */}
      <div className="relative z-10 w-full px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* ==== LEFT CONTENT ==== */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">
                  AI-Powered Dental Assistant
                </span>
              </div>

              {/* Main Heading */}
              <h1
                id="hero-heading"
                className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              >
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  questions
                </span>
                <br />
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  answered instantly
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
                Chat with our AI dental assistant for instant advice, book smart appointments,
                and get personalized care recommendations — available 24/7.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <SignUpButton mode="modal">
                  <Button size="lg">
                    <MicIcon className="mr-2 size-5" />
                    Try Voice Agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="outline">
                    <CalendarIcon className="mr-2 size-5" />
                    Book Appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* Testimonials */}
              <div className="pt-8">
                <div className="flex items-center gap-6">
                  {/* User Avatars */}
                  <div className="flex -space-x-3">
                    {USERS.map((user) => (
                      <Image
                        key={user.name}
                        src={user.img}
                        alt={user.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                      />
                    ))}
                  </div>

                  {/* Rating */}
                  <div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="text-sm font-bold text-foreground">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Trusted by{" "}
                      <span className="font-semibold text-foreground">
                        1,200+ patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==== RIGHT CONTENT (Image) ==== */}
            <div className="relative lg:pl-8">
              <div className="absolute -top-4 -left-4 h-24 w-24 rotate-45 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 blur-xl" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 blur-2xl" />

              <Image
                src="/hero.png"
                alt="DentWise AI assistant illustration"
                width={600}
                height={600}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
