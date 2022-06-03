import styled from "styled-components";
import { themes } from "../../../styles/themes";
export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px 15px 100px;
`;

export const ImageLogo = styled.img`
  width: 200px;
`;

export const ListaFlex = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListaItem = styled.li`
  padding-right: 20px;
`;

export const ListaAdress = styled.a`
  color: ${themes.branco};
  font-size: ${themes.fontes.fsmall};
  font-weight: 600;
`;
