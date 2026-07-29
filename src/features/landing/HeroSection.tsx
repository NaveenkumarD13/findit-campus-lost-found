import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import Logo from "@/assets/logo.jpeg";


function HeroSection() {


  const [stats, setStats] = useState({
    lost: 0,
    found: 0,
    total: 0,
  });




  const loadStats = () => {


    const lostReports =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );



    setStats({

      lost: lostReports.length,

      found: foundReports.length,

      total:
        lostReports.length +
        foundReports.length,

    });


  };





  useEffect(() => {


    loadStats();



    window.addEventListener(
      "reportsUpdated",
      loadStats
    );



    return () => {

      window.removeEventListener(
        "reportsUpdated",
        loadStats
      );

    };


  }, []);






  return (

    <section
      id="hero"
      className="
      relative
      overflow-hidden
      bg-slate-950
      pt-32
      pb-24
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        -top-40
        -left-40
        h-96
        w-96
        rounded-full
        bg-blue-600/20
        blur-[140px]
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-0
        h-[420px]
        w-[420px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />





      <div
        className="
        relative
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        px-6
        lg:grid-cols-2
        "
      >



        {/* LEFT CONTENT */}


        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.7,
          }}

        >



          {/* Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-4
            py-2
            text-sm
            text-cyan-300
            "
          >

            <ShieldCheck size={16}/>

            Trusted Campus Lost & Found Platform

          </div>





          {/* Logo */}

          <motion.img

            src={Logo}

            alt="FindIt Logo"

            className="mt-8 w-72"

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            transition={{
              delay:0.3,
            }}

          />





          {/* Heading */}

          <h1
            className="
            mt-8
            text-5xl
            font-extrabold
            leading-tight
            text-white
            lg:text-7xl
            "
          >

            Never Lose

            <br/>

            <span
              className="
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >

              Your Belongings

            </span>

            <br/>

            Again.

          </h1>






          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-slate-400
            "
          >

            FindIt helps students and faculty report,
            search and recover lost belongings quickly
            through a secure and transparent campus
            lost & found management system.

          </p>






          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">


            <button
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-7
              py-4
              font-semibold
              text-white
              shadow-xl
              shadow-blue-600/30
              transition
              hover:scale-105
              "
            >

              Get Started

              <ArrowRight size={18}/>

            </button>




            <button
              className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-7
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
              "
            >

              Explore Features

            </button>


          </div>







          {/* Dynamic Stats */}


          <div
            className="
            mt-12
            flex
            flex-wrap
            gap-10
            "
          >


            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-white
                "
              >

                {stats.total}

              </h3>


              <p className="text-slate-400">

                Total Reports

              </p>

            </div>





            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-white
                "
              >

                {stats.lost}

              </h3>


              <p className="text-slate-400">

                Lost Items

              </p>

            </div>





            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-white
                "
              >

                {stats.found}

              </h3>


              <p className="text-slate-400">

                Found Items

              </p>

            </div>



          </div>




        </motion.div>








        {/* RIGHT SIDE */}

        <motion.div

          initial={{
            opacity:0,
            x:80,
          }}

          animate={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:0.8,
          }}

          className="relative"

        >


          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-2xl
            shadow-2xl
            "
          >



            <div
              className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-slate-900/70
              p-4
              "
            >

              <Search className="text-cyan-400"/>

              <span className="text-slate-400">

                Search lost items...

              </span>


            </div>





            <div className="mt-8 space-y-5">


              <ItemCard
                title="🎒 College Backpack"
                location="Library Block"
                status="Found"
              />


              <ItemCard
                title="📱 Samsung Phone"
                location="Main Canteen"
                status="Pending"
              />


              <ItemCard
                title="💳 Student ID Card"
                location="Admin Block"
                status="Verified"
              />


            </div>


          </div>




        </motion.div>



      </div>



    </section>

  );

}





function ItemCard({
  title,
  location,
  status,
}:{
  title:string;
  location:string;
  status:string;
}){


return (

<motion.div

whileHover={{
 scale:1.03,
}}

className="
rounded-2xl
border
border-white/10
bg-slate-900/60
p-5
"

>


<div className="flex items-center justify-between">


<div>

<h3 className="font-semibold text-white">

{title}

</h3>


<div className="
mt-2
flex
items-center
gap-2
text-sm
text-slate-400
">

<MapPin size={15}/>

{location}

</div>


</div>



<span
className="
rounded-full
bg-cyan-500/20
px-3
py-1
text-sm
text-cyan-400
"
>

{status}

</span>


</div>


</motion.div>


);

}



export default HeroSection;