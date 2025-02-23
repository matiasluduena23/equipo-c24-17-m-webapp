"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function AddEvent() {
	const handleClick = async () => {
		const res = await fetch("/api/calendar", {
			method: "POST",
			body: JSON.stringify({ fecha: "12/23/23" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		console.warn({ data });
	};
	return (
		<div>
			<Button onClick={handleClick}>Agregar evento</Button>
		</div>
	);
}
