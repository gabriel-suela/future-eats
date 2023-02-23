import React from "react";
import ModalQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  AddToCartBtn,
  BoxInform,
  Container,
  ProductQuantity,
  Quantity,
  RemoveButton,
} from "./styled";
import { useState } from "react";
import { useGlobal } from "../../context/GlobalContext";

const CardProduct = ({ product, restaurant }) => {
  const [showModal, setShowModal] = useState(false);
  const { requests, states } = useGlobal();
  const { addToCart, removeToCart } = requests;
  const { cart } = states;

  const choiceQuantity = (quantity) => {
    addToCart(product, quantity, restaurant);
    setShowModal(false);
  };

  const productInCart = cart.find(
    (productCart) => productCart.id === product.id
  );

  console.log(productInCart);
  return (
    <Container>
      <img src={product.photoUrl} />
      <BoxInform>
        <h3>{product.name}</h3>
        
        <p>{product.description}</p>
        <h4>R$ {product.price.toFixed(2).toString().replace(".", ",")}</h4>
        </BoxInform>
        {productInCart && <Quantity>{productInCart.quantity}</Quantity>}
        <ProductQuantity>
          {productInCart ? (
            <RemoveButton onClick={() => removeToCart(product.id)}>
              Remover
            </RemoveButton>
          ) : (
            <AddToCartBtn
              onClick={() => {
                setShowModal(true);
              }}
            >
              Comprar
            </AddToCartBtn>
          )}
        </ProductQuantity>
      
      <ModalQuantity
        choiceQuantity={choiceQuantity}
        open={showModal}
        setOpen={setShowModal}
      />
    </Container>
  );
};

export default CardProduct;
