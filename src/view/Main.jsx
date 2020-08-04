import React from "react";
import NavHorizontal from "./Nav/NavHorizontal/NavHorizontal";
import "./main.css";
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
