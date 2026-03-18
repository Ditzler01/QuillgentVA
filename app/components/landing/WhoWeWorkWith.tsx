"use client"
import { motion } from "framer-motion";
import { Rocket, Building2, ShoppingBag, Home, Briefcase } from "lucide-react";

const industries = [
  { label: "Startups", icon: Rocket },
  { label: "Agencies", icon: Building2 },
  { label: "E-commerce brands", icon: ShoppingBag },
  { label: "Real estate professionals", icon: Home },
  { label: "Service-based businesses", icon: Briefcase },
];

export default function WhoWeWorkWith()
{
  return (
    <section id="who-we-work-with" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-8 xl:px-8 h-full grid grid-cols-1 gap-16">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
            Building Together
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Who We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We support businesses across many industries and help them reach their full potential.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item, index) =>
          {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#40929e]/50 hover:shadow-lg hover:shadow-[#40929e]/10"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#40929e]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center space-y-2">
                  {/* Icon */}
                  <div className="mb-4 inline-flex rounded-full bg-[#40929e]/10 p-3 transition-colors duration-300 group-hover:bg-[#40929e]/20">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#40929e]"
                    />
                  </div>

                  {/* Label */}
                  <h3 className="font-semibold text-foreground">
                    {item.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
