import * as React from "react";
import Modal from "@mui/material/Modal";
import { AddToCartBtn, BoxModal, QuantitySelect, TitleModal } from "./styled";

const ModalQuantity = ({ open, setOpen }) => {
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
          <QuantitySelect>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
          </QuantitySelect>
          <AddToCartBtn>Adicionar ao carrinho</AddToCartBtn>
        </BoxModal>
      </Modal>
    </div>
  );
};

export default ModalQuantity;
