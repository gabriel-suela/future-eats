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
import { Toaster, toast } from "sonner";

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

  const BuyProduct = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <img src={product.photoUrl} />
      <BoxInform>
        <div>
          <h3>{product.name}</h3>
          {productInCart && <Quantity>{productInCart.quantity}</Quantity>}
        </div>
        <p>{product.description}</p>

        <ProductQuantity>
          <h4>R$ {product.price.toFixed(2).toString().replace(".", ",")}</h4>
          {productInCart ? (
            <RemoveButton onClick={() => removeToCart(product.id)}>
              Remover
            </RemoveButton>
          ) : (
            <>
              <Toaster />
              <AddToCartBtn onClick={BuyProduct}>Comprar</AddToCartBtn>
            </>
          )}
        </ProductQuantity>
      </BoxInform>

      <ModalQuantity
        choiceQuantity={choiceQuantity}
        open={showModal}
        setOpen={setShowModal}
      />
    </Container>
  );
};

export default CardProduct;
