import Head from "next/head";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<Head>
				<title>Best Ecommerce shop in 2023</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
        <h1>Hello next</h1>
		<Link href={'/about'}>About</Link>
      </main>
		</>
	);
}
