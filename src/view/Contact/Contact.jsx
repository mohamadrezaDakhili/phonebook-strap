import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import UserCard from "./UserCard/UserCard";
import Context from "../../Context";
import { axiosInstance } from "../../api";
import { useContext } from "react";

const Contact = () => {
  const [users, setUser] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        context.setPending(false);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {context.pending ? (
        <div className="text-center">
          <Spinner color="success" />
        </div>
      ) : (
        <Row className="mb-4">
          {filteredUser().map((item) => (
            <UserCard user={item} key={item.id} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Contact;
