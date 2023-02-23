import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  ButtonStyled,
  CartConfig,
  CartInform,
  Container,
  InfoProfile,
  PaymentInfo,
} from "./styled";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useGlobal } from "../../context/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";

const Cart = () => {
  useProtectedPage();

  const [data, isLoading] = useRequestData(
    `${BASE_URL}/profile`,
    localStorage.getItem("token")
  );

  const { requests, states } = useGlobal();
  const { AddToCart, removeToCart } = requests;
  const { cart } = states;

  const [paymentMethod, setPaymentMethod] = useState({
    money: false,
    creditcard: false,
  });



  return (
    <Container>
      <Header visibleArrow={true} title={"Meu Carrinho"}></Header>
      <CartConfig>
        <InfoProfile>
          <span>Endereço de entrega</span>
          <p>{data && data.user.address}</p>
        </InfoProfile>
        <CartInform>
          <p>carrinho vazio</p>
        </CartInform>
        <PaymentInfo>
          <p>Frete R$00,00</p>
          <div>
            <p>SUBTOTAL</p>
            <p>R$00,00</p>
          </div>
        </PaymentInfo>
        <h4>Forma de pagamento</h4>
        <form>
          <div>
            <input id={"money"} name={"money"} type={"radio"} value={paymentMethod}/>
            <label htmlFor="dinheiro">Dinheiro</label>
          </div>
          <div>
            <input id={"creditcard"} name={"creditcard"} type={"radio"} value={paymentMethod} />
            <label htmlFor="cartão">Cartão</label>
          </div>
        </form>
        <ButtonStyled>Confirmar</ButtonStyled>
      </CartConfig>
      <Footer page={"cart"}></Footer>
    </Container>
  );
};

export default Cart;
