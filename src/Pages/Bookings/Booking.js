import React from "react";

//custom components
import Navbar from "../../Components/Navbar/Navbar";
import Filter from "../../Components/Filter/Filter";

function Booking() {
	return (
		<div style={{ fontFamily: "open-sans" }}>
			<div>
				<Navbar />
			</div>
			<div style={{ marginTop: 20 }}>
				<Filter />
			</div>
		</div>
	);
}

export default Booking;
