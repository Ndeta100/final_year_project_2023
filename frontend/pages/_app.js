import "@/styles/globals.css";
import { Provider, createClient } from "urql";
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
export default function App({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<Component {...pageProps} />
		</Provider>
	);
}
