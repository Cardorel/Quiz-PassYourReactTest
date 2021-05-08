import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";
import BrowserDesign from "../Browser/browserDesign";
import MessageFeedback from "../FeedBack";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [variant, setVariant] = useState("danger");
  const [title, setTitle] = useState("Error!");

  const handleSubmitForgotPassword = async e => {
    e.preventDefault();
    if (email.trim().length > 0) {
      try {
      const result = await auth.fetchSignInMethodsForEmail(email);
        if(result.length > 0)
        {
            await auth.sendPasswordResetEmail(email);
            setEmail('');
            setVariant("success");
            setTitle("Success");
            setError("Please , you can check your mail!");
            setTimeout(() => {
              setError(null);
            }, 8000);
        }else{
            setError("No user was found with that email address.");
            setTimeout(() => {
              setError(null);
            }, 8000);
        }
      } catch (error) {
        console.error(error.message);
        
      }
    }
  };
  return (
    <div>
      <BrowserDesign>
        <div className="w-75 m-auto signin-container">
          <h4 className="text-uppercase text-center pb-3">
            Forgot your password?
          </h4>
          <p className="text-center text-muted">
            Don't worry! Resetting your password is easy. Just type in the email
            you registered to Pass Your React Test.
          </p>
          <Form onSubmit={handleSubmitForgotPassword}>
            <Form.Group controlId="formBasicEmailForgotPassword">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <div className="mb-2 mt-3 text-center">
              <Button
                variant="primary"
                className="mb-2 mt-3 w-50 text-center"
                type="submit"
              >
                SEND
              </Button>
            </div>
            <div className="text-right m-3">
              Did you remember your password?
              <Link to="/account/log_in-pass-your-test-react.1245a54789g6987b/SignUp">
                Try signing in
              </Link>
            </div>
          </Form>
        </div>
      </BrowserDesign>
      {error && (
        <div className="signInError">
          <MessageFeedback message={error} variant={variant} title={title} />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
