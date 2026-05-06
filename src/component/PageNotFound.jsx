import { Container, Row, Col } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} className="text-center">
          <h1>404.....PAGINA NON TROVATA</h1>
        </Col>
        <Col xs={8} className="text-center">
          <img src="https://placekittens.com/300/300"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
