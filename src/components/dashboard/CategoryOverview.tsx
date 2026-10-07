import { useEffect, useState } from "react";
import {
  Smartphone,
  FileText,
  Backpack,
  Package,
} from "lucide-react";



type CategoryCount = {
  name:string;
  count:number;
  icon:any;
  color:string;
};




function CategoryOverview() {


  const [categories,setCategories] =
    useState<CategoryCount[]>([]);





  const loadCategories = () => {


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



    const categoryMap:Record<string,number> = {};



    allReports.forEach((report:any)=>{


      const category =
        report.category || "others";


      categoryMap[category] =
        (categoryMap[category] || 0) + 1;


    });




    const categoryData = [


      {
        name:"Electronics",
        key:"electronics",
        icon:Smartphone,
        color:"text-cyan-400",
      },


      {
        name:"Documents",
        key:"documents",
        icon:FileText,
        color:"text-blue-400",
      },


      {
        name:"Accessories",
        key:"accessories",
        icon:Backpack,
        color:"text-purple-400",
      },


      {
        name:"Others",
        key:"others",
        icon:Package,
        color:"text-green-400",
      },


    ];




    setCategories(

      categoryData.map((category)=>({

        name:category.name,

        count:
          categoryMap[category.key] || 0,

        icon:category.icon,

        color:category.color,

      }))

    );


  };






  useEffect(()=>{


    loadCategories();



    window.addEventListener(
      "reportsUpdated",
      loadCategories
    );



    return()=>{

      window.removeEventListener(
        "reportsUpdated",
        loadCategories
      );

    };


  },[]);







  return (

    <section>


      <h2 className="
        mb-4
        text-xl
        font-semibold
        text-white
      ">

        Category Overview

      </h2>





      <div className="
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-4
      ">


        {
          categories.map((category)=>{


            const Icon = category.icon;



            return (

              <div

                key={category.name}

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

                  className={category.color}

                />



                <h3 className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                ">

                  {category.count}

                </h3>




                <p className="
                  mt-1
                  text-sm
                  text-slate-400
                ">

                  {category.name}

                </p>


              </div>


            );


          })
        }


      </div>


    </section>

  );

}



export default CategoryOverview;