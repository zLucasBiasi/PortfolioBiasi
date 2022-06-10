import * as S from "./style";

export const Contato = () => {
  return (
    <S.DivContainer>
      <S.Titulo>CONTATOS</S.Titulo>
      <S.Container>
        <S.ContainerForm>
          <S.Label for="fname">Nome</S.Label>
          <S.AreaInput type="text" name="fname" />
          <S.Label for="lemail">E-mail</S.Label>
          <S.AreaInput type="email" name="lemail" />
          <S.Label for="aAssunto">Assunto</S.Label>
          <S.AreaInput type="text" name="aAssunto" />
          <S.Label type="text" name="lmensagem">Mensagem</S.Label>
          <S.AreaBox/>
          <S.InputBotao>Enviar</S.InputBotao>
        </S.ContainerForm>
      </S.Container>
    </S.DivContainer>
  );
};
