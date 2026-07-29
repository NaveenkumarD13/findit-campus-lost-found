import { useEffect, useState } from "react";
import {
  Check,
  X,
  Eye,
  MapPin,
  CalendarDays,
} from "lucide-react";



interface Report {

  id:number;

  itemName:string;

  category:string;

  location?:string;

  foundLocation?:string;

  lostDate?:string;

  foundDate?:string;

  status:string;

  type:"Lost" | "Found";

  createdAt:string;

  ownerName?:string;

  finderName?:string;

}




function PendingReportsQueue() {



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



    const pendingReports = [


      ...lostReports.map((item:any)=>({

        ...item,

        type:"Lost",

      })),


      ...foundReports.map((item:any)=>({

        ...item,

        type:"Found",

      })),


    ].filter(
      (item)=>
        item.status==="pending"
    );



    setReports(pendingReports);


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







  const updateStatus = (

    id:number,

    type:"Lost"|"Found",

    status:string

  )=>{


    const storageKey =
      type==="Lost"
      ?
      "lostReports"
      :
      "foundReports";



    const reports =
      JSON.parse(
        localStorage.getItem(storageKey) || "[]"
      );



    const updatedReports =
      reports.map((item:any)=>

        item.id===id

        ?

        {
          ...item,
          status,
        }

        :

        item

      );



    localStorage.setItem(

      storageKey,

      JSON.stringify(updatedReports)

    );




    window.dispatchEvent(
      new Event("reportsUpdated")
    );


  };







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



      <h2

        className="
        mb-6
        text-xl
        font-semibold
        text-white
        "

      >

        Pending Verification Queue

      </h2>





      {
        reports.length===0

        ?

        (

          <div

            className="
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-8
            text-center
            text-slate-400
            "

          >

            No pending reports 🎉

          </div>

        )


        :


        (

        <div className="space-y-5">


        {
          reports.map((report)=>(


            <div

              key={report.id}

              className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/50
              p-5
              "

            >



              <div

                className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
                "

              >



                <div>


                  <h3

                    className="
                    text-lg
                    font-semibold
                    text-white
                    "

                  >

                    {report.itemName}

                  </h3>




                  <p className="mt-1 text-sm text-cyan-300">

                    {report.type} • {report.category}

                  </p>




                  <div className="mt-3 space-y-2 text-sm text-slate-400">


                    <p className="flex gap-2 items-center">

                      <MapPin size={15}/>


                      {
                        report.location ||
                        report.foundLocation ||
                        "Campus"
                      }


                    </p>





                    <p className="flex gap-2 items-center">

                      <CalendarDays size={15}/>


                      {
                        new Date(
                          report.createdAt
                        ).toLocaleDateString()
                      }


                    </p>



                  </div>



                </div>






                <div className="flex gap-3">


                  <button

                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    px-4
                    py-2
                    text-sm
                    text-white
                    hover:bg-white/10
                    "

                  >

                    <Eye size={16}/>

                    View

                  </button>





                  <button

                    onClick={()=>
                      updateStatus(
                        report.id,
                        report.type,
                        "approved"
                      )
                    }


                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-green-500/20
                    px-4
                    py-2
                    text-sm
                    text-green-300
                    hover:bg-green-500/30
                    "

                  >

                    <Check size={16}/>

                    Approve

                  </button>






                  <button

                    onClick={()=>
                      updateStatus(
                        report.id,
                        report.type,
                        "rejected"
                      )
                    }


                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-red-500/20
                    px-4
                    py-2
                    text-sm
                    text-red-300
                    hover:bg-red-500/30
                    "

                  >

                    <X size={16}/>

                    Reject

                  </button>




                </div>



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



export default PendingReportsQueue;