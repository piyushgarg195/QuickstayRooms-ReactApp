import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Default Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />

      <Switch>
        {/* Home Route */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* About Us */}
        <Route path="/about">
          <About />
        </Route>
        {/* Contact Us */}
        <Route path="/contact">
          <About />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
