import React, { useState } from "react";
import "./App.css";
import Main from "./view/Main";
import NavVertical from "./view/Nav/NavVertical/NavVertical";
import MainRouter from "./Router/MainRouter";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="boxMain p-0 m-0">
      <Main isOpen={isOpen} toggle={toggle} />
      <NavVertical isOpen={isOpen} toggle={toggle} />
      {/* <MainRouter /> */}
    </div>
  );
}

export default App;
