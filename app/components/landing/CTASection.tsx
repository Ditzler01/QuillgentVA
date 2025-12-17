"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#40929e] to-[#2a6068] p-8 text-center md:p-16 lg:p-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Scale Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
              Join 500+ businesses that have transformed their operations with
              Quillgent. Get started today with a free consultation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white px-8 text-[#40929e] hover:bg-white/90"
                onClick={() => console.log("Schedule consultation clicked")}
                data-testid="button-cta-schedule"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <button
                className="text-sm font-medium text-white/90 underline underline-offset-4 transition-colors hover:text-white"
                onClick={() => scrollToSection("#services")}
                data-testid="link-cta-services"
              >
                View Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
