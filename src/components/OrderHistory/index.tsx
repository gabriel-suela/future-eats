import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/url";
import { OrderCard } from "./styled";

interface OrderProps {
	totalPrice: number;
	createdAt: number;
	id: string;
	restaurantName: string;
}

const OrderHistory = () => {
	const [orderHistory, setOrderHistory] = useState<OrderProps[]>([]);

	const fetchOrderHistory = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/orders/history`, {
				headers: {
					auth: localStorage.getItem("token"),
				},
			});
			setOrderHistory(response.data.orders);
			console.log(orderHistory);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchOrderHistory();
	}, []);

	const listHistory =
		orderHistory &&
		orderHistory.map((order, index) => {
			let subtotal = order.totalPrice.toFixed(2).toString().replace(".", ",");
			let newTime = new Date(order.createdAt);

			const formattedDate = newTime.toLocaleDateString("pt-br", {
				day: "numeric",
				month: "long",
				year: "numeric",
			});
			return (
				<OrderCard key={index}>
					<p>{order.restaurantName}</p>
					<p>{formattedDate}</p>
					<p>SUBTOTAL R${subtotal}</p>
				</OrderCard>
			);
		});

	return (
		<>
			{orderHistory && orderHistory.length > 0 && listHistory}
			{orderHistory && orderHistory.length === 0 && (
				<p>Você ainda não realizou nenhum pedido</p>
			)}
		</>
	);
};

export default OrderHistory;
