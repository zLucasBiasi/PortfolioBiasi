import styled from "styled-components";
import { themes } from "../../../styles/themes";

export const TituloProjetos = styled.h1`
  text-align: center;
  font-size: ${themes.fontes.fglargue};
`;

export const ContainerGrid = styled.div`
  padding: 50px 140px 50px 140px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 800px) {
    padding: 95px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 540px) {
    padding: 50px;
  }
`;

export const ImageProjects = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:first-child {
    width: 100%;
    height: 100%;
    grid-column: 1/3;
    grid-row: 1/3;
  }

  @media (max-width: 800px) {
    &:first-child {
      grid-column: 1/4;
      grid-row: 1/3;
    }

    &:nth-child(2),
    &:nth-child(4) {
      display: none;
    }

    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(6) {
      height: 60%;
    }
  }
`;
