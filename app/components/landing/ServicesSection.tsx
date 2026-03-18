"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import
{
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import
{
  Headphones,
  Share2,
  Briefcase,
  ArrowRight,
  Check,
  Globe,
  ClipboardList,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We build fast, functional, and scalable websites.",
    details: {
      overview: "Our websites combine speed, functionality, and scalability to give your business a strong online presence.",
      features: [
        "Custom website development",
        "CMS websites you can easily manage",
        "High-functionality web platforms",
        "SEO-ready business websites",
        "Conversion-focused landing pages"
      ],
    },
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We help businesses stay active and visible online.",
    details: {
      overview: "We manage your social platforms to keep your brand active, engaging, and consistently visible to your audience.",
      features: [
        "Content planning",
        "Post scheduling",
        "Audience engagement",
        "Brand growth"
      ],
    },
  },
  {
    icon: ClipboardList,
    title: "Administrative Support",
    description:
      "Let us handle the tasks that keep your operations organized.",
    details: {
      overview: "We streamline your daily operations by managing essential administrative tasks with accuracy and efficiency.",
      features: [
        "Email management",
        "Scheduling",
        "Data entry",
        "CRM updates",
        "Documentation"
      ],
    },
  },
  {
    icon: Headphones,
    title: "Customer Service & Tech Support",
    description:
      "Description pa dito",
    details: {
      overview: "We provide responsive customer care and reliable technical support to ensure smooth communication and problem resolution.",
      features: [
        "Customer inquiries",
        "Technical support",
        "Ticket management",
        "Client communication"
      ],
    },
  },
  {
    icon: Palette,
    title: "Creative Services",
    description:
      "Our team also supports your brand through creative content.",
    details: {
      overview: "We craft compelling visuals and multimedia content that strengthen your brand identity and captivate your audience.",
      features: [
        "Graphic design",
        "Video editing",
        "Marketing visuals",
        "Social media graphics"
      ],
    },
  },
  {
    icon: Briefcase,
    title: "Digital Marketing",
    description:
      "We help businesses reach more customers online.",
    details: {
      overview: "Our digital marketing strategies are designed to expand your reach, attract leads, and drive measurable business growth.",
      features: [
        "SEO optimization",
        "Paid advertising",
        "Marketing strategy",
        "Lead generation"
      ],
    },
  },
];

export default function ServicesSection()
{
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="bg-muted/30 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-8 xl:px-8">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Our Core Services
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Smart Virtual Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Streamlined solutions for modern businesses.
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
                  onClick={() =>
                  {
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
