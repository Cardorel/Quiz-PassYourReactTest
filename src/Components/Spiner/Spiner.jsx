import React from "react";
import { Spinner } from "react-bootstrap";
import "./spinner.modules.scss";
import BrowserDesign from "../Browser/browserDesign";

const WithSpinner = () => {
  return (
    <BrowserDesign>
      <div className="w-75 h-50 m-auto browser-design-conatiner-all">
        <div className="my-spinner">
          <Spinner animation="grow" role="status" aria-hidden="true" as="span" size="sm" variant="info"/>
          <span className="text-info"> Loading...</span>
        </div>
      </div>
    </BrowserDesign>
  );
};

export default WithSpinner;
