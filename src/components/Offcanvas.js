import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Offcanvas.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import SocialFollow from "./SocialFollow";

export default function Offcanva({ show, handleClose }) {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bqspy4j",
        "template_gcufh59",
        formRef.current,
        "Yku_pMm7R5lUl5VNe"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="contactTitle">Contact Me !!</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="fromArea">
            <div className="form-container">
              <Form ref={formRef} onSubmit={sendEmail}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message: </Form.Label>
                  <Form.Control
                    type="text"
                    name="message"
                    as="textarea"
                    rows={10}
                  />
                </Form.Group>
                <Button className="sendButton" variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </div>
          <div class="social">
            <SocialFollow />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
