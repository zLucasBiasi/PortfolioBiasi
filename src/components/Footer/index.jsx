import * as S from "./style";
import { image } from "./icones";
export const Rodapé = () => {
  return (
    <>
      <S.Footer>
        <S.Titulo>
          Design e desenvolvimento feito por <span> Lucas Biasi.</span>
        </S.Titulo>
        <S.Lista>
          {image.map((item) => (
            <S.Images key={item.url} src={item.url}></S.Images>
          ))}
        </S.Lista>
      </S.Footer>
    </>
  );
};
