import * as S from "./style";
import PerfilBiasi from "../../public/assets/Perfil.png";

export const Perfil = () => {
  return (
    <div>
      <S.TituloMobile>
        Olá, me chamo <S.Span>Lucas Biasi</S.Span>
      </S.TituloMobile>
      <S.ContainerPerfil>
        <div>
          <S.TituloPerfil>Olá, me chamo Lucas Biasi.</S.TituloPerfil>
          <S.ParagrafoPerfil>
            Sou um desenvolvedor Front-end especializado na criação de sites
            agradáveis e modernos. Atualmente trabalhando como freelancer e
            focado em crescer profissionalmente.
          </S.ParagrafoPerfil>
        </div>
        <div>
          <S.ImagemPerfil src={PerfilBiasi} alt="" />
        </div>
      </S.ContainerPerfil>
      <S.ParagrafoMobile>
        Sou um desenvolvedor Front-end especializado na criação de sites
        agradáveis e modernos. Atualmente trabalhando como freelancer e focado
        em crescer profissionalmente.
      </S.ParagrafoMobile>
    </div>
  );
};
