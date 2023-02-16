import React from "react";
import ModalQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  ContainerCardProduct,
  ProductImage,
  ProductName,
  ProductQuantity,
} from "./styled";
import { useState } from "react";

const CardProduct = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ContainerCardProduct>
      <ProductImage src={product.photoUrl} />
      <BoxInform>
        <ProductName>{product.name}</ProductName>
        <p>{product.description}</p>
        <ProductQuantity>
          <h4>R$ {product.price.toFixed(2).toString().replace(".", ",")}</h4>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Comprar
          </button>
        </ProductQuantity>
      </BoxInform>
      <ModalQuantity open={showModal} setOpen={setShowModal} />
    </ContainerCardProduct>
  );
};

export default CardProduct;
