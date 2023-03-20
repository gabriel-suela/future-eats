import { TimeIcon } from "@chakra-ui/icons";
import { OrderP } from "../../context/GlobalContext";
import { Container, OrderInfo, Time } from "./styled";

const Order = ({ totalPrice, restaurantName }: OrderP) => {
	return (
		<Container>
			<Time>
				<TimeIcon boxSize={6} color={"white"} />
			</Time>
			<OrderInfo>
				<h3>Pedido em andamento</h3>
				<p>{restaurantName}</p>
				<span>SUBTOTAL R${totalPrice}</span>
			</OrderInfo>
		</Container>
	);
};

export default Order;
