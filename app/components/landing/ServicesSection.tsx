"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Headphones,
  PenTool,
  Database,
  Share2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Administrative Support",
    description:
      "Email management, scheduling, document preparation, and day-to-day operational tasks handled with precision by experienced virtual assistants.",
  },
  {
    icon: Headphones,
    title: "Customer Service & Tech Support",
    description:
      "Over 2 years of experience handling customer inquiries, technical support for Telco accounts, sales, and collections with professional excellence.",
  },
  {
    icon: PenTool,
    title: "Graphic Design & Video Editing",
    description:
      "Creative content production including graphic design, video editing, and marketing materials that elevate your brand presence.",
  },
  {
    icon: Database,
    title: "Web Development",
    description:
      "Full-stack web development expertise with Next.js, React, TypeScript, and modern frameworks to build dynamic, responsive applications.",
  },
  {
    icon: Share2,
    title: "Digital Marketing & Ads",
    description:
      "Strategic marketing campaigns, social media management, ads optimization, and community engagement to grow your online presence.",
  },
  {
    icon: Briefcase,
    title: "Real Estate & Sales Support",
    description:
      "Specialized support for real estate operations, sales processes, lead management, and client relationship building.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Our Services
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Comprehensive VA Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From administrative tasks to strategic support, our virtual
            assistants are trained to handle it all.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full cursor-pointer p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#40929e]/10">
                  <service.icon className="h-6 w-6 text-[#40929e]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-justify text-muted-foreground">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#40929e] opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
