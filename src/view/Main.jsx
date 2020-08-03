import React from "react";
import NavHorizontal from "./Nav/NavHorizontal/NavHorizontal";
import { axiosInstance } from "../api/index";
import { useState, useEffect } from "react";

const Main = (props) => {
  const mainRef = React.useRef(null);
  const [users, setUser] = useState([]);

  // const useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  useEffect(() => {
    if (users.length === 0)
      axiosInstance
        .get("/users")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  console.log(users);

  return (
    <main id="navHorizontal" ref={mainRef}>
      <NavHorizontal {...props} mainRef={mainRef} />
      {/* <MainRouter /> */}
    </main>
  );
};

export default Main;
