import React from "react";
import { Container } from "./styled";


const Order = ({order}) => {

  return (
    <Container>
      <h3>Pedido em andamento</h3>
      <p>SUBTOTAL R$ {order.totalPrice}</p>

      </Container>
  );
};

export default Order;
