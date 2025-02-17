"use server";

import { Wheater } from "./page";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL);
export async function getWeather() {
	try {
		const res = await fetch(`${API_URL}weatherforecast`);
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
