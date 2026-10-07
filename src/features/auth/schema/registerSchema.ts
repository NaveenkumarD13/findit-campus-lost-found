import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, "Full name is required.")
      .min(3, "Full name must be at least 3 characters.")
      .max(50, "Full name cannot exceed 50 characters."),

    email: z
      .string()
      .trim()
      .min(1, "Email address is required.")
      .email("Please enter a valid email address."),

    password: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .max(50, "Password cannot exceed 50 characters."),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password."),

    role: z.enum(["student", "admin"], {
      error: "Please select your role.",
    }),

    terms: z.boolean().refine(
      (value) => value === true,
      {
        message:
          "You must accept the Terms & Conditions.",
      }
    ),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    }
  );

export type RegisterFormData =
  z.infer<typeof registerSchema>;