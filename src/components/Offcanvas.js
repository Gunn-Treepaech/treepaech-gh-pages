import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./Offcanvas.css"

export default function Offcanva({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Me</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form action="https://formsubmit.co/g.treepaech@gmail.com" method="POST">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message: </Form.Label>
              <Form.Control type="text" name="name" as="textarea" rows={3} />
              <Button className="sendButton" variant="primary" type="submit">Send</Button>{' '}
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
