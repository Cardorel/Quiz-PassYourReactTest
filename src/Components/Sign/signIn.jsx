import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrowserDesign from "../Browser/browserDesign";
import {auth} from '../../Firebase/firebase.utils'
import "./sign.modules.scss";
import MessageFeedback from "../FeedBack";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState(null);

  const handleSubmitUser = async e => {
    e.preventDefault();
    let isNotEmptyOrWhiteSpace = email.trim().length > 0 && password.trim().length > 0
    if(isNotEmptyOrWhiteSpace)
    {
        try {
          await auth.signInWithEmailAndPassword(email , password);   
        } catch (error) {
          setError(`${email} does not exist or your password is wrong!`);
          setTimeout(() => {
            setError(null);
          }, 8000);
        }
    }
  }

  return (
    <div>
      <BrowserDesign>
      <div className="w-75 m-auto signin-container">
        <h2 className="text-uppercase text-center pb-3">Sign in</h2>
        <Form onSubmit={handleSubmitUser}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
           <div className="text-right mb-3 mr-3">
               <Link to="/forgot-password">Forgot Password?</Link>
           </div>
            <Form.Text>
              I do not have an account
              <Link to="/account/log_out/new-user.in.pass-your-react-test.03215lojuyt4578941jihg/Registration"> Register</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </BrowserDesign>
    {error && <div className="signInError"><MessageFeedback message={error} variant="danger" title="Error!"/></div>}
    </div>
  );
};

export default SignIn;
