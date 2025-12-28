"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  FileText,
  Headphones,
  PenTool,
  Database,
  Share2,
  Briefcase,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Administrative Support",
    description:
      "Email management, scheduling, document preparation, and day-to-day operational tasks handled with precision by experienced virtual assistants.",
    details: {
      overview: "Our administrative support services help streamline your daily operations, allowing you to focus on growing your business.",
      features: [
        "Email and calendar management",
        "Document preparation and formatting",
        "Data entry and organization",
        "Travel arrangements and booking",
        "Meeting coordination and minutes",
        "File management and organization",
      ],
    },
  },
  {
    icon: Headphones,
    title: "Customer Service & Tech Support",
    description:
      "Over 2 years of experience handling customer inquiries, technical support for Telco accounts, sales, and collections with professional excellence.",
    details: {
      overview: "With over 2 years of Telco industry experience, we provide exceptional customer service and technical support that keeps your customers satisfied.",
      features: [
        "Inbound and outbound call handling",
        "Technical troubleshooting and support",
        "Sales and upselling expertise",
        "Collections and account management",
        "Live chat and email support",
        "Customer retention strategies",
      ],
    },
  },
  {
    icon: PenTool,
    title: "Graphic Design & Video Editing",
    description:
      "Creative content production including graphic design, video editing, and marketing materials that elevate your brand presence.",
    details: {
      overview: "Transform your brand with professional creative services that capture attention and drive engagement across all platforms.",
      features: [
        "Logo and brand identity design",
        "Social media graphics and templates",
        "Video editing and production",
        "Marketing materials and flyers",
        "Presentation design",
        "Thumbnail and banner creation",
      ],
    },
  },
  {
    icon: Database,
    title: "Web Development",
    description:
      "Full-stack web development with Next.js, React, TypeScript, WordPress, and SEO expertise to build high-performing, responsive websites and applications.",
    details: {
      overview: "We build modern, high-performing websites and applications using the latest technologies to help your business thrive online.",
      features: [
        "Next.js and React development",
        "TypeScript for robust applications",
        "WordPress design and development",
        "SEO optimization and best practices",
        "Responsive and mobile-first design",
        "API integration and backend development",
      ],
    },
  },
  {
    icon: Share2,
    title: "Digital Marketing & SEO",
    description:
      "Strategic marketing campaigns, SEO optimization, social media management, and community engagement to boost your online visibility and rankings.",
    details: {
      overview: "Grow your online presence with data-driven marketing strategies that increase visibility, engagement, and conversions.",
      features: [
        "Search engine optimization (SEO)",
        "Social media marketing and management",
        "Content creation and strategy",
        "Paid advertising campaigns",
        "Analytics and performance tracking",
        "Community building and engagement",
      ],
    },
  },
  {
    icon: Briefcase,
    title: "Real Estate & Sales Support",
    description:
      "Specialized support for real estate operations, sales processes, lead management, and client relationship building.",
    details: {
      overview: "Specialized virtual assistance for real estate professionals, helping you close more deals and manage client relationships effectively.",
      features: [
        "Lead generation and qualification",
        "CRM management and updates",
        "Property listing management",
        "Client follow-up and communication",
        "Transaction coordination",
        "Market research and analysis",
      ],
    },
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              <Card 
                className="group h-full cursor-pointer p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:p-8"
                onClick={() => setSelectedService(service)}
                data-testid={`card-service-${index}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#40929e]/10">
                  <service.icon className="h-6 w-6 text-[#40929e]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-justify text-muted-foreground">{service.description}</p>
                <button 
                  className="inline-flex items-center text-sm font-medium text-[#40929e] opacity-0 transition-opacity group-hover:opacity-100"
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-lg">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#40929e]/10">
                  <selectedService.icon className="h-6 w-6 text-[#40929e]" />
                </div>
                <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedService.details.overview}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-foreground">What&apos;s Included:</h4>
                <ul className="space-y-2">
                  {selectedService.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#40929e]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button 
                  className="w-full bg-[#40929e] hover:bg-[#357d87]"
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
