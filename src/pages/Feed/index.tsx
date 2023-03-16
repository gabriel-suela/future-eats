import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import RestaurantCard from "../../components/RestaurantCard";
import { BASE_URL } from "../../utils/url";
import { Container, RestaurantCards } from "./style";

interface RestaurantProps {
  img: string;
  name: string;
  deliveryTime: number;
  shipping: number;
  restaurants: any;
}

type FilterRestaurantProps = {
  name: string;
};

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");
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
    } catch (err) {
      console.error("An error occurred while trying to get restaurants");
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const filterRestaurants = restaurants
    .filter(
      (restaurant: FilterRestaurantProps) =>
        !inputText ||
        restaurant.name.toLowerCase().includes(inputText.toLowerCase())
    )
    .map((restaurant, item) => (
      <RestaurantCard key={item} restaurant={restaurant} />
    ));

  return (
    <Container>
      <Header visibleArrow={true} title={"Restaurantes"} />
      <RestaurantCards>
        <InputGroup>
          <InputLeftAddon
            background={"transparent"}
            pointerEvents={"none"}
            children={<SearchIcon background={"transparent"} />}
          />
          <Input
            type="tel"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nome do restaurante"
          />
        </InputGroup>
        {restaurants.length > 0 && filterRestaurants}
      </RestaurantCards>

      <NavBar page={"home"} />
    </Container>
  );
};

export default Feed;
