import { motion } from "framer-motion";
import {
  FileText,
  Search,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Report Lost Item",
    description:
      "Submit lost item details with location, date and optional image.",
    icon: FileText,
  },
  {
    id: "02",
    title: "Community Reports",
    description:
      "Students or staff report found belongings on campus.",
    icon: Search,
  },
  {
    id: "03",
    title: "Ownership Verification",
    description:
      "Admin verifies the ownership before approving the request.",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Collect Your Item",
    description:
      "Receive your belongings safely after successful verification.",
    icon: PackageCheck,
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Simple Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            How
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}FindIt{" "}
            </span>
            Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Recover lost belongings in four simple steps with a secure,
            transparent and efficient process.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .15,
                  }}
                  className="relative text-center"
                >

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-lg">

                    <Icon
                      size={38}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="mt-5 text-cyan-400 font-bold text-lg">
                    {step.id}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;