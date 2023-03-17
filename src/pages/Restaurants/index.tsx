import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import CardRestaurantDetails from "../../components/CardRestaurantDetails";
import Header from "../../components/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../utils/url";
import { CardRestaurant, Container } from "./styled";

interface Product {
  id: string;
  name: string;
  photoUrl: string;
  quantity: number;
  description: string;
  price: number;
}

interface Restaurant {
  logoUrl: string;
  id: string;
  name: string;
  category: string;
  deliveryTime: number;
  shipping: number;
  address: string;
  products: Product[];
  restaurant: any;
}

const Restaurants = () => {
  useProtectedPage();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { restaurantId } = useParams<{ restaurantId: string }>();

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get<{ restaurants: Restaurant }>(
        `${BASE_URL}/restaurants/${restaurantId}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      setRestaurant(response.data.restaurant);
      console.log(restaurant);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [restaurantId]);
  return (
    <>
      <Container>
        <Header title={"Restaurante"} visibleArrow={true} />
        <CardRestaurant>
          {restaurant && <CardRestaurantDetails restaurant={restaurant} />}
          {restaurant?.products &&
            restaurant?.products.map((product: Product) => {
              return (
                <CardProduct
                  key={product.id}
                  product={product}
                  restaurant={restaurant}
                />
              );
            })}
        </CardRestaurant>
      </Container>
    </>
  );
};

export default Restaurants;
