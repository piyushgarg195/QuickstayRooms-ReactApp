import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Default Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import Home from "./Pages/Home/Home";

ReactDOM.render(
<<<<<<< HEAD
	<BrowserRouter>
		<div>
			<Navbar />
			<Switch>
				{/* Home Route */}
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
=======
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
>>>>>>> 58b15cc7f002bb9a76eaa629948b1b2a9e07e897
);
