import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/80 p-12 backdrop-blur-2xl shadow-[0_0_60px_rgba(37,99,235,0.15)] lg:p-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={16} />
              Join the FindIt Community
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Lost Something?
              <br />

              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Find It Faster.
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Create your account to securely report lost belongings, submit
              found items, receive instant updates and help build a more
              connected campus community.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight size={20} />
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* Bottom */}

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
              <span>✓ Secure Platform</span>
              <span>✓ Easy Reporting</span>
              <span>✓ Verified Recovery</span>
              <span>✓ Mobile Friendly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;