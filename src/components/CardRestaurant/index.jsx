import { AccountCircle } from "@mui/icons-material";
import { Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";
import { BoxInformTimePrice, ContainerCardRestaurant, ImageRestaurant, InformTimePrice, RestaurantName } from "./styled";

const CardRestaurant = ({restaurant}) => {
    return(
        <ContainerCardRestaurant>
            
            <ImageRestaurant src={restaurant.logoUrl}/>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <BoxInformTimePrice>
                <InformTimePrice>{restaurant.deliveryTime} min</InformTimePrice>
                <InformTimePrice>Frete R${restaurant.shipping},00</InformTimePrice>
            </BoxInformTimePrice>
        </ContainerCardRestaurant>
    )
}

export default CardRestaurant