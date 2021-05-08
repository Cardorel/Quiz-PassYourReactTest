import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

export default function TestQuestion({
  question,
  currentQuestion,
  onClickToNextQuestion,
  isChecked,
  setcurrentAnswer,
}) {
  const {
    quest,
    optionA,
    optionB,
    optionC,
    optionD
  } = question[currentQuestion];
  const timers = useSelector((t) => t.Timer);

  return (
    <div>
      <div className="question-container">
        <p>
          Time <span>{timers}</span>
        </p>
        <Form>
          <h4 className="text-center">{quest}</h4>
          <Form.Group controlId="optionA">
            <Form.Check
              className="m-4"
              type="radio"
              value={optionA || ''}
              name="question"
              label={optionA}
              onChange={(e) => setcurrentAnswer(e.target.value)}
              checked={isChecked}
            />
          </Form.Group>
          <Form.Group controlId="optionB">
            <Form.Check
              className="m-4"
              type="radio"
              value={optionB || ''}
              name="question"
              label={optionB}
              onChange={(e) => setcurrentAnswer(e.target.value)}
              checked={isChecked}
            />
          </Form.Group>
          <Form.Group controlId="optionC">
            <Form.Check
              className="m-4"
              type="radio"
              value={optionC || ''}
              name="question"
              label={optionC}
              onChange={(e) => setcurrentAnswer(e.target.value)}
              checked={isChecked}
            />
          </Form.Group>
          <Form.Group controlId="optionD">
            <Form.Check
              className="m-4"
              type="radio"
              value={optionD || ''}
              name="question"
              label={optionD}
              onChange={(e) => setcurrentAnswer(e.target.value)}
              checked={isChecked}
            />
          </Form.Group>
          <div className="text-center">
            <Button
              className="m-4 w-25"
              variant="primary"
              onClick={onClickToNextQuestion}
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
