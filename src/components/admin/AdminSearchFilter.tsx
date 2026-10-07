import {
  Search,
  SlidersHorizontal,
} from "lucide-react";


interface AdminSearchFilterProps {

  searchTerm:string;

  setSearchTerm:(value:string)=>void;

  typeFilter:string;

  setTypeFilter:(value:string)=>void;

  statusFilter:string;

  setStatusFilter:(value:string)=>void;

}



function AdminSearchFilter({

  searchTerm,

  setSearchTerm,

  typeFilter,

  setTypeFilter,

  statusFilter,

  setStatusFilter,

}:AdminSearchFilterProps) {



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
      "
      >

        <SlidersHorizontal
          className="text-cyan-400"
          size={24}
        />


        <h2
          className="
          text-xl
          font-semibold
          text-white
          "
        >

          Search & Filters

        </h2>


      </div>





      {/* Search Box */}


      <div
        className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        px-4
        "

      >

        <Search
          size={20}
          className="text-slate-400"
        />


        <input

          value={searchTerm}

          onChange={(e)=>
            setSearchTerm(e.target.value)
          }

          placeholder="Search item name..."

          className="
          w-full
          bg-transparent
          py-3
          text-white
          outline-none
          placeholder:text-slate-500
          "

        />


      </div>







      {/* Filters */}


      <div
        className="
        mt-5
        grid
        gap-4
        md:grid-cols-2
        "

      >




        {/* Type Filter */}


        <div>


          <label
            className="
            mb-2
            block
            text-sm
            text-slate-400
            "
          >

            Report Type

          </label>



          <select

            value={typeFilter}

            onChange={(e)=>
              setTypeFilter(e.target.value)
            }


            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-slate-900
            px-4
            py-3
            text-white
            outline-none
            "

          >


            <option value="all">
              All
            </option>


            <option value="Lost">
              Lost
            </option>


            <option value="Found">
              Found
            </option>


          </select>


        </div>







        {/* Status Filter */}


        <div>


          <label
            className="
            mb-2
            block
            text-sm
            text-slate-400
            "
          >

            Status

          </label>



          <select


            value={statusFilter}


            onChange={(e)=>
              setStatusFilter(e.target.value)
            }


            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-slate-900
            px-4
            py-3
            text-white
            outline-none
            "

          >



            <option value="all">
              All
            </option>


            <option value="pending">
              Pending
            </option>


            <option value="approved">
              Approved
            </option>


            <option value="rejected">
              Rejected
            </option>


          </select>


        </div>




      </div>



    </section>

  );

}



export default AdminSearchFilter;