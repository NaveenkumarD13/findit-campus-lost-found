import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";


function WelcomeCard() {


  const { user } = useAuth();



  return (

    <motion.section

      initial={{
        opacity:0,
        y:20,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.5,
      }}

      className="
      rounded-3xl
      border
      border-white/10
      bg-gradient-to-br
      from-cyan-500/10
      to-blue-600/10
      p-8
      shadow-xl
      backdrop-blur-md
      "

    >


      <h1 className="text-3xl font-bold text-white">

        Welcome back, {user?.fullName || "Student"} 👋

      </h1>



      <p className="
        mt-3
        max-w-xl
        text-sm
        leading-7
        text-slate-400
      ">

        Manage your lost and found activity,
        track reports, and help your campus
        community reconnect with their belongings faster.

      </p>




      <div

        className="
        mt-5
        inline-flex
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
        "

      >

        Student Account

      </div>


    </motion.section>

  );

}


export default WelcomeCard;