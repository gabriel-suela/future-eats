import { TimeIcon } from "@chakra-ui/icons";
import { Container, OrderInfo, Time } from "./styled";

interface OrderProps {
	totalPrice: number;
	restaurantName: string;
}

const Order = ({ totalPrice, restaurantName }: OrderProps) => {
	return (
		<Container>
			<Time>
				<TimeIcon boxSize={6} color={"white"} />
			</Time>
			<OrderInfo>
				<h3>Pedido em andamento</h3>
				<p>{restaurantName}</p>
				<span>SUBTOTAL R${totalPrice.toFixed(2).replace(".", ",")}</span>
			</OrderInfo>
		</Container>
	);
};

export default Order;
