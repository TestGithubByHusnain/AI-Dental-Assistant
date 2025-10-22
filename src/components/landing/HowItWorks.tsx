"use client";

import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
} as const;

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
} as const;

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
      <motion.div 
        className="mb-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10 px-4 py-2 backdrop-blur-sm"
        >
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Simple Process</span>
        </motion.div>

        <motion.h2
          id="how-it-works-heading"
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent inline-block"
          >
            Three steps to
          </motion.span>
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block"
          >
            better dental health
          </motion.span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground"
        >
          Our streamlined process makes dental care accessible, convenient, and stress-free for
          everyone.
        </motion.p>
      </motion.div>

      {/* === STEPS === */}
      <motion.div 
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Connection Line (Visible on Large Screens) */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 transform bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" 
        />

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step) => (
            <motion.div
              key={step.id}
              className="group relative transition-all duration-500"
              variants={itemVariants}
              aria-label={`Step ${step.id}: ${step.title}`}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}>
                {/* Step Number */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 * step.id, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-lg"
                >
                  {step.id}
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ rotate: 5 }}
                >
                  <Image
                    src={step.icon}
                    alt={step.alt}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </motion.div>

                {/* Step Title */}
                <h3 className="mb-4 text-center text-2xl font-bold">{step.title}</h3>

                {/* Step Description */}
                <p className="mb-6 text-center leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {step.features.map((feature) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 * step.id }}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* === CTA BUTTON === */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <SignUpButton mode="modal">
          <Button 
            size="lg" 
            className="group"
          >
            <ArrowRightIcon className="mr-2 size-5 transition-transform group-hover:translate-x-1" />
            Get Started Now
          </Button>
        </SignUpButton>
      </motion.div>
    </section>
  );
}
