import React from "react";
import "./NavVertical.css";
import { Row } from "reactstrap";
import logoPhoneBook from "../../../img/logo-phonebook.png";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdPermContactCalendar } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { BsPlusSquareFill } from "react-icons/bs";

const NavVertical = (props) => {
  return (
    <aside
      id="navVertical"
      style={{ overflow: `${!props.isOpen ? "hidden" : "visible"}` }}
    >
      <Row className={`${!props.isOpen ? "test" : ""} h-100 p-0 m-0`}>
        <div className="box-logo">
          <img
            style={{ transition: " 0.5s" }}
            src={logoPhoneBook}
            alt="logoPhoneBook"
            width="30px"
          />
        </div>
        <div className="box-item">
          <Row className="layoutItem mt-5 justify-content-center align-items-center">
            <BsPlusSquareFill className="iconStyle" />
          </Row>
          <Row className="layoutItem mt-5 justify-content-center align-items-center">
            <MdPermContactCalendar className="iconStyle" />
          </Row>
          <Row className="layoutItem mt-5 justify-content-center align-items-center">
            <FaPhoneAlt className="iconStyle" />
          </Row>
          <Row className="layoutItem mt-5 justify-content-center align-items-center">
            <TiMessages className="iconStyle" />
          </Row>
          <Row className="layoutItem mt-5 justify-content-center align-items-center">
            <FiLogOut className="iconStyle" />
          </Row>
        </div>
      </Row>
    </aside>
  );
};

export default NavVertical;
