import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { auth } from "../../Firebase/firebase.utils";
import { IsLoadingAction } from "../../Redux/Actions";

function DropdownMenu({ history }) {
  const dispatch = useDispatch();
  const { displayName, email } = useSelector((state) => state.User);
  let isAdmin =
    email === "cardorelngassakiadmin@passyourreacttest.com" ? true : false;

    const handleSignOut = () => {
      setTimeout(() => { 
        window.location.reload();
    }, 1000) 
      auth.signOut();
      history.push('/');
      dispatch(IsLoadingAction(true))
    }

  return (
    <NavDropdown
      className="mr-4"
      title={displayName.slice(0, 2).toUpperCase()}
      id="nav-dropdown"
    >
      {isAdmin && (
        <div>
          <NavDropdown.Item
            onClick={() => history.push("/Admin/gfhy475jvb01-548pokh897phju-35lois/Add-Question")}
            className="navDropItem"
            eventKey="4.1"
          >
            Admin Panel
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </div>
      )}
      <NavDropdown.Item
        className="navDropItem"
        onClick={handleSignOut}
        eventKey="4.4"
      >
        Sign out
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default withRouter(DropdownMenu);
