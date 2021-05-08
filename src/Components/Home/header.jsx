import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./header.modules.scss";
import DropdownMenu from "./Dropdown";

const Header = () => {
  let currentUser = useSelector((state) => state.User);
  return (
    <Container>
      <Row className="justify-content-end align-items-center p-2 header-container">
        <Col xs="4" lg="2">
          <NavLink className="first-child-link" exact={true} activeStyle={{ color: "#ff5993" }} to="/">
            HOME
          </NavLink>
        </Col>
        <Col xs="4" lg="2">
          <NavLink activeStyle={{ color: "#ff5993" }} to="/contacts">
            CONTACTS
          </NavLink>
        </Col>
        <Col xs="4" lg="2">
          {currentUser != null ? (
            <DropdownMenu />
          ) : (
            <NavLink
              to="/account/log_in-pass-your-test-react.1245a54789g6987b/SignUp"
              className="last-child-link"
              activeStyle={{ color: "#ff5993" }}
            >
              SIGN IN
            </NavLink>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
