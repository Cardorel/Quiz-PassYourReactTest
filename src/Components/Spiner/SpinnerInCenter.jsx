import React from "react";
import { Spinner } from "react-bootstrap";
import "./spinner.modules.scss";

export default function SpinnerInCenter() {
  return (
    <div className="spinnerInCenter">
      <Spinner variant="info" animation="grow" />
    </div>
  );
}
