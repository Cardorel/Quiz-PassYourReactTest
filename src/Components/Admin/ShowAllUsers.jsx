import { Alert, Button, Pagination } from "react-bootstrap";
import React, { useState } from "react";
import { WithData } from "../../Api/FetchData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BrowserDesign from "../Browser/browserDesign";
import "./Admin.modules.scss";
import DeleteUser from "../../Api/DeleteUser";

const ShowAllUsers = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(4);
  const indexOfLastPage = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastPage - userPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastPage);
  const pagesNumbers = [];
  const active = 1;

  for (let i = 1; i <= Math.ceil(data.length / userPerPage); i++) {
    pagesNumbers.push(
      <Pagination.Item
        key={i}
        onClick={() => setCurrentPage(i)}
        active={i === active}
      >
        {i}
      </Pagination.Item>
    );
  }

  const handleDeleteUser = (id) => {
    DeleteUser(id);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <BrowserDesign>
      <div className="w-75 m-auto browser-design-conatiner-all show-all-Users">
        <h6 className="text-center pb-2">List of Users</h6>
        {currentUsers.map((d) => (
          <Alert
            className="d-flex justify-content-between align-items-center"
            key={d.userId}
            variant="info"
          >
            <div className="d-flex justify-content-between w-100 pr-3 align-self-center">
              <p>{d.fullname}</p>
              <p>{d.score}</p>
            </div>
            <Button
              className="align-self-center"
              onClick={() => handleDeleteUser(d.userId)}
            >
              Delete
            </Button>
          </Alert>
        ))}
        <div className="d-flex justify-content-center">
          <Pagination size="sm">
            <Pagination.First onClick={() => setCurrentPage(1)} />
            <Pagination.Prev onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : ""} />
            {pagesNumbers}
            <Pagination.Next onClick={() => currentPage < data.length ? setCurrentPage(currentPage + 1) : ""} />
            <Pagination.Last onClick={() => setCurrentPage(data.length - 1)} />
          </Pagination>
        </div>
        <div className="text-right">
          <Link to="/Admin/gfhy475jvb01-548pokh897phju-35lois/Add-Question">
            <small>Add New User</small>
          </Link>
        </div>
      </div>
    </BrowserDesign>
  );
};

export default WithData(ShowAllUsers, "User");
