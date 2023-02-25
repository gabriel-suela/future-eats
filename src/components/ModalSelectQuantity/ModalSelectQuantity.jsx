import * as React from "react";
import Modal from "@mui/material/Modal";
import { AddToCartBtn, BoxModal, QuantitySelect, TitleModal } from "./styled";
import { Toaster, toast } from "sonner";

const ModalQuantity = ({ open, setOpen, choiceQuantity }) => {
  const [quantity, setQuantity] = React.useState(1);


  const addedToCart = () => {
    choiceQuantity(Number(quantity))
    toast.success('Produto adicionado ao carrinho')
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <BoxModal>
          <TitleModal>Selecione a quantidade desejada</TitleModal>
          <QuantitySelect onChange={(e) => setQuantity(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </QuantitySelect>
          
          <AddToCartBtn onClick={addedToCart}>
            Adicionar ao carrinho
          </AddToCartBtn>
        </BoxModal>
      </Modal>
    </div>
  );
};

export default ModalQuantity;
