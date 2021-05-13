import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}
