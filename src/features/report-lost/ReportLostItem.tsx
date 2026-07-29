import { motion } from "framer-motion";
import { toast } from "sonner";

import LostItemForm from "./LostItemForm";


function ReportLostItem() {

  return (

    <motion.div
      className="
      mx-auto
      max-w-4xl
      rounded-3xl
      bg-white
      p-8
      shadow-xl
      "
    >

      <h1 className="text-3xl font-bold text-center">
        Report a Lost Item
      </h1>


      <LostItemForm

        onSubmit={(data)=>{

          console.log(data);

          toast.success(
            "Lost item report submitted successfully!"
          );

        }}

      />


    </motion.div>

  );

}


export default ReportLostItem;