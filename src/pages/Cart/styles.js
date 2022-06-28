import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerList = styled.ul`
  width: 100%;
  max-width: 958px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 36px 44px;
  align-items: center;
  margin-top: 45px;
`;

export const EncabezadosCarrito = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  justify-items: center;

  P {
    font-weight: 600;
  }
`;

export const TravelItem = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 10px 0;
  border-bottom: 1px solid #666;
  justify-content: space-between;
  align-items: center;

  img {
    height: 100px;
    margin: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  strong {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const Quantity = styled.input`
  font-size: 16px;
  color: #666;
  padding: 6px;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid #0676d9;
  text-align: center;
  justify-items: left;
`;

export const Subtotal = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  align-items: right;

  p {
    margin-right: 10px;
  }

  p:before {
    content: "$ ";
  }

  p:after {
    content: ".00";
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  justify-content: end;

  p {
    margin-right: 10px;
    font-weight: 400;
  }

  strong {
    font-size: 20px;
  }

  strong:before {
    content: "$ ";
  }

  strong:after {
    content: ".00";
  }
`;
