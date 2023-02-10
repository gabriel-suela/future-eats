import React from "react";
import { BoxInform, ContainerCardProduct, ProductImage, ProductName, ProductQuantity } from "./styled";

const CardProduct = (products) => {
    return (
        <ContainerCardProduct>
            <ProductImage src={products.photoUrl}/>
            <BoxInform>
                <ProductName>{products.name}</ProductName>
                <ProductQuantity>{products.price}</ProductQuantity>
            </BoxInform>
        </ContainerCardProduct>
    )
}

export default CardProduct