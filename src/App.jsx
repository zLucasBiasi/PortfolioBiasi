import { Global } from "../styles/global";
import { Card } from "./components/Card";
import { Certificados } from "./components/Certificados";
import { Perfil } from "./components/ContainerPerfil";
import { Contato } from "./components/Contato";
import { Rodapé } from "./components/Footer";
import { Menu } from "./components/Navbar";
import { Projetos } from "./components/Projetos";

function App() {
  return (
    <>
      <Global />
      <Menu />
      <Perfil />
      <Card />
      <Projetos />
      <Certificados />
      <Contato />
      <Rodapé/>
    </>
  );
}

export default App;
