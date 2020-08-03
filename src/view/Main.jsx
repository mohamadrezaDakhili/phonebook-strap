import React from "react";
import NavHorizontal from "./Nav/NavHorizontal/NavHorizontal";
import { axiosInstance } from "../api/index";
import { useState, useEffect } from "react";
import Contact from "./Contact/Contact";
import "./main.css";
import Search from "./Search/Search";

const Main = (props) => {
  const mainRef = React.useRef(null);
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  let filteredUser = users.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );
  return (
    <main id="main-phoneBook" ref={mainRef}>
      <NavHorizontal
        handleChange={handleChange}
        search={search}
        {...props}
        mainRef={mainRef}
      />
      <Contact filteredUser={filteredUser} />
    </main>
  );
};

export default Main;
