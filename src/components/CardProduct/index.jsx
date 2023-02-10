import React from "react";
import { BoxInform, ContainerCardProduct, ProductImage, ProductName, ProductQuantity } from "./styled";

const CardProduct = ({product}) => {
    return (
        <ContainerCardProduct>
            <ProductImage src={product.photoUrl}/>
            <BoxInform>
                <ProductName>{product.name}</ProductName>
                <ProductQuantity>R${product.price}</ProductQuantity>
            </BoxInform>
        </ContainerCardProduct>
    )
}

export default CardProduct