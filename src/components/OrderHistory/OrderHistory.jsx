import React from "react";
import { BASE_URL } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import Loading from "../Loading/Loading";
import { OrderCard } from "./styled";

export default function OrderHistory() {
  const [data, isLoading] = useRequestData(
    `${BASE_URL}/orders/history`,
    localStorage.getItem("token")
  );

  const listHistory =
    data &&
    data.orders.map((order) => {
      let subtotal = order.totalPrice.toFixed(2).toString().replace(".", ",");
      let newTime = new Date(order.createdAt);

      const formattedDate = newTime.toLocaleDateString("pt-br", {
        day: "numeric",
        month: "long",
        yar: "numeric",
      });

      return (
        <OrderCard key={order.id}>
          <p>{order.restaurantName}</p>
          <p>{formattedDate}</p>
          <p>SUBTOTAL R${subtotal}</p>
        </OrderCard>
      );
    });

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && data && data.orders.length > 0 && listHistory}
      {!isLoading && data && data.orders.length === 0 && (
        <p>Você não realizou nenhum pedido.</p>
      )}
    </>
  );
}
