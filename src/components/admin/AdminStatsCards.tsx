import { useEffect, useState } from "react";
import {
  FileWarning,
  Clock3,
  ShieldCheck,
  XCircle,
  PackageCheck,
  SearchCheck,
} from "lucide-react";


interface Report {

  status?: 
    | "pending"
    | "approved"
    | "rejected";

}



function AdminStatsCards() {


  const [stats, setStats] = useState({

    total:0,

    pending:0,

    approved:0,

    rejected:0,

    lost:0,

    found:0,

  });





  const loadStats = () => {


    const lostReports:Report[] =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports:Report[] =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );




    const allReports = [

      ...lostReports,

      ...foundReports,

    ];




    setStats({

      total: allReports.length,


      pending:
        allReports.filter(
          report =>
          report.status === "pending"
        ).length,



      approved:
        allReports.filter(
          report =>
          report.status === "approved"
        ).length,



      rejected:
        allReports.filter(
          report =>
          report.status === "rejected"
        ).length,



      lost:
        lostReports.length,


      found:
        foundReports.length,

    });


  };





  useEffect(()=>{


    loadStats();



    window.addEventListener(
      "reportsUpdated",
      loadStats
    );



    return()=>{

      window.removeEventListener(
        "reportsUpdated",
        loadStats
      );

    };


  },[]);







  const cards = [

    {
      title:"Total Reports",
      value:stats.total,
      icon:FileWarning,
      color:"text-cyan-400",
    },


    {
      title:"Pending Approval",
      value:stats.pending,
      icon:Clock3,
      color:"text-yellow-400",
    },


    {
      title:"Approved Reports",
      value:stats.approved,
      icon:ShieldCheck,
      color:"text-green-400",
    },


    {
      title:"Rejected Reports",
      value:stats.rejected,
      icon:XCircle,
      color:"text-red-400",
    },


    {
      title:"Lost Reports",
      value:stats.lost,
      icon:SearchCheck,
      color:"text-orange-400",
    },


    {
      title:"Found Reports",
      value:stats.found,
      icon:PackageCheck,
      color:"text-purple-400",
    },


  ];







  return (

    <section>


      <h2
        className="
        mb-4
        text-xl
        font-semibold
        text-white
        "
      >

        Dashboard Overview

      </h2>




      <div
        className="
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
        "
      >


        {
          cards.map((card)=>{


            const Icon = card.icon;



            return (

              <div

                key={card.title}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
                transition
                hover:-translate-y-1
                hover:bg-white/10
                "

              >


                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >

                  <Icon
                    size={30}
                    className={card.color}
                  />


                </div>




                <h3
                  className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                  "
                >

                  {card.value}

                </h3>



                <p
                  className="
                  mt-1
                  text-sm
                  text-slate-400
                  "
                >

                  {card.title}

                </p>



              </div>

            );


          })
        }


      </div>


    </section>

  );

}



export default AdminStatsCards;