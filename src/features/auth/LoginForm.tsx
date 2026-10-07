import { motion } from "framer-motion";
import {
  ArrowRight,
  LoaderCircle,
  Mail,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import PasswordInput from "./PasswordInput";

import {
  loginSchema,
  type LoginFormData,
} from "./schema/loginSchema";


function LoginForm() {


  const {
    register,
    handleSubmit,

    formState: {
      errors,
      isSubmitting,
    },

  } = useForm<LoginFormData>({

    resolver: zodResolver(loginSchema),

    defaultValues:{
      email:"",
      password:"",
    },

  });



  const navigate = useNavigate();


  const {
    login,
  } = useAuth();





  const onSubmit = async (
    data: LoginFormData
  ) => {


    try {


      const users = JSON.parse(
        localStorage.getItem("findit-users") || "[]"
      );



      const user = users.find(
        (u:any) =>

          u.email.toLowerCase() ===
          data.email.toLowerCase()

          &&

          u.password === data.password

      );





      if(!user){


        toast.error(
          "Invalid email or password."
        );

        return;

      }





      await new Promise((resolve)=>
        setTimeout(resolve,1200)
      );





      login({

        fullName:user.fullName,

        email:user.email,

        role:user.role,

      });





      toast.success(
        "Login successful! ✅"
      );





      if(user.role === "admin"){


        navigate("/admin",{

          replace:true,

        });


      }

      else{


        navigate("/dashboard",{

          replace:true,

        });


      }





    }

    catch{


      toast.error(
        "Something went wrong. Please try again."
      );


    }


  };






  return (


    <motion.form

      onSubmit={
        handleSubmit(onSubmit)
      }

      initial={{
        opacity:0,
        y:25,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.5,
      }}

      className="space-y-6"


    >




      {/* Email */}


      <div>


        <label

          htmlFor="email"

          className="mb-2 block text-sm font-medium text-slate-300"

        >

          Email Address


        </label>




        <div

          className={`flex items-center rounded-2xl border bg-slate-900/70 px-4 transition duration-300

          ${
            errors.email

            ?

            "border-red-400 focus-within:ring-red-500/20"

            :

            "border-white/10 focus-within:border-cyan-400 focus-within:ring-cyan-500/20"

          }

          focus-within:ring-2`}

        >



          <Mail

            size={20}

            className="text-slate-400"

          />




          <input

            id="email"

            type="email"

            autoComplete="email"

            placeholder="student@college.edu"

            className="w-full bg-transparent px-3 py-4 text-white placeholder:text-slate-500 focus:outline-none"

            {...register("email")}


          />


        </div>





        {
          errors.email && (

            <p className="mt-2 text-sm text-red-400">

              {errors.email.message}

            </p>

          )
        }



      </div>







      {/* Password */}



      <PasswordInput


        id="password"


        label="Password"


        placeholder="Enter your password"


        autoComplete="current-password"


        {...register("password")}


        error={
          errors.password?.message
        }


      />









      {/* Remember Me + Forgot Password */}



      <div className="flex items-center justify-between">



        <label

          htmlFor="remember"

          className="flex cursor-pointer items-center gap-2 text-sm text-slate-400"

        >


          <input

            id="remember"

            type="checkbox"

            className="h-4 w-4 rounded border-slate-600 accent-cyan-500"

          />


          Remember Me


        </label>





        <Link

          to="/forgot-password"

          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"

        >

          Forgot Password?


        </Link>



      </div>









      {/* Submit Button */}



      <button


        type="submit"


        disabled={isSubmitting}


        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"



      >



        {
          isSubmitting

          ?

          <>

            <LoaderCircle

              size={18}

              className="animate-spin"

            />

            Signing In...

          </>


          :


          <>


            Sign In


            <ArrowRight

              size={18}

              className="transition-transform duration-300 group-hover:translate-x-1"

            />


          </>

        }


      </button>









      {/* Divider */}



      <div className="flex items-center gap-4">


        <div className="h-px flex-1 bg-white/10" />


        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">


          Or Continue With


        </span>


        <div className="h-px flex-1 bg-white/10" />


      </div>









      {/* Guest Button */}



      <button


        type="button"


        onClick={()=>

          toast.info(
            "Guest mode coming soon!"
          )

        }


        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-medium text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"



      >

        Explore as Guest


      </button>









      {/* Security Note */}



      <p className="text-center text-xs leading-6 text-slate-500">


        🔒 Your login credentials are securely validated.


      </p>









      {/* Register */}



      <p className="text-center text-sm text-slate-400">


        New to FindIt?{" "}


        <Link

          to="/register"

          className="font-semibold text-cyan-400 transition hover:text-cyan-300"

        >

          Create an account


        </Link>



      </p>






    </motion.form>


  );

}



export default LoginForm;