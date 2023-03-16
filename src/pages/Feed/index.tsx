import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import RestaurantCard from "../../components/RestaurantCard";
import { useGlobal } from "../../context/GlobalContext";
import { BASE_URL } from "../../utils/url";
import { Container } from "./style";

interface RestaurantProps {
  img: string;
  name: string;
  deliveryTime: number;
  shipping: number;
  restaurants: any;
}

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get<RestaurantProps[]>(
        `${BASE_URL}/restaurants`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      setRestaurants(response.data.restaurants);
      console.log(restaurants);
    } catch (err) {
      console.error("An error occurred while trying to get restaurants");
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <>
      <Container>
        <Header visibleArrow={true} title={"Restaurantes"} />
        {restaurants.length > 0 &&
          restaurants.map((restaurant, item) => {
            return <RestaurantCard key={item} restaurant={restaurant} />;
          })}
        <NavBar page={"home"} />
      </Container>
    </>
  );
};

export default Feed;
