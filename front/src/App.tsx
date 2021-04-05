import Home from "@pages/Home";
import Signin from "@pages/Signin";
import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} />
      </Switch>
    </>
  );
}

export default App;
