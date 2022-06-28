import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { Container, FooterContainer } from "./styles";

function Footer() {
  return (
    <Container className="mv3">
      <FooterContainer className="flex justify-between">
        <Link to="/" className="flex">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="list pv4">
          <li>
            <Link
              to="/aviso-de-privacidad"
              className="white link underline-hover"
            >
              Aviso de privacidad
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              className="white link underline-hover"
            >
              Google
            </a>
          </li>
        </ul>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
