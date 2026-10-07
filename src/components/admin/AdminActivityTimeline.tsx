import { useEffect, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";


interface Activity {

  id:number;

  action:
    | "approved"
    | "rejected";

  itemName:string;

  type:string;

  createdAt:string;

}





function AdminActivityTimeline() {


  const [activities,setActivities] =
    useState<Activity[]>([]);




  const loadActivities = ()=>{


    const data =
      JSON.parse(
        localStorage.getItem("adminActivities") || "[]"
      );



    const sorted =
      data.sort(
        (a:Activity,b:Activity)=>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0,8);



    setActivities(sorted);


  };





  useEffect(()=>{


    loadActivities();



    window.addEventListener(
      "reportsUpdated",
      loadActivities
    );



    return ()=>{


      window.removeEventListener(
        "reportsUpdated",
        loadActivities
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
      backdrop-blur-xl
      "

    >




      <h2

        className="
        mb-6
        text-xl
        font-bold
        text-white
        "

      >

        Activity Timeline

      </h2>






      {
        activities.length === 0 ?


        (

          <div

            className="
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-6
            text-center
            text-sm
            text-slate-400
            "

          >

            No admin activity yet.

          </div>

        )

        :


        (

          <div className="space-y-5">


            {
              activities.map((activity)=>(


                <div

                  key={activity.id}

                  className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/40
                  p-4
                  "

                >




                  <div>


                    {
                      activity.action==="approved"


                      ?

                      (

                        <CheckCircle2

                          className="
                          text-green-400
                          "

                          size={28}

                        />

                      )


                      :


                      (

                        <XCircle

                          className="
                          text-red-400
                          "

                          size={28}

                        />

                      )

                    }


                  </div>






                  <div className="flex-1">


                    <p

                      className="
                      font-semibold
                      text-white
                      "

                    >

                      {
                        activity.action==="approved"

                        ?

                        "Approved"

                        :

                        "Rejected"

                      }


                      {" "}

                      {activity.itemName}

                      {" "}report


                    </p>





                    <p

                      className="
                      mt-1
                      text-sm
                      text-slate-400
                      "

                    >

                      Type:
                      {" "}
                      {activity.type}


                    </p>






                    <div

                      className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-slate-500
                      "

                    >

                      <Clock size={14}/>


                      {
                        new Date(
                          activity.createdAt
                        )
                        .toLocaleString()
                      }


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



export default AdminActivityTimeline;