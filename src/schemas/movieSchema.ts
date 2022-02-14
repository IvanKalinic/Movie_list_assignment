import * as z from "zod";

export const movieSchema = z.object({
  title: z.string().min(1, "Movie title is required"),
  publishingYear: z.string().min(4, "Year must have 4 digits"),
});
