import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { FAQS } from "@/data/faqs";

function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Have Questions?
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              We've Got Answers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Everything you need to know about FindIt before getting started.
          </p>
        </motion.div>

        {/* FAQ List */}

        <div className="space-y-5">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,.12)]"
            >
              {/* Header */}

              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between px-7 py-6 text-left transition-colors hover:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: openId === faq.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-cyan-400"
                >
                  {openId === faq.id ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}
                </motion.div>
              </button>

              {/* Content */}

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    key="content"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-7 py-6 text-base leading-8 text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;