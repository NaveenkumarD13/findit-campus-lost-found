import { forwardRef, useState } from "react";

import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      id,
      label,
      placeholder,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div>
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          {label}
        </label>

        <div
          className={`flex items-center rounded-2xl border bg-slate-900/70 px-4 transition duration-300
          ${
            error
              ? "border-red-400 focus-within:ring-red-500/20"
              : "border-white/10 focus-within:border-cyan-400 focus-within:ring-cyan-500/20"
          }
          focus-within:ring-2`}
        >
          <Lock
            size={20}
            className="text-slate-400"
          />

          <input
            ref={ref}
            id={id}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            autoComplete="current-password"
            className="w-full bg-transparent px-3 py-4 text-white placeholder:text-slate-500 focus:outline-none"
            {...props}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="text-slate-400 transition hover:text-cyan-400"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;