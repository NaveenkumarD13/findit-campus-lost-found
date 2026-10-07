import { useEffect, useState } from "react";
import {
  Bell,
  AlertCircle,
} from "lucide-react";


interface Report {
  status?: string;
}



function AdminNotifications() {


  const [pendingCount, setPendingCount] = useState(0);



  const loadNotifications = () => {


    const lostReports: Report[] =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports: Report[] =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );



    const allReports = [

      ...lostReports,

      ...foundReports,

    ];



    const pending = allReports.filter(
      (report)=>
        report.status === "pending"
    ).length;



    setPendingCount(pending);


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
      border-yellow-400/20
      bg-yellow-400/10
      p-6
      backdrop-blur-md
      "

    >


      <div
        className="
        flex
        items-center
        gap-4
        "
      >


        <div
          className="
          rounded-2xl
          bg-yellow-400/20
          p-3
          text-yellow-300
          "
        >

          <Bell size={28}/>

        </div>





        <div>


          <h2
            className="
            text-lg
            font-semibold
            text-white
            "
          >

            Admin Notifications

          </h2>




          {
            pendingCount > 0 ? (


              <p
                className="
                mt-1
                flex
                items-center
                gap-2
                text-sm
                text-yellow-300
                "
              >

                <AlertCircle size={16}/>


                {pendingCount} pending report
                {pendingCount > 1 && "s"}
                {" "}waiting for verification.


              </p>


            )

            :

            (


              <p
                className="
                mt-1
                text-sm
                text-slate-400
                "
              >

                No pending reports. Everything is up to date.

              </p>


            )

          }



        </div>


      </div>


    </section>

  );

}


export default AdminNotifications;