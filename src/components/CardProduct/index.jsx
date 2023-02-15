import React from "react";
import {
  BoxInform,
  ContainerCardProduct,
  ProductImage,
  ProductName,
  ProductQuantity,
} from "./styled";

const CardProduct = ({ product }) => {
  return (
    <ContainerCardProduct>
      <ProductImage src={product.photoUrl} />
      <BoxInform>
        <ProductName>{product.name}</ProductName>
        <p>{product.description}</p>
        <ProductQuantity>
          <h4>R${product.price}</h4>
          <button>Comprar</button>
        </ProductQuantity>
      </BoxInform>
    </ContainerCardProduct>
  );
};

export default CardProduct;
