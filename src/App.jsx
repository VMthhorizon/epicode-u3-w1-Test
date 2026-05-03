import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";

// import HeaderNavbar from "./component/HeaderNavbar";
// import FilmsCarousel from "./component/FilmsCarousel";
// import { Container, Row, Col } from "react-bootstrap";
// import MyFooter from "./component/MyFooter";
import Profile from "./component/Profile";

function App() {
  return (
    // <Container fluid>
    //   <header>
    //     <HeaderNavbar></HeaderNavbar>
    //   </header>
    //   <main>
    //     <Row className="my-3">
    //       <Col>
    //         <h1 className=" text-light">MADAGASCAR</h1>
    //       </Col>
    //       <Col>
    //         <FilmsCarousel movie="madagascar"></FilmsCarousel>
    //       </Col>
    //     </Row>
    //     <Row className="my-3">
    //       <Col>
    //         <h1 className=" text-light">AVENGERS</h1>
    //       </Col>
    //       <Col>
    //         <FilmsCarousel movie="avengers"></FilmsCarousel>
    //       </Col>
    //     </Row>
    //     <Row className="my-3">
    //       <Col>
    //         <h1 className=" text-light">BATMAN</h1>
    //       </Col>
    //       <Col>
    //         <FilmsCarousel movie="batman"></FilmsCarousel>
    //       </Col>
    //     </Row>
    //   </main>
    //   <footer className="d-flex justify-content-center">
    //     <MyFooter></MyFooter>
    //   </footer>
    // </Container>
    <Profile></Profile>
  );
}

export default App;
