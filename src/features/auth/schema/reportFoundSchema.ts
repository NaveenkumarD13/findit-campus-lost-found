import { z } from "zod";


export const reportFoundSchema = z.object({

  itemName: z
    .string()
    .min(3, "Item name is required"),

  category: z
    .string()
    .min(1, "Select category"),

  description: z
    .string()
    .min(10, "Provide item details"),

  foundLocation: z
    .string()
    .min(3, "Found location is required"),

  foundDate: z
    .string()
    .min(1, "Found date is required"),

  finderName: z
    .string()
    .min(2, "Finder name is required"),

  contact: z
    .string()
    .min(10, "Enter valid contact number"),

  image: z.any().optional(),

});


export type ReportFoundFormData =
  z.infer<typeof reportFoundSchema>;