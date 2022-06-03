import Logo from "../../public/assets/Logo.svg";
import Globo from "../../public/assets/globo.svg";
import * as S from "./style";
export const Menu = () => {
  return (
    <>
      <img src={Logo} alt="" />

      <ul>
        <li>
          <a href="">HABILIDADES</a>
        </li>
        <li>
          <a href="">PROJETOS</a>
        </li>
        <li>
          <a href="">CERTIFICADOS</a>
        </li>
        <li>
          <a href="">CONTATO</a>
        </li>
        <li>
          <img src={Globo} alt="" />
        </li>
      </ul>
    </>
  );
};
