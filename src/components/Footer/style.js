import styled from "styled-components";
import { themes } from "../../../styles/themes";
export const Footer = styled.footer`
  max-width: 100%;
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  background-color: ${themes.corlaranja};
  @media screen and (max-width:540px) {
    flex-direction: column-reverse;
    padding: 2rem 2rem;
  }
`;
export const Titulo = styled.h1`
  color: ${themes.branco};
  font-weight: 400;
  font-size:${themes.fontes.fslargue};
  padding-right:1rem ;
  @media screen and (max-width:900px) {
      font-size:2rem;
  }
  @media screen and (max-width:540px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
}
`;
export const Span = styled.span`
  font-weight: 700;
`;
export const Lista = styled.ul`
  display: flex;
  gap: 20px;
  padding-bottom: 1rem;
`
export const Images = styled.img`
 @media screen and (max-width:970px){
   max-width: 45px;

 }
`;
