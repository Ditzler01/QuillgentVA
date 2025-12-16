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
      "Email management, scheduling, document preparation, and day-to-day operational tasks handled with precision.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description:
      "Professional handling of customer inquiries, support tickets, and maintaining excellent client relationships.",
  },
  {
    icon: PenTool,
    title: "Content Management",
    description:
      "Blog posts, website updates, content scheduling, and maintaining your digital presence seamlessly.",
  },
  {
    icon: Database,
    title: "Data Entry & Research",
    description:
      "Accurate data entry, market research, competitor analysis, and comprehensive reporting.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation, scheduling, community engagement, and analytics tracking.",
  },
  {
    icon: Briefcase,
    title: "Executive Assistance",
    description:
      "High-level support for executives including travel coordination, meeting prep, and strategic planning.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <p className="mb-4 text-muted-foreground">{service.description}</p>
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
