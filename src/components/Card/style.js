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
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  place-items: center;
  gap: 30px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 700px) {
    padding: 50px;
    gap: 50px;
  }
`;

export const IconStack = styled.img`
  width: 100%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
