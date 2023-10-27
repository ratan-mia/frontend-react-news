import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  Tab,
  Nav,
} from "@themesberg/react-bootstrap";
import { useAuth } from "../../utils/AuthProvider";

const UserPreference = ({ children }) => {
  const {user} = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  const [preferredSources, setPreferredSources] = useState("");
  const [preferredCategories, setPreferredCategories] = useState("");
  const [preferredAuthors, setPreferredAuthors] = useState("");

  const sourceOptions = [
    { id: "abc-news", name: "ABC News" },
    { id: "al-jazeera-english", name: "Al Jazeera English" },
    { id: "bbc-news", name: "BBC News" },
    // Add more predefined sources as needed
  ];

  const categoryOptions = [
    { id: "business", name: "Business" },
    { id: "entertainment", name: "Entertainment" },
    { id: "general", name: "General" },
    { id: "health", name: "Health" },
    
    // Add more predefined categories as needed
  ];

  const authorOptions = [
    { id: "author1", name: "Author 1" },
    { id: "author2", name: "Author 2" },
    { id: "author3", name: "Author 3" },
    // Add more predefined authors as needed
  ];

  const handleSavePreferences = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/preferences`, {
          preferredSources,
          preferredCategories,
          preferredAuthors,
        })
        .then((response) => {
          console.log(response.data); // Optional: Handle response
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error); // Optional: Handle error
          reject(error);
        });
    });
  };
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveAccountSettings = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/account-settings`, {
          username,
          password,
          newPassword,
          confirmPassword,
        })
        .then((response) => {
          console.log(response.data); // Optional: Handle response
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error); // Optional: Handle error
          reject(error);
        });
    });
  };
  

  return (
    <div>
      <Row className="justify-content-center">
        <Col xs={12} className="mb-4">
          <Tab.Container defaultActiveKey="preferences">
            <Row>
              <Col md={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="preferences">Preferences</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="account">Account Settings</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="preferences">
                    <Card border="light" className="bg-white shadow-sm mb-4">
                      <Card.Body>
                        <Form>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="preferredSources">
                                <Form.Label>Preferred Sources:</Form.Label>
                                <Form.Select
                                  value={preferredSources}
                                  onChange={(e) =>
                                    setPreferredSources(e.target.value)
                                  }
                                >
                                  {sourceOptions.map((source) => (
                                    <option key={source.id} value={source.id}>
                                      {source.name}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group id="preferredCategories">
                                <Form.Label>
                                  Preferred Categories:
                                </Form.Label>
                                <Form.Select
                                  value={preferredCategories}
                                  onChange={(e) =>
                                    setPreferredCategories(e.target.value)
                                  }
                                >
                                  {categoryOptions.map((category) => (
                                    <option
                                      key={category.id}
                                      value={category.id}
                                    >
                                      {category.name}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group id="preferredAuthors">
                                <Form.Label>Preferred Authors:</Form.Label>
                                <Form.Select
                                  value={preferredAuthors}
                                  onChange={(e) =>
                                    setPreferredAuthors(e.target.value)
                                  }
                                >
                                  {authorOptions.map((author) => (
                                    <option key={author.id} value={author.id}>
                                      {author.name}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSavePreferences}
                          >
                            Save Preferences
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="account">
                    <Card border="light" className="bg-white shadow-sm mb-4">
                      <Card.Body>
                        <h5 className="mb-4">Account Settings</h5>
                        <Form>
                        <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Enter your first name"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group id="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Enter your last name"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  required
                                  type="email"
                                  placeholder="name@company.com"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group id="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                  required
                                  type="tel"
                                  placeholder="+1 (123) 456-7890"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Enter your username"
                                  value={username}
                                  onChange={(e) =>
                                    setUsername(e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  required
                                  type="password"
                                  placeholder="Enter your password"
                                  value={password}
                                  onChange={(e) =>
                                    setPassword(e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="newPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                  required
                                  type="password"
                                  placeholder="Enter your new password"
                                  value={newPassword}
                                  onChange={(e) =>
                                    setNewPassword(e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group id="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                  required
                                  type="password"
                                  placeholder="Confirm your new password"
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSaveAccountSettings}
                          >
                            Save Account Settings
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  );
  return children;
};

export default UserPreference;
