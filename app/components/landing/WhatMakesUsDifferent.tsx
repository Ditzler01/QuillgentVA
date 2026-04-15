"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function WhatMakesUsDifferent()
{
  return (
    <div id="why-us" className="mx-auto flex flex-col max-w-7xl gap-12 px-6 py-16 
                md:flex-col md:gap-8 md:px-8 md:py-24 
                lg:grid lg:grid-cols-5 lg:gap-20 lg:px-8 lg:py-32 xl:px-8">
      {/* Text block */}
      <motion.div
        className="flex flex-col justify-center lg:col-span-3 order-1 md:order-1 lg:order-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
          What Makes Us Different
        </span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
          More Than a Typical VA Agency
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Many VA agencies focus only on basic administrative work.
          Our team includes experienced developers and digital specialists capable of handling more advanced projects.
          This allows us to support businesses not only with everyday tasks, but also with the systems that power their online presence.
        </p>
      </motion.div>

      {/* Image block */}
      <motion.div
        className="relative lg:col-span-2 order-2 md:order-2 lg:order-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative aspect-[4/3] rounded-3xl shadow-2xl">
          <Image
            src="/images/2nd Image.png"
            alt="Professional virtual assistant at work"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
