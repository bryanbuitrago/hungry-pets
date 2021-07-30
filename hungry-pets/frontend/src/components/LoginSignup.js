import React from "react";
import { Row, Form, Button, Container, Col } from "react-bootstrap";

const LoginSignup = () => {
  return (
    <div>
      {/* <Container> */}
      <Form>
        <Container>
          <Row>
            <Col xs={2}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Col>
            <Button xs={6} variant="outline-light" type="submit">
              Submit
            </Button>
          </Row>
        </Container>
      </Form>
      {/* </Container> */}
    </div>
  );
};

export default LoginSignup;
