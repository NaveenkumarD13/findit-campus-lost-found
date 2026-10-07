import { useEffect, useState } from "react";
import {
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";



type Notification = {

  id:number;

  message:string;

  type:"success" | "pending" | "info";

};





function NotificationCard() {


  const [notifications,setNotifications] =
    useState<Notification[]>([]);





  const loadNotifications = ()=>{


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





    const generatedNotifications:Notification[] = [];





    const pendingReports =
      allReports.filter(
        (report:any)=>
          report.status==="pending"
      );





    if(pendingReports.length > 0){


      generatedNotifications.push({

        id:1,

        message:
          `You have ${pendingReports.length} report(s) waiting for verification.`,

        type:"pending",

      });


    }






    if(allReports.length > 0){


      const latestReport =
        allReports[
          allReports.length - 1
        ];



      generatedNotifications.push({

        id:2,

        message:
          `${latestReport.itemName} report submitted successfully.`,

        type:"success",

      });


    }





    if(allReports.length===0){


      generatedNotifications.push({

        id:3,

        message:
          "No activity yet. Start by reporting a lost or found item.",

        type:"info",

      });


    }





    setNotifications(
      generatedNotifications
    );


  };






  useEffect(()=>{


    loadNotifications();



    window.addEventListener(
      "reportsUpdated",
      loadNotifications
    );



    return()=>{


      window.removeEventListener(
        "reportsUpdated",
        loadNotifications
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
        gap-3
      ">


        <Bell

          size={24}

          className="text-cyan-400"

        />



        <h2 className="
          text-xl
          font-semibold
          text-white
        ">

          Notifications

        </h2>


      </div>






      <div className="
        mt-5
        space-y-4
      ">


        {
          notifications.map((notification)=>(



            <div

              key={notification.id}

              className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-4
              "

            >



              {
                notification.type==="success" && (

                  <CheckCircle

                    size={24}

                    className="text-green-400"

                  />

                )
              }





              {
                notification.type==="pending" && (

                  <Clock

                    size={24}

                    className="text-yellow-400"

                  />

                )
              }





              {
                notification.type==="info" && (

                  <AlertCircle

                    size={24}

                    className="text-blue-400"

                  />

                )
              }






              <p className="
                text-sm
                text-slate-300
              ">

                {notification.message}

              </p>



            </div>



          ))
        }



      </div>



    </section>

  );

}




export default NotificationCard;