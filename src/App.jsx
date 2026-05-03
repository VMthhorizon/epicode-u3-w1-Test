import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeaderNavbar from "./component/HeaderNavbar";
import FilmsCarousel from "./component/FilmsCarousel";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <header>
        <HeaderNavbar></HeaderNavbar>
      </header>
      <main>
        <FilmsCarousel></FilmsCarousel>
      </main>
    </Container>
  );
}

export default App;
