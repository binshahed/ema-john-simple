import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, setUser, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/"

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        history.push(redirect_uri );
        setUser(user);
        console.log(user);
      })
     
  };
  return (
    <div className="container ">
      <div className="text-center">
        <h1 className="text-center">Login</h1>
        <Form className="w-25 mx-auto">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="btn btn-primary" type="submit">
            Login
          </Button>
        </Form>
        <br />
        <p>
          New to Ema john? <Link to="/register">Register</Link>
        </p>
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
