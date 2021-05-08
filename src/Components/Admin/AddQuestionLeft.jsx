import React from "react";
import { Form } from "react-bootstrap";

const AddQuestionLeft = ({ setOptionC, setOptionD, setCorrectB , optionC , optionD , correctB}) => {
  return (
    <div className="w-100 pl-2">
      <Form.Group controlId="formBasicOptionC">
        <Form.Label>Option C</Form.Label>
        <Form.Control value={optionC} onChange={e => setOptionC(e.target.value)} type="text" placeholder="Option C..." />
      </Form.Group>
      <Form.Group controlId="formBasicOptionD">
        <Form.Label>Option D</Form.Label>
        <Form.Control value={optionD} onChange={e => setOptionD(e.target.value)} type="text" placeholder="Option D" />
      </Form.Group>
      <Form.Group controlId="formBasicCorrectB">
        <Form.Label>Correct answer B</Form.Label>
        <Form.Control
          onChange={e => setCorrectB(e.target.value)}
          type="text"
          value={correctB}
          placeholder="Enter correct answer B"
        />
        <Form.Text className="text-muted small">
          if, you do not have value please leave it empty!
        </Form.Text>
      </Form.Group>
    </div>
  );
};

export default AddQuestionLeft;
