import imagestacks from "./stacks";
import * as S from "./style";
export const Card = () => {
  return (
    <>
      <S.TituloHabilidades>HABILIDADES</S.TituloHabilidades>
      <S.ContainerHabilidades>
        {imagestacks.map((item) => (
          <S.IconStack key={item.url} src={item.url}></S.IconStack>
        ))}
      </S.ContainerHabilidades>
    </>
  );
};
