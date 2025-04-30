import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { MainForm } from "./components/MainForm";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <CountDown></CountDown>
      </Container>

      <Container>
        <MainForm></MainForm>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
