import * as S from "./style";

export const Contato = () => {
  return (
    <>
      <h1>CONTATOS</h1>
      <S.Container>
        {" "}
        <S.ContainerForm>
          <label for="fname">First name:</label>
          <input type="text" name="fname" />
          <label for="lname">Last name:</label>
          <input type="text" name="lname" />
          <input type="submit" value="ENVIAR" />
        </S.ContainerForm>{" "}
      </S.Container>
    </>
  );
};
