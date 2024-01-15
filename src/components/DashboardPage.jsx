import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SurveyBox from "./SurveyBox";

function DashboardPage() {
  let username = "admin";
  return (
    <>
      <Container aria-labelledby="contained-modal-title-vcenter">
        <Row className="justify-content-md-center align-middle ">
          <Col>
            <div className="bg-danger p-3 text-end">
              Welcome
              <span className="h4"> {username}</span>, some give answer of
              question.
            </div>
            <div className="container mt-4">
              <div className="row">
                <SurveyBox />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardPage;
