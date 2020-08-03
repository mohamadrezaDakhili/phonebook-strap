import React from "react";
import { Navbar, Row } from "reactstrap";
import "./NavHorizontal.css";
import imgUser from "../../../img/user.jpg";
import imgMenu from "../../../img/menu.svg";
import { IoMdNotifications } from "react-icons/io";
import Search from "../../Search/Search";

export default function NavHorizontal(props) {
  const btnNavHandler = () => {
    const { mainRef } = props;
    props.toggle();
    if (mainRef.current && props.isOpen === false) {
      mainRef.current.style.flex = "1 0 calc(100% - 100px)";
      mainRef.current.style.borderBottomLeftRadius = "25px";
      mainRef.current.style.borderTopLeftRadius = "25px";
    } else {
      mainRef.current.style.borderRadius = "0";
      mainRef.current.style.flex = "1 0 calc(100%)";
    }
  };

  return (
    <Navbar>
      <div>
        <img className="imgUser" src={imgUser} alt="img user" width="50px" />
        <IoMdNotifications style={{ fontSize: "25px" }} className="mr-3" />
      </div>
      <Row className="p-0 m-0">
        <div className="ml-4">
          <Search handleChange={props.handleChange} search={props.search} />
        </div>
        <img
          onClick={btnNavHandler}
          id="imgMenu"
          src={imgMenu}
          alt="menu"
          width="25px"
        />
      </Row>
    </Navbar>
  );
}
