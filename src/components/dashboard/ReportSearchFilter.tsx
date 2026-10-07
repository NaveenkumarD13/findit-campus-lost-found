import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  MapPin,
} from "lucide-react";



type Report = {

  id:number;

  itemName:string;

  category:string;

  location?:string;

  foundLocation?:string;

  status:string;

  type:"lost" | "found";

  createdAt:string;

};




function ReportSearchFilter() {


  const [reports,setReports] =
    useState<Report[]>([]);


  const [search,setSearch] =
    useState("");

  const [type,setType] =
    useState("all");


  const [category,setCategory] =
    useState("all");


  const [location,setLocation] =
    useState("");


  const [sort,setSort] =
    useState("latest");






  const loadReports = ()=>{


    const lostReports =
      JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );


    const foundReports =
      JSON.parse(
        localStorage.getItem("foundReports") || "[]"
      );



    const combined = [

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



    setReports(combined);


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







  const filteredReports = reports

    .filter((report)=>{


      const matchesSearch =
        report.itemName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );


      const matchesType =
        type==="all"
        ||
        report.type===type;



      const matchesCategory =
        category==="all"
        ||
        report.category===category;



      const matchesLocation =
        location===""
        ||
        report.location
        ?.toLowerCase()
        .includes(
          location.toLowerCase()
        );



      return (
        matchesSearch &&
        matchesType &&
        matchesCategory &&
        matchesLocation
      );


    })


    .sort((a,b)=>{


      if(sort==="latest"){

        return (
          new Date(b.createdAt).getTime()
          -
          new Date(a.createdAt).getTime()
        );

      }


      return (
        new Date(a.createdAt).getTime()
        -
        new Date(b.createdAt).getTime()
      );


    });







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
        mb-5
      ">

        <Filter
          size={22}
          className="text-cyan-400"
        />


        <h2 className="
          text-xl
          font-semibold
          text-white
        ">

          Browse Reports

        </h2>


      </div>





      {/* Search */}


      <div className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-black/20
        px-4
      ">


        <Search
          size={20}
          className="text-slate-400"
        />


        <input

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }

          placeholder="Search item..."

          className="
          w-full
          bg-transparent
          py-3
          text-white
          outline-none
          "

        />


      </div>







      {/* Filters */}


      <div className="
        mt-5
        grid
        gap-4
        md:grid-cols-4
      ">


        <select

          value={type}

          onChange={(e)=>
            setType(e.target.value)
          }

          className="field"

        >

          <option value="all">
            All Types
          </option>


          <option value="lost">
            Lost
          </option>


          <option value="found">
            Found
          </option>


        </select>





        <select

          value={category}

          onChange={(e)=>
            setCategory(e.target.value)
          }

          className="field"

        >

          <option value="all">
            All Categories
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="documents">
            Documents
          </option>

          <option value="accessories">
            Accessories
          </option>

          <option value="others">
            Others
          </option>


        </select>






        <input

          value={location}

          onChange={(e)=>
            setLocation(e.target.value)
          }

          placeholder="Location"

          className="field"

        />





        <select

          value={sort}

          onChange={(e)=>
            setSort(e.target.value)
          }

          className="field"

        >

          <option value="latest">
            Latest
          </option>


          <option value="oldest">
            Oldest
          </option>


        </select>



      </div>







      {/* Results */}


      <div className="
        mt-6
        space-y-4
      ">


        {
          filteredReports.length===0 ?


          (

            <p className="
              text-sm
              text-slate-400
            ">

              No matching reports found.

            </p>

          )


          :

          filteredReports.map((report)=>(


            <div

              key={report.id}

              className="
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-5
              "

            >


              <div className="
                flex
                justify-between
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
                    text-sm
                    text-slate-400
                  ">

                    {report.category}

                  </p>


                </div>





                <span className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  ${
                    report.type==="lost"
                    ?
                    "bg-red-500/20 text-red-300"
                    :
                    "bg-green-500/20 text-green-300"
                  }
                `}>

                  {report.type}

                </span>


              </div>





              <p className="
                mt-3
                flex
                items-center
                gap-2
                text-sm
                text-slate-400
              ">

                <MapPin size={16}/>

                {report.location || "Unknown"}

              </p>


            </div>


          ))

        }


      </div>


    </section>

  );

}



export default ReportSearchFilter;