import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

function SurveyBox() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, [open]);
  return (
    <>
      <div>This is a survey form for voters</div>
      <div className="container-lg m-3 ">
        <Fade in={open}>
          <div id="example-fade-text" className="border p-lg-5 ">
            <Form.Group as={Row} className="mb-3">
              <Form.Label row>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
              </Form.Label>
              <Row>
                <Form.Check inline label="पुरूष" type="radio" value="Male" />
                <Form.Check inline label="पुरूष" type="radio" value="Male" />
                <Form.Check inline label="पुरूष" type="radio" value="Male" />
                <Form.Check inline label="पुरूष" type="radio" value="Male" />
              </Row>
            </Form.Group>
          </div>
        </Fade>
        <div className="m-1">
          <Button
            className="float-start"
            onClick={() => setOpen(false)}
            aria-controls="example-fade-text"
            aria-expanded={false}
          >
            {`<<Previous`}
          </Button>
          <Button
            className="float-end"
            onClick={() => setOpen(false)}
            aria-controls="example-fade-text"
            aria-expanded={false}
          >
            {`Next>>`}
          </Button>
        </div>
      </div>
    </>
  );
}

export default SurveyBox;
