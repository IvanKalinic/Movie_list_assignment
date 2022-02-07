import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Adresa e-pošte je obvezna")
    .email("Adresa e-pošte nije valjana"),
  password: z.string().min(5, "Lozinka mora sadržavati najmanje 5 znakova"),
});
