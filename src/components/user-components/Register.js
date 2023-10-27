
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faPerson, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link , Routes, useNavigate } from 'react-router-dom';
import axios from "axios";

import BgImage from "../../assets/images/signin.svg";
import Login2 from "./Login2";



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(registered);
  }, [registered]);

  const handleRegistration = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, {
        name,
        email,
        password,
        confirm_password,
      })
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data.data;
          setRegistered(true);
          // localStorage.setItem("registered", true);
          localStorage.setItem('accessToken', token);
          console.log(token);
          navigate('/');
        } else {
          // Authentication failed
          console.log("Authentication failed");
        }
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  };
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to="/" className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`, backgroundRepeat:"no-repeat"}}>
            <Col xs={8} md={4} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4">

                <Form.Group id="name" className="mb-4">
                    <Form.Label>Your Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPerson} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Mr. John" />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" name="confirm_password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" onClick={handleRegistration} className="w-100">
                    Sign up
                  </Button>
                </Form>
{/* 
                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div> */}
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to="/login" className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Register;