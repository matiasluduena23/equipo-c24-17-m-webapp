import { Button } from "@/components/ui/button";

type Wheater = {
	date: Date;
	temperatureC: number;
	summary: string;
	temperatureF: number;
};

export default async function Home() {
	const res = await fetch("http://localhost:5014/weatherforecast");
	const data = (await res.json()) as Wheater[];
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center mt-20">
			<h1 className="text-3xl">No Country Proyecto</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>{item.summary}</li>
				))}
			</ul>
			<Button>Iniciar Sesion</Button>
		</main>
	);
}
