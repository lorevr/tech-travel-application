import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../context/cart";
import logo from "../../assets/logo.svg";

import { Container, HeaderContainer, Cart } from "./styles";

function Header() {
  const { state } = useContext(CartContext);

  const totalQuantity = state.cart.reduce(
    (acc, travel) => acc + travel.quantity,
    0
  );

  return (
    <Container>
      <HeaderContainer>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            display: isActive ? "none" : "block",
          })}
        >
          <Cart>
            <div>
              <span>{totalQuantity}</span>
            </div>
            <FaShoppingCart size={36} color="#fff" />
          </Cart>
        </NavLink>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
