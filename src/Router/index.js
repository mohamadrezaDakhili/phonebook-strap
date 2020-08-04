import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../view/Contact/Contact";
import SingleCard from "../view/SingleCard/SingleCard";

export default function Router() {
  return (
    <Switch>
      <Route path="/create">
        <h1>Hello world!</h1>
      </Route>

      <Route path="/message">
        <h1>Hello message!</h1>
      </Route>
      <Route path="/user/:id">
        <SingleCard></SingleCard>
      </Route>
      <Route path="/exit">
        <h1>Hello exit!</h1>
      </Route>
      <Route path="/contact">
        <h1>Hello contact!</h1>
      </Route>
      <Route path="/" component={Contact} />
    </Switch>
  );
}
