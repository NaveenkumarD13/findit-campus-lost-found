import { z } from "zod";

export const reportLostSchema = z.object({

  itemName: z
    .string()
    .min(3, "Item name must be at least 3 characters"),

  category: z
    .string()
    .min(1, "Please select a category"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  location: z
    .string()
    .min(3, "Location is required"),

  lostDate: z
    .string()
    .min(1, "Lost date is required"),

  contact: z
    .string()
    .min(10, "Enter valid contact number"),

  ownerName: z
    .string()
    .min(2, "Owner name is required"),

  image: z
    .any()
    .optional(),

});


export type ReportLostFormData = z.infer<
  typeof reportLostSchema
>;