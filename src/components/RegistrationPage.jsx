import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegistrationPage() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center ">
          <Col>
            <h1 className="text-center"> Registration here </h1>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Full Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mobile No.
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mobile No.
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mobile No.
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mobile No.
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegistrationPage;
