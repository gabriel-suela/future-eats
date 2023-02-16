import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurants } from "../../routes/coordinator";
import {
  BoxInformTimePrice,
  ContainerCardRestaurant,
  ImageRestaurant,
  InformTimePrice,
  RestaurantName,
} from "./styled";

const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <ContainerCardRestaurant
      onClick={() => goToRestaurants(navigate, restaurant.id)}
    >
      <ImageRestaurant src={restaurant.logoUrl} />
      <RestaurantName>{restaurant.name}</RestaurantName>
      <BoxInformTimePrice>
        <InformTimePrice>{restaurant.deliveryTime} min</InformTimePrice>
        <InformTimePrice>Frete R$ {restaurant.shipping.toFixed(2).toString().replace(".", ",")}</InformTimePrice>
      </BoxInformTimePrice>
    </ContainerCardRestaurant>
  );
};

export default CardRestaurant;
