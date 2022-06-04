import Logo from "../../public/assets/Logo.svg";
import Globo from "../../public/assets/globo.svg";
import Hamburguer from "../../public/assets/hamburguer.svg";
import * as S from "./style";
export const Menu = () => {
  return (
    <>
      <S.ContainerFlex>
        <S.ImageLogo src={Logo} alt="" />

        <S.ListaFlex>
          <S.ListaItem>
            <S.ListaAdress href="">HABILIDADES</S.ListaAdress>
          </S.ListaItem>
          <S.ListaItem>
            <S.ListaAdress href="">PROJETOS</S.ListaAdress>
          </S.ListaItem>
          <S.ListaItem>
            <S.ListaAdress href="">CERTIFICADOS</S.ListaAdress>
          </S.ListaItem>
          <S.ListaItem>
            <S.ListaAdress href="">CONTATO</S.ListaAdress>
          </S.ListaItem>
          <S.ListaItem>
            <img src={Globo} alt="Icone de globo para mudar as linguagens" />
          </S.ListaItem>

          <S.Hamb src={Hamburguer} alt="Icone do hamburguer" />
        </S.ListaFlex>
      </S.ContainerFlex>
    </>
  );
};
