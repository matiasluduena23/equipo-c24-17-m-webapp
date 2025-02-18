import { z } from "zod";

export const registroSchema = z.object({
	nombre: z.string().min(2, { message: "Debe ingresar un nombre." }),
	apellido: z.string().min(2, { message: "Debe ingresar un nombre." }),
	email: z.string().email({ message: "Debe ingresar un correo valido." }),
});
