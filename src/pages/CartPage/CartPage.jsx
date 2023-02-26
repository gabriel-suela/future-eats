import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  ButtonStyled,
  CartConfig,
  CartInform,
  Container,
  InfoProfile,
  InfoRestaurant,
  PaymentInfo,
} from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useGlobal } from "../../context/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";

const Cart = () => {
  useProtectedPage();

  const [data] = useRequestData(`${BASE_URL}/profile`, localStorage.getItem('token'));
  const [payment, setPayment] = useState("");
  const [fullPrice, setFullPrice] = useState(0);
  const { states, setters } = useGlobal();
  const { cart, restaurant } = states;
  const [paymentMethod] = useState(["Dinheiro", "Cartão de Crédito"]);

  console.log(payment);

  const totalPrice = () => {
    let totalPrice = 0;
    for (const product of cart) {
      totalPrice += product.price * product.quantity;
    }
    setFullPrice(totalPrice);
  };

  useEffect(() => {
    totalPrice();
  }, []);


  const placeOrder = () => {
    const body = {
      product: cart.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity,
        };
      }),
      paymentMethod: payment,
    };
    axios
      .post(`${BASE_URL}/restaurants/${states.restaurant.id}/order`, body, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setters.setOrder(res.data.order);
        setters.setCart([]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onSubmitPlaceOrder = (e) => {
    e.preventDefault();
    placeOrder();
  };

  const onChangePayment = (e) => {
    setPayment(e.target.value);
  };

  return (
    <Container>
      <Header visibleArrow={true} title={"Meu Carrinho"}></Header>
      <CartConfig>
        <InfoProfile>
          <span>Endereço de entrega</span>
          <p>{data && data.user.address}</p>
        </InfoProfile>
        <InfoRestaurant>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
        </InfoRestaurant>
        <CartInform>
          {cart.length > 0 ? (
            cart.map((product) => {
              return <CardProduct product={product} restaurant={restaurant} />;
            })
          ) : (
            <p>Carrinho Vazio</p>
          )} 
        </CartInform>
        <PaymentInfo>
          <p>Frete R$ {restaurant.shipping}</p>
          <div>
            <p>SUBTOTAL</p>
            <p>R$ {fullPrice.toFixed(2).toString().replace(".", ",")}</p>
          </div>
        </PaymentInfo>
        <h4>Forma de pagamento</h4>
        <form onSubmit={onSubmitPlaceOrder}>
          {paymentMethod.map((key) => {
            const checked = paymentMethod[key];
            return (
              <div key={key}>
                <input
                  checked={checked}
                  name={paymentMethod}
                  id={key}
                  type={"radio"}
                  onChange={onChangePayment}
                ></input>
                <label>{key}</label>
              </div>
            );
          })}
          <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </form>
      </CartConfig>
      <Footer page={"cart"}></Footer>
    </Container>
  );
};

export default Cart;
