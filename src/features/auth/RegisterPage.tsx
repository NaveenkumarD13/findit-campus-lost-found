import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";

import Logo from "@/assets/logo.jpeg";

import RegisterForm from "./RegisterForm";

const features = [
  {
    icon: UserPlus,
    text: "Create Your Student Account",
  },
  {
    icon: ShieldCheck,
    text: "Secure Registration & Data Protection",
  },
  {
    icon: Sparkles,
    text: "Access Lost & Found Services Instantly",
  },
];

function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Section */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={Logo}
              alt="FindIt Logo"
              className="mb-8 w-44 md:w-48"
            />

            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Join Thousands of Students
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Create Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FindIt
              </span>{" "}
              Account
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              Become a part of the FindIt community to report lost
              belongings, discover found items, receive instant updates,
              and help create a safer, smarter campus experience for
              everyone.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-4"
                  >
                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />
                    </div>

                    <p className="text-slate-300">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 text-sm text-slate-500">
              🚀 Register today and experience a faster, smarter, and
              more secure way to reconnect with your belongings.
            </p>
          </motion.div>

          {/* Right Section */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Create Account ✨
                </h2>

                <p className="mt-2 leading-7 text-slate-400">
                  Create your account to start reporting, tracking,
                  and recovering lost belongings with confidence.
                </p>
              </div>

              <RegisterForm />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

export default RegisterPage;