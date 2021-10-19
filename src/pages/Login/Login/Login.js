
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Please Login</h1>

            <Container>
            <Form>
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
      </Form.Group>
          <Button variant="primary" type="submit">
       Submit
    </Button>
              </Form>
   </Container>
            <br />
 <br />
 <br />
            <Link to="/register">
    Not Register Yet?
    </Link>

<br />


  <p>Or</p>
  <hr />
  

            <button className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;