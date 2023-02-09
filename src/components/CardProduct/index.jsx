import React from "react";
import { ContainerCardProduct, ProductImage } from "./styled";

const CardProduct = (products) => {
    return (
        <ContainerCardProduct>
            <p>{products.category}</p>
            <p>{products.name}</p>
            <p>{products.price}</p>
           
        </ContainerCardProduct>
    )
}

export default CardProduct