"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with the team was a great experience. The training spreadsheets and systems they created were exactly what we needed. Everything was organized clearly and delivered on time. Their attention to detail and ability to understand our workflow made the process smooth and efficient.",
    name: "Jeff Salisbury",
    role: "Business Owner",
    avatar: "/images/avatar1.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The support I received was fantastic. The team handled everything professionally and delivered high-quality work quickly. Communication was excellent throughout the process and I truly appreciated their reliability.",
    name: "Deborah Hemingway",
    role: "Entrepreneur",
    avatar: "/images/avatar2.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Great experience working with this team. They delivered exactly what I asked for and even improved the details along the way. The designs, animations, and overall execution were impressive. I would definitely recommend them to anyone looking for skilled professionals.",
    name: "Manesh Ram",
    role: "Business Owner",
    avatar: "/images/avatar3.png",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "They did an excellent job helping manage and organize important tasks for my business. Communication was clear and the results exceeded expectations. I look forward to continuing to work together on future projects.",
    name: "Ariel Applbaum",
    role: "Entrepreneur",
    avatar: "/images/avatar3.png",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Working with this team was an absolute pleasure. Their efficiency, creativity, and productivity consistently exceeded expectations. Every task was completed on time with exceptional quality. They were a reliable asset to our team and contributed valuable ideas throughout our collaboration.",
    name: "George Marwieh",
    role: "Manager, MSaaS Agency",
    avatar: "/images/avatar3.png",
    rating: 5,
  },
];

export default function TestimonialsSection()
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
  {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () =>
  {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-8 xl:px-8">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what business leaders have
            to say about working with Quillgent.
          </p>
        </motion.div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col p-6 md:p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  {/* <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-muted-foreground">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  {/* <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={prev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-[#40929e]" : "bg-muted-foreground/30"
                    }`}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button
              size="icon"
              variant="outline"
              onClick={next}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
