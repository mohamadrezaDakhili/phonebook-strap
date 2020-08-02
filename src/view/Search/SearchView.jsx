import React from "react";
import { Form, Input } from "reactstrap";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchView() {
  return (
    <Form>
      <div className="position-relative">
        <Input
          type="text"
          name="search"
          id="exampleSearch"
          placeholder="Search"
        />
        <RiSearch2Line
          className="position-absolute"
          style={{ top: "25%", left: 10 }}
        />
      </div>
    </Form>
  );
}
