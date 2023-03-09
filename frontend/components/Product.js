import { ProductSyle } from "@/styles/ProductStyle"
export default function Product({product}){
    //Extract the infos from props
    const {title, price, image}=product.attributes
    return(
        <ProductSyle>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </ProductSyle>
    )
}