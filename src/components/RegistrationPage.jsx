import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const initData = {
    fullname: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
  };
  const navigate = useNavigate();
  const [FormData, setFormData] = useState(initData);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <Container aria-labelledby="contained-modal-title-vcenter">
        <Row className="justify-content-md-center align-middle ">
          <Col sm={8}>
            <h1 className="text-center bg-danger"> पंजीयन करें </h1>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  पूरा नाम
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    name="fullname"
                    value={FormData.fullname}
                    type="text"
                    placeholder="यहां पूरा नाम लिखें "
                    onChange={(e) =>
                      setFormData({ ...FormData, fullname: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  ई-मेल
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    name="email"
                    value={FormData.email}
                    type="email"
                    placeholder="यहां ई-मेल एड्रेस लिखें "
                    onChange={(e) =>
                      setFormData({ ...FormData, email: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  मोबाइल नम्बर
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    name="mobile"
                    value={FormData.mobile}
                    type="number"
                    placeholder="यहां मोबाइल नम्बर लिखें"
                    onChange={(e) =>
                      setFormData({ ...FormData, mobile: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  उम्र
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    name="age"
                    value={FormData.age}
                    type="number"
                    placeholder="यहां उम्र लिखें"
                    onChange={(e) =>
                      setFormData({ ...FormData, age: e.target.value })
                    }
                  />
                </Col>
                <Form.Label column sm={2} a>
                  लिंग
                </Form.Label>
                <Col sm={4} className="mt-2">
                  <Form.Check
                    inline
                    label="पुरूष"
                    type="radio"
                    value="Male"
                    checked={FormData.gender === "Male"}
                    onChange={(e) =>
                      setFormData({ ...FormData, gender: e.target.value })
                    }
                  />
                  <Form.Check
                    inline
                    label="महिला"
                    type="radio"
                    value="Female"
                    checked={FormData.gender === "Female"}
                    onChange={(e) =>
                      setFormData({ ...FormData, gender: e.target.value })
                    }
                  />
                  <Form.Check
                    inline
                    label="अन्य"
                    type="radio"
                    value="Other"
                    checked={FormData.gender === "Other"}
                    onChange={(e) =>
                      setFormData({ ...FormData, gender: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  विधानसभा
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example">
                    <option>--विधानसभा सिलेक्ट करें--</option>
                    <option value="91">बड़वारा</option>
                    <option value="92">विजयराघवगढ़</option>
                    <option value="93">मुड़वारा</option>
                    <option value="94">बहोरीबंद</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  विकासखण्ड
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example">
                    <option>--विकासखण्ड सिलेक्ट करें--</option>
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
                    <option>--ग्राम पंचायत सिलेक्ट करें--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
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
