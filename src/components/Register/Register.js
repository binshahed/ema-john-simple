import Button from "@restart/ui/esm/Button";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { handleEmailSignIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    const email = data.email;
    const password = data.password;
    console.log(data);
    handleEmailSignIn(email, password);
    console.log(handleEmailSignIn);
  };

  return (
    <div className="container ">
      <div className="text-center">
        <h1 className="text-center">Create an account</h1>
        <Form className="w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3 " controlId="formBasicName">
            <Form.Control
              {...register("name", { required: true })}
              type="name"
              placeholder="Enter yourName"
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicName">
            <Form.Control
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter yourName"
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>

          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
          <br />

          <Button className="btn btn-primary" type="submit">
            Register
          </Button>
        </Form>
        <br />
        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
