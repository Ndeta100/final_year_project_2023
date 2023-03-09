import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/lib/query";
import { useRouter } from "next/router";
import { DetailsStyle,ProductInfo,Quantity, Buy } from "@/styles/ProductDetails";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"
export default function ProductDeatails() {
	//Fetch the slug
	const {query}=useRouter();

	//Fetch Graphql data
	const [results]=useQuery({
		query:GET_PRODUCT_QUERY,
		variables:{slug:query.slug}
	});
	const {data, fetching, error}=results
	//Checks for the data coming in
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	console.log(data);
	//extract our data
	const {title, description, image}=data.products.data[0].attributes;
	//Return
	return (
	
	<DetailsStyle>
	<img src={image.data.attributes.formats.medium.url} alt={title}/>
	<ProductInfo>
		
		<h3>{title}</h3>
		<p>{description}</p>
		
		<Quantity>
			<span>Quantity</span>
			<button><AiFillPlusCircle/></button>
			<p>0</p>
			<button><AiFillMinusCircle/></button>
		</Quantity>
		<Buy>Add to Cart</Buy>
		</ProductInfo>	
	</DetailsStyle>
	
	);
}
