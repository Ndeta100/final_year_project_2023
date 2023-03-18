import { ProductSyle } from "@/styles/ProductStyle"
import Link from "next/link";
export default function Product({product}){
    //Extract the infos from props
    const {title, price, image, slug}=product.attributes
    return(
        <ProductSyle>
            <Link href={`/product/${slug}`}>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            </Link>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </ProductSyle>
    )
}