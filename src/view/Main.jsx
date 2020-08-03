import React from "react";
import NavHorizontal from "./Nav/NavHorizontal/NavHorizontal";
import { axiosInstance } from "../api/index";
import { useState, useEffect } from "react";
import Contact from "./Contact/Contact";
import "./main.css";

const Main = (props) => {
  const mainRef = React.useRef(null);
  const [users, setUser] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(users);

  return (
    <main id="main-phoneBook" ref={mainRef}>
      <NavHorizontal {...props} mainRef={mainRef} />

      <Contact users={users} />
    </main>
  );
};

export default Main;
