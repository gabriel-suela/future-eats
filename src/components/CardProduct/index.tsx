import React, { useState } from "react";
import ModalQuantity from "../ModalQuantity";
import {
  AddToCartBtn,
  BoxInform,
  Container,
  ProductQuantity,
  Quantity,
  RemoveButton,
} from "./styled";
import { Toaster, toast } from "sonner";
import { useGlobal } from "../../context/GlobalContext";

type ProductProps = {
  product: any;
  restaurant: any;
};

const CardProduct = React.memo(({ product, restaurant }: ProductProps) => {
  const [showModal, setShowModal] = useState(false);
  const { requests, states } = useGlobal();
  const { addToCart, removeToCart } = requests;
  const { cart } = states;
  const BuyProduct = () => {
    setShowModal(true);
  };

  const choiceQuantity = (quantity: number) => {
    addToCart(product, quantity, restaurant);
  };

  const productInCart = cart?.find(
    (productCart) => productCart.id === product.id
  );

  const RemoveProduct = () => {
    removeToCart(product.id);
    toast.error("O item foi removido do carrinho");
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
          <span>
            R$ {product.price.toFixed(2).toString().replace(".", ",")}
          </span>
          {productInCart ? (
            <>
              <Toaster position="bottom-center" />
              <RemoveButton onClick={RemoveProduct}>Remover</RemoveButton>
            </>
          ) : (
            <>
              <Toaster position="bottom-center" />
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
});

export default CardProduct;
