import { projects } from "./projetos";
import * as S from "./style";

export const Projetos = () => {
  return (
    <>
      <S.TituloProjetos>PROJETOS</S.TituloProjetos>
      <S.ContainerGrid>
        {projects.map((item) => (
          <S.ImageProjects key={item.url} src={item.url}></S.ImageProjects>
        ))}
      </S.ContainerGrid>
      <S.ContainerFlex>
        <S.ButtonGit href="https://github.com/zLucasBiasi" target="_blank">
          VEJA MAIS
        </S.ButtonGit>
      </S.ContainerFlex>
    </>
  );
};
