import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center mt-20">
			<h1 className="text-3xl">Nuevo titulo</h1>

			<Button>
				<Link href={"/registro"}>Registro</Link>
			</Button>
		</main>
	);
}
