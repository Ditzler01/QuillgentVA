"use client";

import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Share your needs and challenges. Whether it's customer service, web development, or marketing, we understand your requirements.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Match & Onboard",
    description:
      "We assign the right specialist from our team with expertise in your specific needs, from tech support to creative design.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver Excellence",
    description:
      "Our team integrates seamlessly into your workflow, leveraging years of experience to deliver results from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Our Process
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Getting started with Quillgent is simple and straightforward.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-16 hidden h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#40929e]/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#40929e] bg-background">
                  <step.icon className="h-7 w-7 text-[#40929e]" />
                </div>
                <span className="mb-2 block text-sm font-bold text-[#40929e]">
                  Step {step.number}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
