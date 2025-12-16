import { motion } from 'framer-motion';
import teamImage from '@assets/generated_images/professional_team_portrait.png';

const stats = [
  { value: '10+', label: 'Years Experience', description: 'Delivering excellence in virtual assistance' },
  { value: '500+', label: 'Happy Clients', description: 'Businesses transformed worldwide' },
  { value: '98%', label: 'Client Retention', description: 'Our clients stay because results speak' },
  { value: '50+', label: 'Expert VAs', description: 'Trained professionals at your service' },
];

export default function WhyQuillgent() {
  return (
    <section id="why-us" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center rounded-full bg-[#40929e]/10 px-4 py-1.5 text-sm font-medium text-[#40929e]">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quillgent is not just another VA agency. We are your strategic
              partner in growth, committed to delivering exceptional value and
              transforming how you work.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-3xl font-bold text-[#40929e] md:text-4xl">
                    {stat.value}
                  </span>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl lg:aspect-[4/3]">
              <img
                src={teamImage}
                alt="Quillgent professional team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-border bg-card p-4 shadow-lg md:-bottom-6 md:-right-6">
              <p className="text-sm font-semibold text-foreground">Trusted Partner</p>
              <p className="text-xs text-muted-foreground">Since 2014</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
