import React from "react";
import { Alert } from "react-bootstrap";

const MessageFeedback = ({ message, title , variant }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default MessageFeedback;
