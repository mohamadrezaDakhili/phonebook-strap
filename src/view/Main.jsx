import React from "react";
import NavHorizontal from "./Nav/NavHorizontal/NavHorizontal";
import { axiosInstance } from "../api/index";
import { useState, useEffect } from "react";
import Contact from "./Contact/Contact";
import "./main.css";
import Search from "./Search/Search";
import Context from "../Context";
import Router from "../Router";

const Main = (props) => {
  const mainRef = React.useRef(null);
  return (
    <main id="main-phoneBook" ref={mainRef}>
      <Context.Consumer>
        {(value) => (
          <>
            <NavHorizontal {...value} mainRef={mainRef} />
            <Router />
          </>
        )}
      </Context.Consumer>
    </main>
  );
};

export default Main;
