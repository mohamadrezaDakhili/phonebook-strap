import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./UserCard/UserCard";

const Contact = ({ users }) => {
  return (
    <Container dir="ltr">
      <div
        style={{ borderBottom: "2px solid #9f9f9f", width: "100%" }}
        className="mt-3"
      ></div>
      <Row>
        {users.map((item) => (
          <UserCard user={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
