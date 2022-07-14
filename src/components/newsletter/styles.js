import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme || "#eee"};
`;

export const NewsletterContainer = styled.div`
  width: 100%;
  max-width: 958px;
  margin: auto;
`;
