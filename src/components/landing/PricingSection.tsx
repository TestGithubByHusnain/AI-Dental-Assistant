"use client";

import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

interface PlanType {
  title: string;
  price: string;
  duration: string;
  description: string;
  button: {
    text: string;
    variant: ButtonVariant;
    signup: boolean;
  };
  features: string[];
  highlight: boolean;
  badge?: string;
}

const plans: PlanType[] = [
  {
    title: "Free",
    price: "$0",
    duration: "/month",
    description: "Essential dental appointment booking",
    button: {
      text: "Get Started Free",
      variant: "secondary",
      signup: true,
    },
    features: [
      "Unlimited appointment booking",
      "Find dentists in your area",
      "Basic text chat support",
      "Appointment reminders",
    ],
    highlight: false,
  },
  {
    title: "AI Basic",
    price: "$9",
    duration: "/month",
    description: "AI consultations + appointment booking",
    button: {
      text: "Start AI Basic",
      variant: "default",
      signup: false,
    },
    features: [
      "Everything in Free",
      "10 AI voice calls per month",
      "AI dental guidance & advice",
      "Symptom assessment",
      "Priority support",
      "Call history & recordings",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "AI Pro",
    price: "$19",
    duration: "/month",
    description: "Unlimited AI consultations",
    button: {
      text: "Upgrade to AI Pro",
      variant: "outline",
      signup: false,
    },
    features: [
      "Everything in AI Basic",
      "Unlimited AI voice calls",
      "Advanced AI dental analysis",
      "Personalized care plans",
      "24/7 priority AI support",
      "Detailed health reports",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section
      aria-label="Pricing Plans"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background via-muted/3 to-background"
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />
      </div>

      {/* Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AI dental plan
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book appointments for free and upgrade for unlimited AI consultations. Perfect for ongoing dental care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative group ${
                plan.highlight ? "scale-105 z-10" : ""
              } transition-transform duration-300`}
            >
              {/* Badge for featured plan */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 shadow-xl hover:shadow-2xl
                ${
                  plan.highlight
                    ? "bg-gradient-to-br from-card/95 to-card/70 border-2 border-primary/30 hover:border-primary/50 shadow-primary/20"
                    : "bg-gradient-to-br from-card/90 to-card/60 border-border/50 hover:border-primary/30 shadow-primary/10"
                }`}
              >
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <div className="flex items-end gap-1">
                      <span
                        className={`text-4xl font-bold ${
                          plan.highlight
                            ? "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                            : ""
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground mb-1">{plan.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Button */}
                  {plan.button.signup ? (
                    <SignUpButton mode="modal">
                      <Button className="w-full py-3 bg-gradient-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                        {plan.button.text}
                      </Button>
                    </SignUpButton>
                  ) : (
                    <Button
                      variant={plan.button.variant}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                        ${
                          plan.button.variant === "default"
                            ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground shadow-lg hover:shadow-xl"
                            : "border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                        }`}
                    >
                      {plan.button.text}
                    </Button>
                  )}

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
