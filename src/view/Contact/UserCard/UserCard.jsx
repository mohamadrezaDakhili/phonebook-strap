import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Col, Card, CardTitle, CardText, Row } from "reactstrap";
import "./userCard.css";

const UserCard = ({ user }) => {
  return (
    <Col xs="12" md="7" lg="4" className="mt-3">
      <Card body className="box-card-user">
        <CardTitle>
          <Row className="p-0 m-0">
            <img
              className="imgUserContact"
              src={
                "https://api.adorable.io/avatars/256/Ali@adorable.png" + user.id
              }
              alt="img-user"
            />
            <Row className="p-0 m-0">
              <div className="d-flex flex-column justify-content-center">
                <div className="ml-2">{user.name}</div>
                <div className="ml-2">{user.phone}</div>
              </div>
            </Row>
          </Row>
        </CardTitle>
        <CardText>{user.email}</CardText>
        <Row className="p-0 m-0 justify-content-center">
          <Col sm="6">
            <Row className="p-0 m-0 mb-3 justify-content-around">
              <AiFillInstagram />
              <FaTelegramPlane />
              <FaTwitter />
              <FaLinkedinIn />
            </Row>
          </Col>
        </Row>
        <Col xs="12">
          <Row className="justify-content-end">
            <div className="singleCard">more..</div>
          </Row>
        </Col>
      </Card>
    </Col>
  );
};

export default UserCard;
