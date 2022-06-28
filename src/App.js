import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";
import GlobalStyled from "./styles/global";
import Header from "./components/Header";
import { CartContextProvider } from "./context/cart";

import Footer from "./components/footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
      <GlobalStyled />
    </CartContextProvider>
  );
}

export default App;
