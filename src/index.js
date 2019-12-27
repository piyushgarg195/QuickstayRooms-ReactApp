import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Default Components
// import Navbar2 from "./Components/Navbar/Navbar2";

// Pages
import Home from "./Pages/Home/Home";

ReactDOM.render(
	<BrowserRouter>
		<div>
			{/* <Navbar2 /> */}
			<Switch>
				{/* Home Route */}
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
);
