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
  reportLostSchema,
  type ReportLostFormData,
} from "@/features/auth/schema/reportLostSchema";


interface LostItemFormProps {
  onSubmit: (data: ReportLostFormData) => void;
}


function LostItemForm({
  onSubmit,
}: LostItemFormProps) {


  const [preview, setPreview] = useState<string | null>(null);


  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors,
    },
  } = useForm<ReportLostFormData>({

    resolver:zodResolver(reportLostSchema),

    defaultValues:{
      itemName:"",
      category:"",
      description:"",
      location:"",
      lostDate:"",
      contact:"",
      ownerName:"",
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
  data: ReportLostFormData
) => {


  const existingReports =
    JSON.parse(
      localStorage.getItem("lostReports") || "[]"
    );



  const newReport = {

    id: Date.now(),

    ...data,

    type: "lost",

    status: "pending",

    createdAt:
      new Date().toISOString(),

  };



  localStorage.setItem(

    "lostReports",

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


      <Input
        label="Item Name"
        icon={<FileText size={18}/>}
        error={errors.itemName?.message}
      >

        <input
          {...register("itemName")}
          placeholder="Eg. Blue Dell Laptop"
          className="field"
        />

      </Input>



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
          label="Lost Location"
          icon={<MapPin size={18}/>}
          error={errors.location?.message}
        >

          <input
            {...register("location")}
            placeholder="Eg. College Campus"
            className="field"
          />

        </Input>


      </div>




      <div className="grid md:grid-cols-2 gap-5">


        <Input
          label="Date Lost"
          icon={<CalendarDays size={18}/>}
          error={errors.lostDate?.message}
        >

          <input
            type="date"
            {...register("lostDate")}
            className="field"
          />

        </Input>



        <Input
          label="Contact Number"
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





      <Input
        label="Owner Name"
        icon={<User size={18}/>}
        error={errors.ownerName?.message}
      >

        <input
          {...register("ownerName")}
          placeholder="Your name"
          className="field"
        />

      </Input>






      <div>

        <label className="mb-2 flex items-center gap-2 font-semibold">

          <ImagePlus size={18}/>
          Item Image

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
          "
        >


        {
          preview ? (

            <img
              src={preview}
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
                className="text-indigo-500"
              />

              <p className="mt-3 text-gray-500">
                Upload item photo
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






      <Input
        label="Description & Identifiers"
        icon={<FileText size={18}/>}
        error={errors.description?.message}
      >

        <textarea
          {...register("description")}
          rows={4}
          placeholder="Mention colour, brand, unique marks..."
          className="field resize-none"
        />

      </Input>





      <button
        className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-indigo-600
        to-purple-600
        py-3
        font-semibold
        text-white
        "
      >

        🔍 Report Lost Item

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

<label className="mb-2 flex items-center gap-2 font-semibold text-slate-800">

{icon}

{label}

</label>


{children}


{
error && (

<p className="mt-1 text-sm text-red-500">
{error}
</p>

)

}


</div>

);


}


export default LostItemForm;