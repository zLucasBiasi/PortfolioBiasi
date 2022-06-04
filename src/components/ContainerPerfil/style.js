import styled from "styled-components";
import { themes } from "../../../styles/themes";

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 0 100px;
  background: linear-gradient(${themes.backgroundGradiente});
  box-shadow: inset 0 105px ${themes.background},
    inset 0 -105px ${themes.background};
  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    box-shadow: inset 0 80px ${themes.background},
      inset 0 -80px ${themes.background};
  }
`;

export const TituloPerfil = styled.h1`
  font-size: ${themes.fontes.fglargue};
  font-weight: 700;
  width: 30rem;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ParagrafoPerfil = styled.p`
  font-size: ${themes.fontes.fsmall};
  font-weight: 400;
  width: 40rem;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ImagemPerfil = styled.img`
  width: 380px;
  @media (max-width: 500px) {
    width: 280px;
  }
`;

export const TituloMobile = styled.h1`
  display: none;
  font-size: ${themes.fontes.fslargue};
  text-align: center;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 200px;
  }

  @media (max-width: 900px) {
    display: block;
    font-size: ${themes.fontes.fslargue};
    text-align: center;
  }
`;
export const Span = styled.span`
  color: ${themes.corlaranja};
`;

export const ParagrafoMobile = styled.p`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    font-size: ${themes.fontes.fsmall};
    margin: 0 auto;
    text-align: center;
    width: 90%;
  }
`;
