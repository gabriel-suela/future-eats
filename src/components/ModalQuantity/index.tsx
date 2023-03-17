// import Modal from "@mui/material/Modal";
import { Toaster, toast } from "sonner";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { QuantitySelect, BoxModal, TitleModal, AddToCartBtn } from "./styled";

interface IModalQuantityProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  // choiceQuantity: (quantity: number) => void;
}

const ModalQuantity = ({ open, setOpen }: IModalQuantityProps) => {
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
            <QuantitySelect>
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
            <AddToCartBtn>Adicionar ao carrinho</AddToCartBtn>
          </BoxModal>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalQuantity;
