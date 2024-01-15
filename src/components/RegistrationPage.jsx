import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegistrationPage() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center ">
          <Col>
            <h1 className="text-center"> पंजीयन करें </h1>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  पूरा नाम
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  ई-मेल
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  मोबाइल नम्बर
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  विधानसभा
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  विकासखण्ड
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  ग्राम पंचायत
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
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
