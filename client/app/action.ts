"use server";

import { Wheater } from "./page";

export async function getWeather() {
	try {
		const res = await fetch("http://localhost:5014/weatherforecast");
		const data = (await res.json()) as Wheater[];

		if (!data) {
			return [];
		}

		return data;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
}
