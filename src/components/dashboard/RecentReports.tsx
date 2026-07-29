import { useEffect, useState } from "react";
import {
  MapPin,
  CalendarDays,
  Package,
} from "lucide-react";


type Report = {

  id:number;

  itemName:string;

  category:string;

  location?:string;

  foundLocation?:string;

  lostDate?:string;

  foundDate?:string;

  status:string;

  type:"lost" | "found";

};




function RecentReports() {


  const [reports,setReports] =
    useState<Report[]>([]);




  const loadReports = ()=>{


    const lostReports =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );



    const combinedReports = [

      ...lostReports.map((item:any)=>({

        ...item,

        type:"lost",

        location:item.location,

      })),


      ...foundReports.map((item:any)=>({

        ...item,

        type:"found",

        location:item.foundLocation,

      })),


    ];




    const sortedReports =
      combinedReports.sort(
        (a,b)=>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );



    setReports(
      sortedReports.slice(0,5)
    );


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



      <div className="
        flex
        items-center
        justify-between
      ">


        <h2 className="
          text-xl
          font-semibold
          text-white
        ">

          Recent Reports

        </h2>



        <Package
          size={22}
          className="text-cyan-400"
        />


      </div>





      {
        reports.length === 0 ?


        (

          <div className="
            mt-5
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-5
          ">


            <p className="
              text-sm
              text-slate-400
            ">

              No reports yet.
              Start by reporting a lost or found item.

            </p>


          </div>

        )


        :


        (

          <div className="
            mt-5
            space-y-4
          ">


          {
            reports.map((report)=>(


              <div

                key={report.id}

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


                <div className="
                  flex
                  items-start
                  justify-between
                  gap-4
                ">


                  <div>


                    <h3 className="
                      text-lg
                      font-semibold
                      text-white
                    ">

                      {report.itemName}

                    </h3>


                    <p className="
                      mt-1
                      text-sm
                      text-slate-400
                    ">

                      {report.category}

                    </p>


                  </div>





                  <span

                    className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold

                    ${
                      report.type==="lost"

                      ?

                      "bg-red-500/20 text-red-300 border border-red-500/30"

                      :

                      "bg-green-500/20 text-green-300 border border-green-500/30"

                    }
                    `}

                  >

                    {
                      report.type==="lost"
                      ?
                      "Lost"
                      :
                      "Found"
                    }


                  </span>


                </div>






                <div className="
                  mt-4
                  flex
                  flex-wrap
                  gap-4
                  text-sm
                  text-slate-400
                ">


                  <span className="
                    flex
                    items-center
                    gap-2
                  ">

                    <MapPin size={16}/>

                    {report.location || "Unknown"}

                  </span>





                  <span className="
                    flex
                    items-center
                    gap-2
                  ">

                    <CalendarDays size={16}/>

                    {
                      report.lostDate ||
                      report.foundDate ||
                      "No date"
                    }

                  </span>


                </div>





                <div className="
                  mt-4
                  inline-flex
                  rounded-full
                  bg-yellow-500/10
                  px-3
                  py-1
                  text-xs
                  text-yellow-300
                ">

                  {report.status}

                </div>



              </div>


            ))
          }


          </div>

        )

      }


    </section>

  );

}



export default RecentReports;