"use client";

import { motion } from "framer-motion";
import { Users, Star, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Businesses Served" },
  { icon: Star, value: "99%", label: "Satisfaction Rate" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Shield, value: "100%", label: "Data Security" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="h-8 w-8 text-[#40929e]" />
              <span className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
