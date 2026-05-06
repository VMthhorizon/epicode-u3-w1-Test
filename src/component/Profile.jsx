import { Container, Row, Col, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const Profile = () => {
  return (
    <>
      <Container className="w-50 my-3 flex-column">
        <Row className="my-2">
          <Col xs={12} className=" text-center text-md-start">
            <h1 className="text-light">Edit Profile</h1>
          </Col>
        </Row>
        <Row className="my-2 flex-column flex-md-row justify-content-between">
          <Col xs={6} className="mx-auto mx-md-0 text-center text-md-start">
            <img
              src="../../public/assets/avatar.png"
              style={{ height: 100, width: 100 }}
            ></img>
          </Col>
          <Col xs={6}>
            <h4 className="bg-secondary p-1 fs-6 text-light fw-semibold ps-2">
              Strive Student
            </h4>
            <h4 className="fs-5 text-tertiary">Language:</h4>
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="border border-1"
              >
                Italiano
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Inglese</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Francese</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Spagnolo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="my-4 flex-column flex-md-row">
          <Col xs={6} className="offset-md-6">
            <h4 className="fs-5 text-tertiary">Maturity Settings:</h4>
          </Col>
          <Col xs={6} className="offset-md-6">
            <h4 className="text-center bg-secondary p-1 fs-6 text-light fw-semibold ps-2">
              ALL MATURITY RATINGS
            </h4>
          </Col>
          <Col xs={6} className="offset-md-6">
            <h4 className="text-light fw-lighter fs-6 mb-4">
              Show titles of
              <span className="fw-bolder"> all maturity ratings</span> for this
              profile
            </h4>
          </Col>
          <Col xs={6} className="offset-md-6">
            <Button variant="dark" className="w-100">
              EDIT
            </Button>
          </Col>
        </Row>
        <Row className="my-4 flex-column flex-md-row">
          <Col xs={6} className="offset-md-6">
            <h4 className="fs-5 text-tertiary">Autoplay Controls:</h4>
          </Col>
          <Col xs={6} className="offset-md-6">
            <Form.Check
              className="text-light"
              type="checkbox"
              id="default-checkbox-1"
              label="Autoplay next episode in a series on all devices."
            ></Form.Check>
          </Col>
          <Col xs={6} className="offset-md-6">
            <Form.Check
              className="text-light"
              type="checkbox"
              id="default-checkbox-2"
              label="Autoplay previews while browsing on all devices."
            ></Form.Check>
          </Col>
        </Row>
        <Row className="my-4 justify-content-between align-items-center">
          <Col xs={3}>
            <Button variant="dark" className="border border-1 text-center">
              SAVE
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="dark" className="border border-1 text-center">
              CANCEL
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="dark" className="border border-1 text-center">
              DELETE PROFILE
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
