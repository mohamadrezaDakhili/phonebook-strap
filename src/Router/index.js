import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../view/Contact/Contact";

export default function Router() {
  return (
    <Switch>
      <Route path="/create">
        <h1>Hello world!</h1>
      </Route>
      <Route path="/" component={Contact} />
    </Switch>
  );
}
