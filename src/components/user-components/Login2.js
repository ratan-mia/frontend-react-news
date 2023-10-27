import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, Routes,Navigate, useNavigate  } from 'react-router-dom';
import BgImage from "../../assets/images/signin.svg";


const Login2 = ({ handleUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("access_token", token);
  }, [token,loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          const { token,user } = response.data.data;
          setLoggedIn(true);
          setToken(token);
          setUser(user);
          handleUser(user);
          localStorage.setItem("access_token", token);
          // navigate('/profile');
        } else {
          // Authentication failed
          console.log("Authentication failed");
        }
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  };

  const handleLogout = () => {
    setToken(null);
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
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`, backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <Col xs={8} md={4} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5"  checked={loggedIn}
                onChange={(e) => setLoggedIn((prev) => !prev)} className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary"  type="submit" onClick={handleLogin} className="w-100">
                    Sign in
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
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
                    Not registered?
                    <Card.Link as={Link} to="/register" className="fw-bold">
                      {` Create account `}
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

export default Login2;