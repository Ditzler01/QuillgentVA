"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #40929e 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #40929e 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-5 md:gap-12 md:px-8 md:py-24 lg:gap-20 lg:px-12 lg:py-32 xl:px-16">
        <motion.div
          className="flex flex-col justify-center md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Premium Virtual Assistant Services
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Focus on Growth,{" "}
            <span className="text-[#40929e]">We Handle the Rest</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Quillgent connects you with elite virtual assistants who become
            seamless extensions of your team. Scale your business without the
            overhead.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-[#40929e] px-8 text-white hover:bg-[#357d88]"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-hero-cta"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => console.log("Watch demo clicked")}
              data-testid="button-hero-demo"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative md:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Professional virtual assistant at work"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg md:-bottom-6 md:-left-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#40929e]/10">
                <span className="text-lg font-bold text-[#40929e]">99%</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Client Satisfaction</p>
                <p className="text-xs text-muted-foreground">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
