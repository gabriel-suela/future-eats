import React from "react";
import ModalQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  Container,
  ProductQuantity,
} from "./styled";
import { useState } from "react";

const CardProduct = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <img src={product.photoUrl} />
      <BoxInform>
        <h3>{product.name}</h3>
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
    </Container>
  );
};

export default CardProduct;
