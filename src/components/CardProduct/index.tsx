import React, { useState } from "react";
import ModalQuantity from "../ModalQuantity";
import { AddToCartBtn, BoxInform, Container, ProductQuantity } from "./styled";
import { Toaster, toast } from "sonner";

interface Product {
  photoUrl: string;
  name: string;
  id: string;
  quantity: number;
  description: string;
  price: number;
}

type ProductProps = {
  product: Product;
  restaurant: React.ReactNode; // Update this type according to your code
};

const CardProduct = React.memo(({ product, restaurant }: ProductProps) => {
  const [showModal, setShowModal] = useState(false);

  const BuyProduct = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <img src={product.photoUrl} />
      <BoxInform>
        <div>
          <h3>{product.name}</h3>
        </div>
        <p>{product.description}</p>

        <ProductQuantity>
          <span>
            R$ {product.price.toFixed(2).toString().replace(".", ",")}
          </span>

          <AddToCartBtn onClick={BuyProduct}>Comprar</AddToCartBtn>

          <Toaster position="top-center" />
        </ProductQuantity>
      </BoxInform>

      <ModalQuantity open={showModal} setOpen={setShowModal} />
    </Container>
  );
});

export default CardProduct;
