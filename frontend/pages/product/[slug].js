import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/lib/query";
import { useRouter } from "next/router";
import { DetailsStyle,ProductInfo,Quantity, Buy } from "@/styles/ProductDetails";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"
import { useStateContext } from "@/lib/context";
export default function ProductDeatails() {
	//Use state
  const {qty,increaseQty, decreaseQty,cartItems, onAdd}=useStateContext()
 
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
			<button><AiFillMinusCircle onClick={decreaseQty}/></button>
			<p>{qty}</p>
			<button><AiFillPlusCircle onClick={increaseQty}/></button>
		</Quantity>
		<Buy onClick={()=>onAdd(data.products.data[0].attributes, qty)}>Add to Cart</Buy>
		</ProductInfo>	
	</DetailsStyle>
	
	);
}
