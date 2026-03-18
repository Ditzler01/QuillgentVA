"use client";

import { motion } from "framer-motion";

export default function MissionVision()
{
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-8 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Our Foundation
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Guided by purpose, driven by growth
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#40929e]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#40929e]/10">
                <svg
                  className="h-6 w-6 text-[#40929e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                Our Mission
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To help businesses grow by providing reliable digital support through a team of skilled professionals who combine technical expertise, creativity, and operational excellence.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#40929e]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#40929e]/10">
                <svg
                  className="h-6 w-6 text-[#40929e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                Our Vision
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To become a trusted global partner for businesses seeking a dependable digital support team that helps them build stronger online systems and achieve sustainable growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
