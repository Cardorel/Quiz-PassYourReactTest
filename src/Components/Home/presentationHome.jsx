import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const PresentationHome = ({ history }) => {
  const user = useSelector((state) => state.User);
  return (
    <div className="w-75 m-auto d-flex justify-content-between browser-design-conatiner-all">
      <div className="w-50 align-self-center">
        <h2 className="text-uppercase text-primary title-home">ReactJS online Quiz</h2>
        <p className="text-presentation">
          This test assesses candidates'knowledge of programming using the
          React/ReactJS library and their abitility to leverage commonly used
          programming patterns.
        </p>
        <Button
          className="text-uppercase btn-pass-your-test"
          onClick={() =>
            user == null
              ? history.push(
                  "/account/log_in-pass-your-test-react.1245a54789g6987b/SignUp"
                )
              : history.push(
                  "/next-step-to-the-test/1fgh5034tyui6897o45/gotothetest"
                )
          }
        >
          Get your test
        </Button>
      </div>
      <div className="container-image">
        <img height="300" src="/Image/quiz.jpg" alt="testImage" />
      </div>
    </div>
  );
};

export default PresentationHome;
