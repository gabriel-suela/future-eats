import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { CartConfig, CartInform, InfoProfile, Main, MainCart } from "./styled";
import { GlobalContext } from "../../context/GlobalContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  useProtectedPage();

  return (
    <Main>
      <Header visibleArrow={true} title={"Meu Carrinho"}></Header>
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p></p>
        </InfoProfile>
        <CartInform></CartInform>
        <div>
          <p>Frete R$00,00</p>
          <div>
            <p>Subtotal</p>
            <p>R$00,00</p>
          </div>
        </div>
        <h1>Forma de pagamento</h1>
        <form>
          <label>Dinheiro</label>
          <input type={"checkbox"} />
          <label>Cartão de crédito</label>
          <input type={"checkbox"} />
          <button>Confirmar</button>
        </form>
      </CartConfig>
      <Footer page={"cart"}></Footer>
    </Main>
  );
};

export default Cart;
