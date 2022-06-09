import { Carousel } from "3d-react-carousal";
import * as S from "./style";
import Certificado1 from "../../public/assets/HTMLCSS.jpg";
import Certificado2 from "../../public/assets/PRIMEIROSPASSOS.jpg";
import Certificado3 from "../../public/assets/Flex.jpg";
import Certificado4 from "../../public/assets/LOGICA.jpg";
import Certificado5 from "../../public/assets/SINTAXEJS.jpg";
import Certificado6 from "../../public/assets/PROGRAMACAOJS.jpg";
export const Certificados = () => {
  let slides = [
    <img src={Certificado1} alt="1" />,
    <img src={Certificado2} alt="2" />,
    <img src={Certificado3} alt="3" />,
    <img src={Certificado4} alt="4" />,
    <img src={Certificado5} alt="5" />,
    <img src={Certificado6} alt="6" />,
  ];
  return (
    <>
      <S.TitulosC>CERTIFICADOS</S.TitulosC>
      <S.ContainerCertificados>
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </S.ContainerCertificados>
    </>
  );
};
