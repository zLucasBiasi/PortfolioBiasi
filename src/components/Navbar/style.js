import styled from "styled-components";
import { themes } from "../../../styles/themes";
export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px 15px 100px;
  @media (max-width: 900px) {
    padding: 15px 30px 50px 30px;
  }
  @media (max-width: 430px) {
    padding: 0 15px 50px 15px;
  }
`;

export const ImageLogo = styled.img`
  width: 200px;
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const Hamb = styled.img`
  width: 40px;
  cursor: pointer;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const ListaFlex = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListaItem = styled.li`
  padding-right: 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ListaAdress = styled.a`
  color: ${themes.branco};
  font-size: ${themes.fontes.fsmall};
  font-weight: 600;
  display: inline-block;
  position: relative;
  &:hover{
    color:${themes.corlaranja}
  }
  &:hover::after{
     color:${themes.corlaranja};
     width: 100%;
     
  }
  &:after{
    content: "";
    display: block;
    height: 2px;
    width:0%;
    background-color: white;
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
  }
  
`;
