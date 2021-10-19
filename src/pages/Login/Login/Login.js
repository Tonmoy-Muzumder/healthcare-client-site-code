import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <h1>Please Login</h1>

            <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail" required>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
             <Form.Text className="text-muted">
      We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword" required>
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
  

           <button onClick={signInUsingGoogle} className="btn btn-warning">Sign In With Google</button>
        </div>
    );
    
};

export default Login;
