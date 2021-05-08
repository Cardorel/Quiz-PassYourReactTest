import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import BrowserDesign from "../Browser/browserDesign";
import { WithUser } from "../HOC";
import "./beforetest.modules.scss";

const GoToTest = ({ history }) => {
  const user = useSelector((state) => state.User);

  const handleGoToTest = () => {
    setTimeout(() => {
      window.location.reload();
    }, 8);
    history.push("/Test/245pl2563lokj5789/lokiut1245879/quiz");
  };

  return (
    <BrowserDesign>
      <div className="w-75 m-auto browser-design-conatiner-all">
        <div>
          <p className="text-center mb-4">
            Nice to meet you,
            <span className="ml-1 font-weight-bold">{user.displayName} !</span>
          </p>
          <p>Let's us tell you about Pass Your React Test.</p>
          <p className="ml-3">
            You will have 20 minutes for 20 questions. And each question will
            give you 1 point. At the end of this, you will be given a
            certificate with your garde mentioned .
          </p>
          <p className="ml-3">
            The cerificate can be printed or saved in your Computer in a Pdf
            format.
          </p>
          <p className="good-luck text-left ml-3">Good luck!</p>
          <div className="d-flex justify-content-center mt-2 mb-2">
            <Button className="text-capitalize" onClick={handleGoToTest}>
              Start a test now
            </Button>
          </div>
        </div>
      </div>
    </BrowserDesign>
  );
};

export default WithUser(GoToTest);
