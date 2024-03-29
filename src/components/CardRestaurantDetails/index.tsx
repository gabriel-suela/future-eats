import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../context/GlobalContext";
import { goToRestaurants } from "../../routes/coordinator";
import { BoxInformTimePrice, Container } from "./styled";

type RestaurantProps = {
  restaurant: Restaurant;
};

const CardRestaurantDetails = ({ restaurant }: RestaurantProps) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => goToRestaurants(navigate, restaurant.id)}>
      <img src={restaurant.logoUrl} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.category}</p>
      <BoxInformTimePrice>
        <p>{restaurant.deliveryTime} min</p>
        <p>Frete R${restaurant.shipping},00</p>
      </BoxInformTimePrice>
      <p>{restaurant.address}</p>
    </Container>
  );
};

export default CardRestaurantDetails;
