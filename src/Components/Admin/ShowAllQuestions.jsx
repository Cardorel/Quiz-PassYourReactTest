import { Alert, Button, Pagination } from "react-bootstrap";
import React, { useState } from "react";
import { WithData } from "../../Api/FetchData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BrowserDesign from "../Browser/browserDesign";
import DeleteData from "../../Api/DeleteData";
import "./Admin.modules.scss";

const ShowAllQuestions = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionPerPage] = useState(4);
  const indexOfLastPage = currentPage * questionPerPage;
  const indexOfFirstQuestion = indexOfLastPage - questionPerPage;
  const currentQuestions = data.slice(indexOfFirstQuestion, indexOfLastPage);
  const pagesNumbers = [];
  const active = 1;

  for (let i = 1; i <= Math.ceil(data.length / questionPerPage); i++) {
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

  const handleDeleteQuestion = (id) => {
    DeleteData(id);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <BrowserDesign>
      <div className="w-75 m-auto browser-design-conatiner-all show-all-questions">
        <h6 className="text-center pb-2">List of Questions</h6>
        {currentQuestions.map((d) => (
          <Alert
            className="d-flex justify-content-between"
            key={d.questionId}
            variant="info"
          >
            <p className="pr-2">{d.quest}</p>
            <Button
              className="align-self-center"
              onClick={() => handleDeleteQuestion(d.questionId)}
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
            <Pagination.Next onClick={() => currentPage < data.length - 1 ? setCurrentPage(currentPage + 1) : ""} />
            <Pagination.Last onClick={() => setCurrentPage(data.length - 1)} />
          </Pagination>
        </div>
        <div className="text-right">
          <Link to="/Admin/gfhy475jvb01-548pokh897phju-35lois/Add-Question">
            <small className="mr-2">Add New Question</small>
          </Link>
          <Link to="/Admin/show-145lohkju-all-jhu45678974ghcbjoiuyt-users-1245loiu/Show-All-Users">
            <small>Show all users</small>
          </Link>
        </div>
      </div>
    </BrowserDesign>
  );
};

export default WithData(ShowAllQuestions, "Question");
