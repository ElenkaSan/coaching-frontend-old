import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	CardTitle
} from 'reactstrap';
import Alert from 'react-bootstrap/Alert'
// import { BsArrow90DegUp }  from "react-icons/bs";
// import { FaSignInAlt } from "react-icons/fa";
// import { FiAlertCircle } from "react-icons/fi";

//Login form that is provided to user to add their username and password.
//This child component will send data to parent to check if they can be logged in or not.
//If unsuccessful, they will be told there is a problem.

function LoginForm({ login }) {
  const INITIAL_STATE = {
    username: '',
    password: ''
}
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const [hasLoginErrors, setHasLoginErrors] = useState(false);
  const [show, setShow] = useState(true);


  console.debug(
    "LoginForm",
    "formData=", formData,
    // "login=", typeof login,
    // "hasLoginErrors", hasLoginErrors,
  );

  //This handles the inputs as they are entered in by the user and saves to state. 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  };

  //This handles the submission by the user and will either be successful or not. 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await login({ ...formData });
    if (response.message === "success") {
      // navigate.push("/profile");
      navigate("/profile");
    }
    else {
      setHasLoginErrors(true);
    }
    setFormData(INITIAL_STATE);
  }

  return (
    <section className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <Card className="J">
        <CardBody>
            <CardTitle >
              <h4 className="font-weight-bold text-center text-light">User Login</h4>
            </CardTitle>
            <Form onSubmit={handleSubmit}  setLog={true}> 
              <FormGroup>
                {hasLoginErrors
                  ?
                  ( <>
                    <Alert show={show} variant="danger"> 
                      <div className="alert alert-dismissible fade show">
                        <p>Oh, no! <br></br>Incorrect username or password.
                       </p>
                       <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShow(false)}>
                          <span aria-hidden="true"> &times; </span> 
                        </button> 
                      </div>
                    </Alert>
                    {!show && <Button className="btn btn-sm btn-outline-danger float-right" onClick={() => setShow(true)} type="Show Alert">
                   X
                    {/* <FiAlertCircle /> */}
                    </Button>}
                  </> )
                  : null}
               <div className="form-group font-weight-bold font-italic text-warning">
                <Label htmlFor="username">Username </Label>
                <Input
                   id="username"
                   type="text"
                   name="username"
                   placeholder="Your username..."
                   value={formData.username}
                   onChange={handleChange}
                   required
                 />
               </div>
               <div className="form-group font-weight-bold font-italic text-warning">
                <Label htmlFor="password">Password </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  value={formData.password}
                  onChange={handleChange}
                  required
                 />
                </div>
                <Button className="btn btn-outline-info float-left" style={{ color: '#bfe64b' }} onSubmit={handleSubmit} type="Login"> 
                  <h4> Login 
                     {/* <FaSignInAlt /> */}
                     </h4>
                </Button>
                <Link className="btn btn-outline-warning float-right" to='/' type="Go Back">
                  <h4> Go Back
                    {/* <BsArrow90DegUp /> */}
                  </h4>
                </Link>
                </FormGroup>
            </Form>
        </CardBody>
    </Card>
  </section>
);
}

export default LoginForm;
