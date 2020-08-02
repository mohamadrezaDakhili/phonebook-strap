import React from "react";
import { Form, Input } from "reactstrap";

export default function SearchView() {
  return (
    <Form>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search"
      />
    </Form>
  );
}
