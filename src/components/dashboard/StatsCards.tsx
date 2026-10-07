import { useEffect, useState } from "react";

import {
  FilePlus2,
  ClipboardList,
  Package,
  ShieldCheck,
} from "lucide-react";



type Report = {
  id:number;
  itemName:string;
  category:string;
  type?:string;
};




function StatsCards() {


  const [reports,setReports] = useState<Report[]>([]);




  const loadReports = () => {


    const lostReports =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );



    const allReports = [

      ...lostReports.map((item:Report)=>({
        ...item,
        type:"lost",
      })),


      ...foundReports.map((item:Report)=>({
        ...item,
        type:"found",
      })),

    ];



    setReports(allReports);


  };





  useEffect(()=>{


    loadReports();



    window.addEventListener(
      "reportsUpdated",
      loadReports
    );



    return()=>{

      window.removeEventListener(
        "reportsUpdated",
        loadReports
      );

    };


  },[]);





  const stats = [

    {
      title:"Total Reports",
      value:reports.length,
      icon:ClipboardList,
      color:"text-cyan-400",
    },


    {
      title:"Lost Items",
      value:
        reports.filter(
          item=>item.type==="lost"
        ).length,

      icon:FilePlus2,
      color:"text-red-400",
    },


    {
      title:"Found Items",
      value:
        reports.filter(
          item=>item.type==="found"
        ).length,

      icon:Package,
      color:"text-green-400",
    },


    {
      title:"Categories",
      value:
        new Set(
          reports.map(
            item=>item.category
          )
        ).size,

      icon:ShieldCheck,
      color:"text-purple-400",
    },

  ];






  return (

    <section>


      <h2 className="mb-4 text-xl font-semibold text-white">

        Overview

      </h2>



      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


        {
          stats.map((stat)=>{


            const Icon = stat.icon;



            return (

              <div

                key={stat.title}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-md
                transition
                hover:bg-white/10
                "

              >


                <Icon

                  size={28}

                  className={stat.color}

                />



                <h3 className="mt-5 text-3xl font-bold text-white">

                  {stat.value}

                </h3>



                <p className="mt-1 text-sm text-slate-400">

                  {stat.title}

                </p>



              </div>

            );


          })
        }


      </div>


    </section>

  );

}



export default StatsCards;