import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

import Logo from "@/assets/logo.jpeg";

function SplashScreen() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      {/* Animated Background Blobs */}

      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
        }}
        className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[220px]"
      />

      {/* Glass Card */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      >

        {/* Logo */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="flex justify-center"
        >
          <motion.div
            initial={{
              rotate: -15,
              scale: 0.75,
            }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex h-44 w-44 items-center justify-center rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_0_70px_rgba(6,182,212,0.35)] backdrop-blur-xl"
          >

            <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-xl" />

            <img
              src={Logo}
              alt="FindIt Logo"
              className="relative h-full w-full rounded-2xl object-contain"
            />

          </motion.div>
        </motion.div>

        {/* App Name */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 text-center text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            FindIt
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-4 text-center text-lg text-slate-300"
        >
          Campus Lost &amp; Found System
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          className="mt-2 text-center text-sm text-slate-500"
        >
          Reconnect Every Belonging.
        </motion.p>

        {/* Premium Spinner */}

        <div className="mt-12 flex justify-center">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
          >
            <LoaderCircle
              size={40}
              className="text-cyan-400"
            />
          </motion.div>

        </div>

        {/* Progress Bar */}

        <div className="mt-10 h-2 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 4,
              ease: "linear",
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
          />

        </div>

        {/* Checking Authentication */}

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-8 text-center text-sm tracking-wide text-slate-400"
        >
          Checking Authentication<span className="animate-pulse">...</span>
        </motion.p>

      </motion.div>

    </main>
  );
}

export default SplashScreen;