import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";

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

      <Home />

      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
