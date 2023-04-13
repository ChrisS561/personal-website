import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import SocialMedia from "../Components/SocialMedia";
import Footer2 from "../Components/Footer2";
import "../Pages/PagesCSS/Contact.css";

const siteKey = "6Lc7KWwlAAAAADuXR98GHXzgcX8JzcrsIOkw2jEl";
const serviceId = "service_qkajsi9";
const templateId = "template_du1ow3i";
const userId = "uJpx4DXA_gp3IDEks";

function Contact() {
  const [captchaIsDone, setCaptchaDone] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const backgroundColor = "black";

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then(() => {
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
      })
      .catch(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
      })
      .finally(() => e.target.reset());
  }

  function handleCaptchaDone() {
    setCaptchaDone(true);
  }

  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form onSubmit={sendEmail}>
              <h1 className="text-center mb-4 slideInTop">Contact Me</h1>
              <p className="text-center mb-4 slideInTop">
                Don’t hesitate to reach out with the contact information on my{" "}
                <a href="/resume" style={{ color: "orange" }}>
                  resume
                </a>
                , or send a message using the form
              </p>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <FloatingLabel
                  controlId="formBasicMessage"
                  label="Enter your message"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    name="message"
                    style={{ height: "150px" }}
                    required
                  />
                </FloatingLabel>
              </Form.Group>
              <ReCAPTCHA sitekey={siteKey} size="normal" onChange={handleCaptchaDone} />
              {showSuccessMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  Your message has been sent successfully.
                </div>
              )}
              {showErrorMessage && (
                <div className="alert alert-danger mt-3" role="alert">
									Oops! Something went wrong. Please try again later.
								</div>
							)}
							<div className="text-center mt-3">
								<Button
									variant="primary"
									type="submit"
									disabled={!captchaIsDone}
								>
									Submit
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
			<SocialMedia />
			<Footer2 backgroundColor={backgroundColor}/>
		</>
	);
}

export default Contact;
