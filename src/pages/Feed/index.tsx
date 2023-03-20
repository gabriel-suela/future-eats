import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Order from "../../components/Order";
import RestaurantCard from "../../components/RestaurantCard";
import { OrderProps, Restaurant, useGlobal } from "../../context/GlobalContext";
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
	const [activeOrder, setActiveOrder] = useState<OrderProps | undefined>(
		undefined
	);
	const [inputText, setInputText] = useState("");
	const { states } = useGlobal();
	const { order } = states;

	const newOrder = [];

	if (order) {
		newOrder.push(order);
	}

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

	const fetchActiveOrder = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/active-order`, {
				headers: {
					auth: localStorage.getItem("token"),
				},
			});
			setActiveOrder(response.data.order);
			console.log(order);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchRestaurant();
		fetchActiveOrder();
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
			{activeOrder && (
				<Order
					restaurantName={activeOrder.restaurantName}
					totalPrice={activeOrder.totalPrice}
				/>
			)}
			<NavBar page={"home"} />
		</Container>
	);
};

export default Feed;
