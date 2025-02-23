"use client";
import { registroSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userFormDefault } from "@/lib/defaulvalues";
import { registroUsuarioAction } from "./action";

export default function UserForm() {
	// 1. Definimos el formulario
	const form = useForm<z.infer<typeof registroSchema>>({
		resolver: zodResolver(registroSchema),
		defaultValues: userFormDefault,
	});

	// 2. Definimos un onSubmit handler.
	async function onSubmit(values: z.infer<typeof registroSchema>) {
		// ✅ Datos validados
		// console.log(values);

		values.apellido = "";
		//server
		const [data, err] = await registroUsuarioAction(values);

		if (err) {
			if (err.fieldErrors) {
				//Error en los campos - error esperado
				Object.entries(err.fieldErrors).forEach(([field, mensaje]) =>
					form.setError(
						field as "nombre" | "apellido" | "email" | `root.${string}`,
						{ message: mensaje[0] }
					)
				);
			} else {
				//Error en el server - error inesperado
			}
			return;
		}

		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="nombre"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre</FormLabel>
							<FormControl>
								<Input
									placeholder="Juan"
									{...field}
									className="border-blue-500 bg-red-200"
									onKeyDown={(e) =>
										!/[0-9]|Backspace/.exec(e.key) ? e.preventDefault() : e
									}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="apellido"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Apellido</FormLabel>
							<FormControl>
								<Input placeholder="Perez" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo</FormLabel>
							<FormControl>
								<Input placeholder="jperez@gmail.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Registrar</Button>
			</form>
		</Form>
	);
}
