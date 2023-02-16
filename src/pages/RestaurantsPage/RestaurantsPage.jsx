import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";
import CardRestaurantDetails from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import { BASE_URL } from "../../constants/url";
import { CardRestaurant, ContainerRestaurant } from "./styled";
import Header from "../../components/Header/Header"

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState({});
  const { restaurantId } = useParams();

  const getRestaurants = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err.data.response.message);
      });
  };


  useEffect(() => {
    getRestaurants();
  }, []);

  

  return (
    <ContainerRestaurant>
      <Header title={"Restaurante"}></Header>
      <CardRestaurant>
        <CardRestaurantDetails restaurant={restaurant} />
        {
            restaurant.products && restaurant.products.map((restaurant)=>{
              console.log(restaurant);
              return <CardProduct //key={product.id}
               product={restaurant} />
            })
             
        } 
      </CardRestaurant>
      
    </ContainerRestaurant>
  );
};

export default Restaurants;
