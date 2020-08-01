import React from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import NavBarPhoneBook from "./view/Nav/Nav";
import NavVertical from "./view/Nav/NavVertical/NavVertical";
function App() {
  return (
    <Row className="boxMain p-0 m-0">
      <NavBarPhoneBook />
      <NavVertical />
    </Row>
  );
}

export default App;
