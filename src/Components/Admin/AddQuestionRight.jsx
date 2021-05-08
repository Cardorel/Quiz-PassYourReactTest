import React from "react";
import { Form } from "react-bootstrap";

export default function AddQuestionRight({
  setOptionA,
  setOptionB,
  setCorrectA,
  optionA,
  optionB,
  correctA
}) {
  return (
    <div className="w-100 pr-2">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Option A</Form.Label>
        <Form.Control
          onChange={(e) => setOptionA(e.target.value)}
          type="text"
          value={optionA}
          placeholder="Option A..."
        />
      </Form.Group>
      <Form.Group controlId="formBasicOptionB">
        <Form.Label>Option B</Form.Label>
        <Form.Control
          onChange={(e) => setOptionB(e.target.value)}
          type="text"
          value={optionB}
          placeholder="Option B..."
        />
      </Form.Group>
      <Form.Group controlId="formBasicCorrectA">
        <Form.Label>Correct answer A</Form.Label>
        <Form.Control
          onChange={(e) => setCorrectA(e.target.value)}
          type="text"
          value={correctA}
          placeholder="Enter correct answer A"
        />
      </Form.Group>
    </div>
  );
}
