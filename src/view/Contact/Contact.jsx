import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./UserCard/UserCard";
import Context from "../../Context";
import { axiosInstance } from "../../api";
import { useContext } from "react";

const Contact = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const context = useContext(Context);

  let filteredUser = () => {
    return users.filter((item) =>
      item.name.toLowerCase().startsWith(context.search.toLowerCase())
    );
  };

  return (
    <Container dir="ltr">
      <div
        style={{
          borderBottom: "2px solid #9f9f9f",
          width: "100%",
        }}
        className="mt-3"
      ></div>
      <Row className="mb-4">
        {filteredUser().map((item) => (
          <UserCard user={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
