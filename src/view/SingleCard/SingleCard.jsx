import React, { useContext, useState, useEffect } from "react";
import { axiosInstance } from "../../api/index";

import {
  Container,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
} from "reactstrap";
import Context from "../../Context";
import { useParams } from "react-router-dom";

const SingleCard = (props) => {
  const { id } = useParams();
  const context = useContext(Context);
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then((res) => {
        context.setPending(false);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container dir="ltr">
      <div
        style={{
          borderBottom: "2px solid #9f9f9f",
          width: "100%",
        }}
        className="mt-3"
      ></div>
      <Card>
        <CardHeader>{user.name}</CardHeader>
        <CardImg
          className={"rounded-0"}
          top
          width="100%"
          src={"https://picsum.photos/700/200"}
          alt="Card image cap"
        />
        <CardBody>
          email: {user.email}
          <br />
          name: {user.name}
          <br />
          phone: {user.phone}
          <br />
          username: {user.username}
          <br />
          website: {user.website}
          <br />
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </Container>
  );
};

export default SingleCard;
