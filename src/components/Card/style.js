import styled from "styled-components";
import { themes } from "../../../styles/themes";

export const TituloHabilidades = styled.h1`
  text-align: center;
  font-size: ${themes.fontes.fglargue};

  @media (max-width: 900px) {
    margin-top: 70px;
  }
`;

export const ContainerHabilidades = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  place-items: center;
  gap: 40px;

  @media (max-width: 400px) {
    padding: 50px 0 50px 0;
  }
`;

export const IconStack = styled.img`
  width: 250px;
`;
