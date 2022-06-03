import * as S from "./style"
import LogoZap from "../../public/assets/logo-zap.svg"
import LogoInst from "../../public/assets/logo-instragram.svg"
import LogoLink from "../../public/assets/logo-linkedin.svg"
import LogoGit from "../../public/assets/logo-git-hub.svg"
export const Rodapé = () => {
  return (
    <>
    <S.Footer>
      <S.Titulo>Design e desenvolvimento feito por <span> Lucas Biasi.</span></S.Titulo>
      <S.Lista>
        <S.ItemDaLista><img src={LogoZap} alt="" /></S.ItemDaLista>
        <li><img src={LogoInst} alt="" /></li>
        <li><img src={LogoLink} alt="" /></li>
        <li><img src={LogoGit} alt="" /></li>
      </S.Lista>
    </S.Footer>
    </>
  )
   
};
