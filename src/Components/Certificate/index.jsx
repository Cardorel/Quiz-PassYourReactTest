import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import "./certificate.modules.scss";
import Signature from "../Signature/Signature";
import WithDataByEmail from "../../Api/FetchDataByEmail";

 function Certificate({data}) {
  const date = new Date();
  const DateOfToday =
    date.getDate().length > 0 ? date.getDate() : "0" + date.getDate();
  const Month =
    date.getMonth().length > 0 ? date.getMonth() : "0" + (date.getMonth() + 1);
  const fullDate = DateOfToday + "." + Month + "." + date.getFullYear();
  const {fullname , score} = data;

  return (
    <div className="certificate-container position-relative text-center">
      <div className="certificate-icons">
        <FontAwesomeIcon icon={faCertificate} size="3x" />
      </div>
      <p className="text-uppercase mt-2">AFRUK REACT JS ACADEMY</p>
      <h2 className="mb-4 appreciation">Certificate of Appreciation</h2>
      <small className="pt-4">is hereby granted to</small>
      <h1 className="mt-4 text-uppercase">{fullname}</h1>
      <p className="pb-4 pt-1">
        For outstanding performance in test with{" "}
        <span className="font-weight-bold">{score}</span>
      </p>
      <div className="d-flex justify-content-around align-content-center w-100 mt-1">
        <div className="w-100">
          <p className="m-0 p-0">{fullDate}</p>
          <div className="bar-down" />
          <p>Date</p>
        </div>
        <div className="w-100">
          <p className="m-0 p-0">AFRUK RJS ACADEMY</p>
          <div className="bar-down" />
          <p>Signature</p>
        </div>
      </div>
      <Signature />
    </div>
  );
}

export default WithDataByEmail(Certificate);
