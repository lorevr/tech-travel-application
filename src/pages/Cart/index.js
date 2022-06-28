import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import CartContext from "../../context/cart";
import {
  Container,
  ContainerList,
  EncabezadosCarrito,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  Total,
} from "./styles";

function Cart() {
  const { state, setState } = useContext(CartContext);

  let totalPrice = 0;
  state.cart.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });

  return (
    <Container>
      <ContainerList>
        <EncabezadosCarrito>
          <p>PRODUCTO</p>
          <p>CANTIDAD</p>
          <p>PRECIO</p>
        </EncabezadosCarrito>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        <Total>
          <p>TOTAL:</p>
          <strong>{totalPrice}</strong>
        </Total>
      </ContainerList>
    </Container>
  );
}

export default Cart;
