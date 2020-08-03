import React from "react";
import NavHorizontal from "./Nav/NavHorizontal/NavHorizontal";

const Main = (props) => {
  const mainRef = React.useRef(null);
  return (
    <main id="navHorizontal" ref={mainRef}>
      <NavHorizontal {...props} mainRef={mainRef} />
    </main>
  );
};

export default Main;
