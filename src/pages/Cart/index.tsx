import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { useGlobal } from "../../context/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../utils/url";
import { ApiResponse, ProfileProps } from "../Profile";
import {
  ButtonStyled,
  CartConfig,
  CartInform,
  Container,
  InfoProfile,
  InfoRestaurant,
  PaymentInfo,
} from "./styled";

const Cart = () => {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [payment, setPayment] = useState<string>("");
  const [fullPrice, setFullPrice] = useState(() => 0);
  const { states, setters } = useGlobal();
  const { cart = [], restaurant } = states;
  const [paymentMethod] = useState<Array<string>>([
    "Dinheiro",
    "Cartão de Crédito",
  ]);
  useProtectedPage();

  const fetchProfile = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      setProfile(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    totalPrice();
  }, []);

  const totalPrice = () => {
    let totalPrice = 0;
    for (const product of cart ?? []) {
      totalPrice += product.price * product.quantity;
    }
    setFullPrice(totalPrice);
  };

  const onChangePayment = (e: any) => {
    setPayment(e.target.value);
  };

  return (
    <Container>
      <Header visibleArrow={true} title={"Meu Carrinho"} />
      <CartConfig>
        <InfoProfile>
          <span>Endereço de entrega</span>
          <p>{profile && profile.address}</p>
        </InfoProfile>
        <InfoRestaurant>
          <h4>{restaurant?.name}</h4>
          <p>{restaurant?.address}</p>
          <p>30 - {restaurant?.deliveryTime} min</p>
        </InfoRestaurant>
        <CartInform>
          {cart?.length ?? 0 > 0 ? (
            cart?.map((product) => {
              return <CardProduct product={product} restaurant={restaurant} />;
            })
          ) : (
            <p>Carrinho Vazio</p>
          )}
        </CartInform>
        <PaymentInfo>
          <p>Frete R$ {restaurant?.shipping},00</p>
          <div>
            <p>SUBTOTAL</p>
            <p>R$ {fullPrice.toFixed(2).toString().replace(".", ",")}</p>
          </div>
        </PaymentInfo>
        <h4>Forma de pagamento</h4>
        <form>
          {paymentMethod.map((element, index) => {
            const checked = payment === element;
            return (
              <div key={index}>
                <input
                  checked={checked}
                  name={"paymentMethod"}
                  id={index.toString()}
                  type={"radio"}
                  onChange={onChangePayment}
                  value={element}
                ></input>
                <label>{element}</label>
              </div>
            );
          })}
          <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </form>
      </CartConfig>

      <NavBar page="cart" />
    </Container>
  );
};

export default Cart;
