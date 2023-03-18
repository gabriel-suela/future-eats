import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
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
  const { setOrder, setCart } = setters;
  const { cart = [], restaurant, order } = states;
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

  let products =
    cart &&
    cart.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

  const fetchOrder = async () => {
    const body = {
      products: products,
      paymentMethod: payment,
    };
    console.log(body);

    try {
      const response = await axios.post(
        `${BASE_URL}/restaurants/${restaurant?.id}/order`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      toast.success("Pedido realizado com sucesso!!");
      setOrder(response.data.order);
      setCart([]);
      toast.success(`${response.data.messsage}`);
    } catch (error: any) {
      console.log(error);
      toast.error(`${error.response.data.message}`);
    }
  };

  const totalPrice = () => {
    let totalPrice = restaurant?.shipping ?? 0;
    for (const product of cart ?? []) {
      totalPrice += product.price * product.quantity;
    }
    setFullPrice(totalPrice);
  };

  const onSubmitPlaceOrder = (e: any) => {
    e.preventDefault();
    fetchOrder();
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
          <p>Frete R${restaurant?.shipping},00</p>
          <div>
            <p>SUBTOTAL</p>
            <p>R${fullPrice.toFixed(2).toString().replace(".", ",")}</p>
          </div>
        </PaymentInfo>
        <h4>Forma de pagamento</h4>
        <form onSubmit={onSubmitPlaceOrder}>
          <div>
            <input
              name="payment"
              value={"money"}
              onChange={onChangePayment}
              type={"radio"}
            />
            <label>Dinheiro</label>
          </div>
          <div>
            <input
              name="payment"
              value={"creditcart"}
              onChange={onChangePayment}
              type={"radio"}
            />
            <label>Cartão de Crédito</label>
          </div>
          <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </form>
      </CartConfig>

      <NavBar page="cart" />
    </Container>
  );
};

export default Cart;
