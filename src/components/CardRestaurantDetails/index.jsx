import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurants } from "../../routes/coordinator";
import {
  BoxInformTimePrice,
  ContainerCardRestaurantDetails,
  ImageRestaurant,
  Inform,
  RestaurantName,
} from "./styled";



const CardRestaurantDetails = ({ restaurant }) => {
    const navigate = useNavigate()

  return (
    <ContainerCardRestaurantDetails onClick={()=>goToRestaurants(navigate, restaurant.id)}>
      <ImageRestaurant src={restaurant.logoUrl} />
      <RestaurantName>{restaurant.name}</RestaurantName>
      <Inform>{restaurant.category}</Inform>
      <BoxInformTimePrice>
        <Inform>{restaurant.deliveryTime} min</Inform>
        <Inform>Frete R${restaurant.shipping},00</Inform>
      </BoxInformTimePrice>
      <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurantDetails>
  );
};

export default CardRestaurantDetails;
