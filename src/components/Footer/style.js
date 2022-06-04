import styled from "styled-components"
import { themes } from "../../../styles/themes"
export const Footer = styled.footer`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 5rem;
    background-color:${themes.corlaranja};
  
`
export const Titulo = styled.h1`
color:${themes.branco};
`
export const Lista = styled.ul`
display: flex;
`
export const ItemDaLista = styled.li`
padding: 1rem;
`
export const Images = styled.img`
padding: 1rem;
`
