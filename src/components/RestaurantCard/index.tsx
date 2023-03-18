import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurants } from "../../routes/coordinator";
import { BoxInformTimePrice, Container } from "./style";

type Restaurant = {
  id: string;
  logoUrl: string;
  shipping: number;
  name: string;
  deliveryTime: number;
  restaurant: React.ReactNode;
};

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => goToRestaurants(navigate, restaurant.id)}>
      <img src={restaurant.logoUrl} />
      <h3>{restaurant.name}</h3>
      <BoxInformTimePrice>
        <p>{restaurant.deliveryTime} min</p>
        <p>
          Frete R$ {restaurant.shipping.toFixed(2).toString().replace(".", ",")}
        </p>
      </BoxInformTimePrice>
    </Container>
  );
};

export default RestaurantCard;
