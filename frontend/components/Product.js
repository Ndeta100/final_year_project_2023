export default function Product({product}){
    //Extract the infos from props
    const {title, price, image}=product.attributes
    return(
        <div>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{title}</h2>
            <h2>{price}</h2>
        </div>
    )
}