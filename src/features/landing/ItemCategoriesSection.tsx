import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  BookOpen,
  Backpack,
  Package,
} from "lucide-react";


const categories = [
  {
    title: "Electronics",
    key: "electronics",
    icon: Laptop,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Documents",
    key: "documents",
    icon: BookOpen,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Accessories",
    key: "accessories",
    icon: Backpack,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Others",
    key: "others",
    icon: Package,
    color: "from-orange-500 to-yellow-500",
  },
];



function ItemCategoriesSection() {


  const [categoryCounts, setCategoryCounts] =
    useState<Record<string, number>>({});




  const loadCategoryData = () => {


    const lostReports =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );



    const allReports = [
      ...lostReports,
      ...foundReports,
    ];



    const counts: Record<string, number> = {
      electronics: 0,
      documents: 0,
      accessories: 0,
      others: 0,
    };



    allReports.forEach((report: any) => {


      const category =
        report.category?.toLowerCase();



      if (category && counts[category] !== undefined) {

        counts[category]++;

      }


    });



    setCategoryCounts(counts);

  };







  useEffect(() => {


    loadCategoryData();



    window.addEventListener(
      "reportsUpdated",
      loadCategoryData
    );



    return () => {


      window.removeEventListener(
        "reportsUpdated",
        loadCategoryData
      );


    };


  }, []);







  return (

    <section className="bg-slate-950 py-28">


      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}

        <div className="mb-20 text-center">


          <span
            className="
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-5
            py-2
            text-cyan-300
            "
          >

            Browse Categories

          </span>



          <h2
            className="
            mt-6
            text-5xl
            font-bold
            text-white
            "
          >

            Popular Item Categories

          </h2>



          <p className="mt-6 text-slate-400">

            Explore lost and found items based on categories.

          </p>


        </div>






        {/* Category Cards */}


        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
          "
        >


          {
            categories.map((item, index) => {


              const Icon = item.icon;



              return (

                <motion.div


                  key={item.title}


                  initial={{
                    opacity: 0,
                    y: 40,
                  }}


                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}


                  transition={{
                    delay: index * 0.1,
                  }}


                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}


                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  "

                >



                  <div
                    className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    ${item.color}
                    `}
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>





                  <h3
                    className="
                    mt-6
                    text-2xl
                    font-semibold
                    text-white
                    "
                  >

                    {item.title}

                  </h3>





                  <p
                    className="
                    mt-3
                    text-slate-400
                    "
                  >

                    {categoryCounts[item.key] || 0}
                    {" "}
                    Reports

                  </p>



                </motion.div>


              );


            })
          }


        </div>


      </div>


    </section>

  );

}



export default ItemCategoriesSection;