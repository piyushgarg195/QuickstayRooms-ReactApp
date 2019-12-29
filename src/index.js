import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Bookings/Booking";
import Details from "./Pages/Details/Details";
import Pg from "./Pages/PG/Pg";

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Switch>
				{/* Home Route */}
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/booking'>
					<Booking />
				</Route>
				<Route exact path='/details'>
					<Details />
				</Route>
				<Route exact path='/pg'>
					<Pg />
				</Route>
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
);
