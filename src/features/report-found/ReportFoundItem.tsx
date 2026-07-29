import { motion } from "framer-motion";
import { toast } from "sonner";

import FoundItemForm from "./FoundItemForm";


function ReportFoundItem() {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      className="
      mx-auto
      max-w-4xl
      rounded-3xl
      bg-white
      p-8
      shadow-xl
      border
      border-gray-200
      "

    >


      <div className="text-center mb-8">


        <span
        className="
        inline-flex
        rounded-full
        bg-green-100
        px-4
        py-1
        text-sm
        font-semibold
        text-green-600
        "
        >
          ✅ Found Item Report
        </span>



        <h1
        className="
        mt-4
        text-3xl
        font-bold
        text-slate-900
        "
        >
          Report a Found Item
        </h1>



        <p className="mt-2 text-gray-500">
          Help the owner recover their lost item
        </p>


      </div>




      <FoundItemForm

        onSubmit={(data)=>{

          console.log(data);

          toast.success(
            "Found item reported successfully!"
          );

        }}

      />



    </motion.div>

  );

}


export default ReportFoundItem;