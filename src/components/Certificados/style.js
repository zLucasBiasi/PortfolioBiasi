import styled from "styled-components";

export const TitulosC = styled.h1`
  text-align: center;
  padding: 50px;
`;

export const ContainerCertificados = styled.div`
  padding: 0 60px 0 60px;
  min-height: 700px;

  @media (max-width: 600px) {
    padding: 0;
    min-height: 200px;
  }
`;
