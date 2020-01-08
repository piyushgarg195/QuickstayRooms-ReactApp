import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Bookings/Booking";
import Details from "./Pages/Details/Details";
import Pg from "./Pages/PG/Pg";
import Flat from "./Pages/PG/Flat";
import Booknow from "./Pages/BookNow/BookNow";
import About from "./Pages/About/About";

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
				<Route exact path='/flat'>
					<Flat />
				</Route>
				<Route exact path='/book'>
					<Booknow />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
);
