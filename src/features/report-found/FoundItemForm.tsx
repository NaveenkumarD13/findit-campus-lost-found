import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CalendarDays,
  FileText,
  ImagePlus,
  MapPin,
  Phone,
  Tag,
  Upload,
  User,
} from "lucide-react";

import {
  reportFoundSchema,
  type ReportFoundFormData,
} from "@/features/auth/schema/reportFoundSchema";


interface FoundItemFormProps {
  onSubmit: (data: ReportFoundFormData) => void;
}


function FoundItemForm({
  onSubmit,
}: FoundItemFormProps) {


  const [preview, setPreview] = useState<string | null>(null);



  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors,
    },
  } = useForm<ReportFoundFormData>({

    resolver:zodResolver(reportFoundSchema),

    defaultValues:{
      itemName:"",
      category:"",
      description:"",
      foundLocation:"",
      foundDate:"",
      finderName:"",
      contact:"",
    }

  });




  const handleImage = (
    e:React.ChangeEvent<HTMLInputElement>
  )=>{


    const file=e.target.files?.[0];


    if(file){

      setPreview(
        URL.createObjectURL(file)
      );

    }


  };





 const submitHandler = (
  data: ReportFoundFormData
) => {


  const existingReports =
    JSON.parse(
      localStorage.getItem("foundReports") || "[]"
    );



  const newReport = {

    id: Date.now(),

    ...data,

    type: "found",

    status: "pending",

    createdAt:
      new Date().toISOString(),

  };



  localStorage.setItem(

    "foundReports",

    JSON.stringify([
      ...existingReports,
      newReport
    ])

  );



  // Notify dashboard about new report
  window.dispatchEvent(
    new Event("reportsUpdated")
  );



  onSubmit(data);



  reset();

  setPreview(null);


};

  return (

    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
    >





      {/* Item Name */}

      <Input

        label="Item Name"

        icon={<FileText size={18}/>}

        error={errors.itemName?.message}

      >


        <input

          {...register("itemName")}

          placeholder="Eg. Black Wallet / Samsung Phone"

          className="field"

        />


      </Input>







      {/* Category + Location */}


      <div className="grid md:grid-cols-2 gap-5">


        <Input

          label="Category"

          icon={<Tag size={18}/>}

          error={errors.category?.message}

        >


          <select

            {...register("category")}

            className="field"

          >


            <option value="">
              Select Category
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


        </Input>







        <Input

          label="Found Location"

          icon={<MapPin size={18}/>}

          error={errors.foundLocation?.message}

        >


          <input

            {...register("foundLocation")}

            placeholder="Eg. Bus Stop / College Campus"

            className="field"

          />


        </Input>


      </div>









      {/* Date + Contact */}



      <div className="grid md:grid-cols-2 gap-5">



        <Input

          label="Date Found"

          icon={<CalendarDays size={18}/>}

          error={errors.foundDate?.message}

        >


          <input

            type="date"

            {...register("foundDate")}

            className="field"

          />


        </Input>







        <Input

          label="Contact Phone"

          icon={<Phone size={18}/>}

          error={errors.contact?.message}

        >


          <input

            {...register("contact")}

            placeholder="+91 9876543210"

            className="field"

          />


        </Input>


      </div>









      {/* Finder Name */}



      <Input

        label="Finder Name"

        icon={<User size={18}/>}

        error={errors.finderName?.message}

      >


        <input

          {...register("finderName")}

          placeholder="Your full name"

          className="field"

        />


      </Input>









      {/* Image Upload */}



      <div>


        <label
          className="
          mb-2
          flex
          items-center
          gap-2
          font-semibold
          text-slate-800
          "
        >

          <ImagePlus size={18}/>

          Found Item Image

        </label>





        <label

          className="
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-gray-300
          p-6
          hover:border-indigo-500
          transition
          "

        >




        {
          preview ? (


            <img

              src={preview}

              alt="preview"

              className="
              h-40
              rounded-xl
              object-cover
              "

            />


          )

          :

          (


            <>


              <Upload

                size={35}

                className="text-green-500"

              />


              <p className="mt-3 text-gray-600">

                Upload found item photo

              </p>


            </>


          )


        }






        <input

          type="file"

          accept="image/*"

          {...register("image")}

          onChange={handleImage}

          className="hidden"

        />



        </label>


      </div>









      {/* Description */}



      <Input

        label="Description & Identifiers"

        icon={<FileText size={18}/>}

        error={errors.description?.message}

      >


        <textarea

          {...register("description")}

          rows={4}

          placeholder="Mention colour, brand, condition, unique marks..."

          className="field resize-none"

        />


      </Input>









      <button

        type="submit"

        className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-green-600
        to-emerald-500
        py-3
        font-semibold
        text-white
        hover:opacity-90
        transition
        "

      >


        ✅ Report Found Item


      </button>





    </form>


  );

}








function Input({

  label,

  icon,

  children,

  error,

}:{

  label:string;

  icon:React.ReactNode;

  children:React.ReactNode;

  error?:string;

}){


return (

<div>


<label

className="
mb-2
flex
items-center
gap-2
font-semibold
text-slate-800
"

>


{icon}

{label}


</label>



{children}




{

error && (


<p className="
mt-1
text-sm
text-red-500
">

{error}

</p>


)


}



</div>


);


}





export default FoundItemForm;