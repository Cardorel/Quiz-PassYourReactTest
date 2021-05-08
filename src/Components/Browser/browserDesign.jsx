import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./browser.modules.scss";
import Header from "../Home/header";

const BrowserDesign = ({ children }) => {
  return (
    <Container className="w-75 m-auto browser-container">
      <Row className=" w-100 justify-content-center mt-4">
        <Col className="auto w-100">
          <div className="browser-content">
            <div className="header-browser">
              <div className="close-browser"></div>
              <div className="extend-browser"></div>
              <div className="hide-browser"></div>
            </div>
            <div className="input-browser">
              <p>passyourreacttest.com</p>
            </div>
            <div className="header-in-browser w-100">
              <Header />
              <div className="bg-color-behind-header top-header-color" />
              <div className="bg-color-behind-header bottom-header-color" />
            </div>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BrowserDesign;
