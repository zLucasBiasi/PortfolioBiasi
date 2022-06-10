import styled from "styled-components";
import {themes} from "../../../styles/themes/index"

export const DivContainer = styled.div`
padding: 4rem 0;
@media (max-width:900px) {
  margin: 0 1rem;
}
`
export const ContainerForm = styled.form` 
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 810px;
  margin: 0 auto;

`;
export const Titulo = styled.h1`
 text-align: center;
 font-size: ${themes.fontes.fslargue};
 margin-top: 20px;
`
export const Label = styled.label`
font-size: ${themes.fontes.flarge};
`
export const AreaInput = styled.input`
background-color: transparent;
border: 1px solid white;
padding: 10px 5px;
margin-bottom: 15px;
color: ${themes.branco};
font-size: ${themes.fontes.flarge};

`
export const AreaBox = styled.textarea`
background-color: transparent;
border: 1px solid white ;
height: 200px;
resize: none;
color: ${themes.branco};
font-size: ${themes.fontes.flarge};
`
export const InputBotao = styled.button`
font-weight: 700;
font-size: ${themes.fontes.flarge};
color: ${themes.branco};
margin: 20px auto;
background-color: transparent;
max-width: max-content;
padding: 1rem 2.5rem;
border: 2px solid white;
cursor: pointer;
&:hover{
  background-color: white;
  color: black;
  transition:1s ;
}
`
