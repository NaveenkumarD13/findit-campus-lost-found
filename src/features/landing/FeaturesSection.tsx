import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bell,
  MonitorSmartphone,
  Search,
  ShieldCheck,
} from "lucide-react";

import { FEATURES } from "@/data/features";

const iconMap = {
  ShieldCheck,
  Search,
  BadgeCheck,
  Activity,
  Bell,
  MonitorSmartphone,
};

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Why Choose FindIt
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Powerful Features for a
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Smarter Campus
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Designed to simplify the process of reporting, tracking and
            recovering lost belongings while ensuring a secure experience for
            everyone on campus.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]"
              >
                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20">
                  <Icon className="text-white" size={30} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>

                {/* Learn More */}
                <div className="mt-8 flex items-center gap-2 font-medium text-cyan-400 transition-all group-hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </div>

                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;