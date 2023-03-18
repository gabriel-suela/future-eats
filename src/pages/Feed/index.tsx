import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import RestaurantCard from "../../components/RestaurantCard";
import { Restaurant } from "../../context/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../utils/url";
import { Container, RestaurantCards } from "./style";

interface ApiResponse {
  restaurants: Restaurant[];
}

type FilterRestaurantProps = {
  name: string;
};

const Feed = () => {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [inputText, setInputText] = useState("");
  const fetchRestaurant = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      setRestaurants(response.data.restaurants);
    } catch (error: any) {
      toast.error(`${error.data.message}`);
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
          <InputLeftElement
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
