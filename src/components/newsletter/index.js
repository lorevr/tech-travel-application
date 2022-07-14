import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

import { Container, NewsletterContainer } from "./styles";

function Newsletter(props) {
  const { theme } = props;

  console.log(theme);

  return (
    <Container theme={theme} className="pv4">
      <NewsletterContainer className="flex flex-row items-center justify-between">
        <div>
          <h3>¡Registrate y recibe las mejores ofertas</h3>
        </div>
        <div>
          <p className="f6">
            Al registrarte estás aceptando los términos y condiciones
          </p>
        </div>
        <div className="flex flex-column">
          <p className="f6">Síguenos en nuestras redes</p>
          <div className="flex flex-row">
            <Link to="https://facebook.com/">
              <FaFacebook size={16} color="#000" />
            </Link>
            <Link to="/">
              <FaTwitter size={16} color="#000" />
            </Link>
            <Link to="/">
              <FaYoutube size={16} color="#000" />
            </Link>
          </div>
        </div>
      </NewsletterContainer>
    </Container>
  );
}

export default Newsletter;
