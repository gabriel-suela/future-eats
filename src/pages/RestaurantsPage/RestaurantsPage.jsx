import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";
import CardRestaurantDetails from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import { BASE_URL } from "../../constants/url";
import { CardRestaurant, Container } from "./styled";
import Header from "../../components/Header/Header";
import { useRequestData } from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState({});
  const { restaurantId } = useParams();
  const [isLoading] = useRequestData(
    `${BASE_URL}/restaurants`,
    localStorage.getItem("token")
  );



  const getRestaurants = () => {
    const token = localStorage.getItem("token");
    axios
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
    <Container>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Header title={"Restaurante"} visibleArrow={true}></Header>
          <CardRestaurant>
            <CardRestaurantDetails restaurant={restaurant} />
            {restaurant.products &&
              restaurant.products.map((restaurant) => {
                return <CardProduct key={restaurant.id} product={restaurant} />;
              })}
          </CardRestaurant>
        </>
      )}
    </Container>
  );
};

export default Restaurants;
