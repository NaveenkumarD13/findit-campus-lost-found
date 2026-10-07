import {
  FilePlus2,
  Search,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";


function QuickActions() {


  const actions = [

    {
      title:"Report Lost Item",
      description:
        "Submit details about an item you lost.",
      icon:FilePlus2,
      link:"/report-lost",
      color:"text-blue-400",
      glow:"group-hover:shadow-blue-500/20",
    },


    {
      title:"Report Found Item",
      description:
        "Help someone recover their belongings.",
      icon:Search,
      link:"/report-found",
      color:"text-green-400",
      glow:"group-hover:shadow-green-500/20",
    },


    {
      title:"My Reports",
      description:
        "View and track your submitted reports.",
      icon:ClipboardList,
      link:"/my-reports",
      color:"text-purple-400",
      glow:"group-hover:shadow-purple-500/20",
    },


  ];





  return (

    <section>


      <h2 className="mb-4 text-xl font-semibold text-white">

        Quick Actions

      </h2>




      <div className="grid gap-5 md:grid-cols-3">


        {
          actions.map((action)=>{


            const Icon = action.icon;



            return (

              <Link

                key={action.title}

                to={action.link}

                className={`
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                  hover:shadow-xl
                  ${action.glow}
                `}

              >


                <div className="
                  flex
                  items-center
                  justify-between
                ">


                  <Icon

                    size={32}

                    className={action.color}

                  />



                  <ArrowRight

                    size={20}

                    className="
                    text-slate-500
                    transition
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                    "

                  />


                </div>





                <h3 className="
                  mt-5
                  text-lg
                  font-semibold
                  text-white
                ">

                  {action.title}

                </h3>




                <p className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-400
                ">

                  {action.description}

                </p>




              </Link>


            );


          })
        }


      </div>


    </section>

  );

}



export default QuickActions;