import React, { useState } from "react";
import { Navbar } from "reactstrap";
import "./Nav.css";
import imgUser from "../../img/user.jpg";
// import imgNotif from "../../img/notif.svg";
import imgMenu from "../../img/menu.svg";
import { IoMdNotifications } from "react-icons/io";

const NavBarPhoneBook = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const btnNavHandler = () => {
    let navHorizontal = document.getElementById("navHorizontal");
    let navVertical = document.getElementById("navVertical");
    toggle();
    if (isOpen === false) {
      navHorizontal.style.width = "95%";
      navVertical.style.display = "block";
      navHorizontal.style.borderTopLeftRadius = "25px";
      navHorizontal.style.borderBottomLeftRadius = "25px";
    } else {
      navHorizontal.style.width = "100%";
      navVertical.style.display = "none";
      navHorizontal.style.borderRadius = "0";
    }
  };

  return (
    <div id="navHorizontal">
      <Navbar>
        <div>
          <img className="imgUser" src={imgUser} alt="test" width="50px" />
          {/* <img className="mr-3" src={imgNotif} alt="notif" width="25px" /> */}
          <IoMdNotifications style={{ fontSize: "25px" }} className="mr-3" />
        </div>
        <div>
          <img
            onClick={btnNavHandler}
            id="imgMenu"
            src={imgMenu}
            alt="menu"
            width="25px"
          />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBarPhoneBook;
