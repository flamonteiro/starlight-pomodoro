import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
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
        <p>FORM</p>
      </Container>

      <Container>
        <p>FOOTER</p>
      </Container>
    </>
  );
}

export default App;
