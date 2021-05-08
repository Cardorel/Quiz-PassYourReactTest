import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CreateData from "../../Api/CreateData";
import BrowserDesign from "../Browser/browserDesign";
import AddQuestionLeft from "./AddQuestionLeft";
import AddQuestionRight from "./AddQuestionRight";
import './Admin.modules.scss'

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctA, setCorrectA] = useState("");
  const [correctB, setCorrectB] = useState("");

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (
      question.trim().length > 0 &&
      optionA.trim().length > 0 &&
      optionB.trim().length > 0 &&
      optionC.trim().length > 0 &&
      optionD.trim().length > 0 &&
      correctA.trim().length > 0
    ) {
      if (!(correctB.trim().length < 0)) {
        const params = {
          Quest: question,
          OptionA: optionA,
          OptionB: optionB,
          OptionC: optionC,
          OptionD: optionD,
          correctA,
          correctB: "null",
        };
        CreateData("Question", params);
      } else {
        const params = {
          Quest: question.trim(),
          OptionA: optionA.trim(),
          OptionB: optionB.trim(),
          OptionC: optionC.trim(),
          OptionD: optionD.trim(),
          correctA : correctA.trim(),
          correctB,
        };
        CreateData("Question", params);
      }
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectA("");
      setCorrectB("");
    } else {
      alert("check input....");
    }
  };

  return (
    <BrowserDesign>
      <div className="w-75 m-auto browser-design-conatiner-all add-question-container">
        <h6 className="text-center text-uppercase">Add a new Question</h6>
        <Form
          onSubmit={(e) => handleSubmitQuestion(e)}
          className="d-flex align-content-center flex-column"
        >
          <Form.Group controlId="formBasicQuestion">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter question..."
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <AddQuestionRight
              setOptionA={setOptionA}
              setOptionB={setOptionB}
              setCorrectA={setCorrectA}
              optionA={optionA}
              optionB={optionB}
              correctA={correctA}
            />
            <AddQuestionLeft
              setOptionC={setOptionC}
              setOptionD={setOptionD}
              setCorrectB={setCorrectB}
              correctB={correctB}
              optionC={optionC}
              optionD={optionD}
            />
          </div>
          <div className="text-center">
            <Button type="submit" className="w-25">
              Add Question
            </Button>
          </div>
        </Form>
        <div className="text-right m-1">
          <Link to="/Admin/show-145lohkju-all-jhu45678974lpoiuyt-questions-1245loiu/Show-All-Questions">
            <small>View all question</small>
          </Link>
        </div>
      </div>
    </BrowserDesign>
  );
}
