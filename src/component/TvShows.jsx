import { Container, Row, Col } from "react-bootstrap";
import FilmsCarousel from "./FilmsCarousel";

const TvShows = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h1 className=" text-light">MADAGASCAR</h1>
        </Col>
        <Col>
          <FilmsCarousel movie="madagascar"></FilmsCarousel>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h1 className=" text-light">AVENGERS</h1>
        </Col>
        <Col>
          <FilmsCarousel movie="avengers"></FilmsCarousel>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h1 className=" text-light">BATMAN</h1>
        </Col>
        <Col>
          <FilmsCarousel movie="batman"></FilmsCarousel>
        </Col>
      </Row>
    </Container>
  );
};

export default TvShows;
