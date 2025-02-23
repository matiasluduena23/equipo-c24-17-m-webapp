"use server";

import { createServerAction } from "zsa";
import { registroSchema } from "@/lib/schema";

export const registroUsuarioAction = createServerAction()
	.input(registroSchema)
	.handler(async ({ input }) => {
		// Llega al server validado.
		// Listo para enviar a la base de datos.
		console.log({ input });
	});
