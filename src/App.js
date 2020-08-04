import React, { useState } from "react";
import "./App.css";
import Main from "./view/Main";
import NavVertical from "./view/Nav/NavVertical/NavVertical";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Context from "./Context";
import Router from "./Router";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Context.Provider
      value={{
        isOpen,
        toggle,
        push: (path) => props.history.push(path),
        search,
        setSearch,
      }}
    >
      <div className="boxMain p-0 m-0">
        <Main />
        <NavVertical />
      </div>
    </Context.Provider>
  );
}

export default App;
