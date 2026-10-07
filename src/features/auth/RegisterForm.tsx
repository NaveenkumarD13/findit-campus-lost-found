import { motion } from "framer-motion";
import {
  ArrowRight,
  LoaderCircle,
  Mail,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import PasswordInput from "./PasswordInput";
import {
  registerSchema,
  type RegisterFormData,
} from "./schema/registerSchema";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });
  const selectedRole = watch("role");
  const navigate = useNavigate();
  const { refreshUsers } = useAuth();


  const onSubmit = async (
  data: RegisterFormData
) => {
  try {
    console.log("User Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Role:", data.role);

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    const users: RegisterFormData[] = JSON.parse(
      localStorage.getItem("findit-users") || "[]"
    );

    const alreadyExists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        data.email.toLowerCase()
    );

    if (alreadyExists) {
      toast.error(
        "Email already registered. Please login."
      );
      return;
    }

    users.push(data);

    localStorage.setItem(
      "findit-users",
      JSON.stringify(users)
    );

    // Refresh users in AuthContext
    refreshUsers();

    toast.success(
      "Registration successful! Please login."
    );

    navigate("/login", {
      replace: true,
    });

  } catch {
    toast.error(
      "Something went wrong. Please try again."
    );
  }
};
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="space-y-6"
    >
      {/* Full Name */}

      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Full Name
        </label>

        <div
          className={`flex items-center rounded-2xl border bg-slate-900/70 px-4 transition duration-300
          ${
            errors.fullName
              ? "border-red-400 focus-within:ring-red-500/20"
              : "border-white/10 focus-within:border-cyan-400 focus-within:ring-cyan-500/20"
          }
          focus-within:ring-2`}
        >
          <User
            size={20}
            className="text-slate-400"
          />

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            className="w-full bg-transparent px-3 py-4 text-white placeholder:text-slate-500 focus:outline-none"
            {...register("fullName")}
          />
        </div>

        {errors.fullName && (
          <p className="mt-2 text-sm text-red-400">
            {errors.fullName.message}
          </p>
        )}
      </div>

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
              ? "border-red-400 focus-within:ring-red-500/20"
              : "border-white/10 focus-within:border-cyan-400 focus-within:ring-cyan-500/20"
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

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <PasswordInput
        id="password"
        label="Password"
        placeholder="Create a password"
        autoComplete="new-password"
        {...register("password")}
        error={errors.password?.message}
      />

      {/* Confirm Password */}

      <PasswordInput
        id="confirmPassword"
        label="Confirm Password"
        placeholder="Re-enter your password"
        autoComplete="new-password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
     {/* Role */}

<div>
  <label className="mb-3 block text-sm font-medium text-slate-300">
    Select Your Role
  </label>

  <div className="grid grid-cols-2 gap-4">

    {/* Student */}

    <label
      className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300
      ${
        selectedRole === "student"
          ? "border-cyan-400 bg-cyan-500/10 ring-2 ring-cyan-400"
          : errors.role
          ? "border-red-400"
          : "border-white/10 hover:border-cyan-400 hover:bg-cyan-500/5"
      }`}
    >
      <input
        type="radio"
        value="student"
        className="hidden"
        {...register("role")}
      />

      <div className="space-y-2">
        <h3 className="font-semibold text-white">
          🎓 Student
        </h3>

        <p className="text-xs leading-5 text-slate-400">
          Report lost items and claim your belongings.
        </p>
      </div>
    </label>

    {/* Admin */}

    <label
      className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300
      ${
        selectedRole === "admin"
          ? "border-cyan-400 bg-cyan-500/10 ring-2 ring-cyan-400"
          : errors.role
          ? "border-red-400"
          : "border-white/10 hover:border-cyan-400 hover:bg-cyan-500/5"
      }`}
    >
      <input
        type="radio"
        value="admin"
        className="hidden"
        {...register("role")}
      />

      <div className="space-y-2">
        <h3 className="font-semibold text-white">
          🛡️ Admin
        </h3>

        <p className="text-xs leading-5 text-slate-400">
          Manage reports and monitor the system.
        </p>
      </div>
    </label>

  </div>

  {errors.role && (
    <p className="mt-2 text-sm text-red-400">
      {errors.role.message}
    </p>
  )}
</div>

      {/* Terms & Conditions */}

      <div>
        <label
          htmlFor="terms"
          className="flex cursor-pointer items-start gap-3 text-sm text-slate-400"
        >
          <input
            id="terms"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-600 accent-cyan-500"
            {...register("terms")}
          />

          <span>
            I agree to the{" "}
            <span className="font-medium text-cyan-400">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="font-medium text-cyan-400">
              Privacy Policy
            </span>
            .
          </span>
        </label>

        {errors.terms && (
          <p className="mt-2 text-sm text-red-400">
            {errors.terms.message}
          </p>
        )}
      </div>

      {/* Create Account Button */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
            />
            Creating Account...
          </>
        ) : (
          <>
            Create Account

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
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
        onClick={() =>
          toast.info("Guest mode coming soon!")
        }
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-medium text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
      >
        Explore as Guest
      </button>

      {/* Security Note */}

      <p className="text-center text-xs leading-6 text-slate-500">
        🔒 Your registration information is securely validated and protected.
      </p>

      {/* Login Redirect */}

      <p className="text-center text-sm text-slate-400">
        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Sign In
        </Link>
      </p>
    </motion.form>
  );
}

export default RegisterForm;