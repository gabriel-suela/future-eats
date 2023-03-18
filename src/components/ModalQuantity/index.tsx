// import Modal from "@mui/material/Modal";
import { toast } from "sonner";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { QuantitySelect, BoxModal, TitleModal, AddToCartBtn } from "./styled";
import { useState } from "react";

interface IModalQuantityProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  choiceQuantity: (quantity: number) => void;
}

const ModalQuantity = ({
  open,
  setOpen,
  choiceQuantity,
}: IModalQuantityProps) => {
  const [quantity, setQuantity] = useState(1);

  const addedToCart = () => {
    choiceQuantity(Number(quantity));
    toast.success("Produto adicionado ao carrinho");
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal size={"xs"} isCentered={true} isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <TitleModal>Selecione a quantidade</TitleModal>
          <ModalCloseButton />
          <BoxModal>
            <QuantitySelect
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
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
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalQuantity;
