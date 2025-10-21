"use client";

import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ChatBubbleProps {
  question: string;
  answer: string;
  tags: string[];
}

const ChatBubble = ({ question, answer, tags }: ChatBubbleProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
        <MessageSquareIcon className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
          <p className="font-semibold text-primary">"{question}"</p>
        </div>
        <div className="bg-muted/30 rounded-2xl p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function WhatToAsk() {
  const chatExamples = [
    {
      question: "My tooth hurts when I bite down",
      answer:
        "Get immediate advice on pain management, possible causes, and when to see a dentist urgently.",
      tags: ["Instant Response", "Pain Relief"],
    },
    {
      question: "How much does teeth whitening cost?",
      answer:
        "Compare treatment options, pricing ranges, and find the best whitening solution for your budget.",
      tags: ["Cost Analysis", "Treatment Options"],
    },
    {
      question: "When should I replace my filling?",
      answer:
        "Learn about filling lifespan, warning signs of wear, and replacement timing guidance.",
      tags: ["Preventive Care", "Maintenance"],
    },
  ];

  return (
    <section
      aria-labelledby="ai-conversation-title"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <MessageCircleIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Conversations</span>
          </div>

          <h2
            id="ai-conversation-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers expert-level guidance trained
            on thousands of real dental cases.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Common questions our AI answers:</h3>
            <div className="space-y-6">
              {chatExamples.map((chat, idx) => (
                <ChatBubble key={idx} {...chat} />
              ))}
            </div>
          </div>

          {/* Right Side - AI Illustration */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center justify-center h-full">
              <Image
                src="/confused.png"
                alt="AI assistant helping with dental questions"
                width={500}
                height={500}
                className="w-full h-auto max-w-lg object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
