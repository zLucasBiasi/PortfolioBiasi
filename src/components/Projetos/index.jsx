import { projects } from "./projetos";
import * as S from "./style";
export const Projetos = () => {
  return (
    <>
      <S.TituloProjetos>PROJETOS</S.TituloProjetos>
      <S.ContainerGrid>
        {projects.map((item) => (
          <img key={item.url} src={item.url}></img>
        ))}
      </S.ContainerGrid>
    </>
  );
};
