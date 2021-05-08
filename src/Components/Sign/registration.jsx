import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrowserDesign from "../Browser/browserDesign";
import { auth, createUserProfil } from "../../Firebase/firebase.utils";

export default function Registration() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserSubmit = async (e) => {
   e.preventDefault();
    if (
      fullname.trim().length > 0 &&
      email.trim().length > 0 &&
      password.trim().length > 0
    ) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfil(user, { displayName: fullname });
        setEmail("");
        setFullName("");
        setPassword("");
        
      } catch (error) {
        
      }
    } else {
      alert("Check all input");
    }
  };

  return (
    <BrowserDesign>
      <div className="w-75 m-auto signin-container">
        <h2 className="text-uppercase text-center pb-3">Registration</h2>
        <Form onSubmit={handleUserSubmit}>
          <Form.Group controlId="formBasicfullname">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              required
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full name"
              value={fullname}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Text>
              I have an account
              <Link to="/account/log_in-pass-your-test-react.1245a54789g6987b/SignUp"> Sign in</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">Sign in</Button>
        </Form>
      </div>
    </BrowserDesign>
  );
}
