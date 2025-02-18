import React from "react";
import UserForm from "./user-form";

export default function page() {
	return (
		<div className="mt-20">
			<h1 className="text-center text-3xl my-12">Registro de usuario.</h1>
			<div className="max-w-lg mx-auto">
				<UserForm />
			</div>
		</div>
	);
}
