import { useEffect, useState } from "react";
import {
  Activity,
  SearchCheck,
  FileWarning,
  PackageCheck,
} from "lucide-react";



function ActivitySummary() {


  const [summary,setSummary] = useState({

    totalLost:0,

    totalFound:0,

    pending:0,

    total:0,

  });






  const loadActivity = ()=>{


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





    const pendingReports =
      allReports.filter(
        (report:any)=>
          report.status==="pending"
      );





    setSummary({

      totalLost:
        lostReports.length,


      totalFound:
        foundReports.length,


      pending:
        pendingReports.length,


      total:
        allReports.length,

    });


  };






  useEffect(()=>{


    loadActivity();



    window.addEventListener(
      "reportsUpdated",
      loadActivity
    );



    return()=>{


      window.removeEventListener(
        "reportsUpdated",
        loadActivity
      );


    };


  },[]);







  const activities = [

    {

      title:"Lost Reports",

      value:summary.totalLost,

      icon:FileWarning,

      color:"text-red-400",

    },


    {

      title:"Found Reports",

      value:summary.totalFound,

      icon:PackageCheck,

      color:"text-green-400",

    },


    {

      title:"Pending Verification",

      value:summary.pending,

      icon:SearchCheck,

      color:"text-yellow-400",

    },


    {

      title:"Total Activity",

      value:summary.total,

      icon:Activity,

      color:"text-cyan-400",

    },


  ];






  return (

    <section

      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-md
      "

    >



      <h2 className="
        text-xl
        font-semibold
        text-white
      ">

        Campus Activity

      </h2>




      <p className="
        mt-1
        text-sm
        text-slate-400
      ">

        Track overall lost & found activity

      </p>






      <div className="
        mt-5
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-4
      ">


        {
          activities.map((activity)=>{


            const Icon =
              activity.icon;



            return (

              <div

                key={activity.title}

                className="
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-5
                transition
                hover:bg-white/5
                "

              >


                <Icon

                  size={28}

                  className={activity.color}

                />



                <h3 className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                ">

                  {activity.value}

                </h3>




                <p className="
                  mt-1
                  text-sm
                  text-slate-400
                ">

                  {activity.title}

                </p>


              </div>

            );


          })
        }


      </div>



    </section>

  );

}



export default ActivitySummary;