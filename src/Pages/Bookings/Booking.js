import React from "react";

//custom components
import Navbar from "../../Components/Navbar/Navbar";
import Filter from "../../Components/Filter/Filter";

function Booking() {
	return (
		<div style={{ fontFamily: "open-sans" }}>
			<div style={{ zIndex: 10, boxShadow: "1px 3px 1px #9E9E9E" }}>
				<Navbar />
			</div>
			<div style={{ backgroundColor: "#d9d9d9", padding: "1%" }}>
				<h4 style={{ color: "black" }}>
					PGs, Shared Flats Rooms for rent in India
				</h4>
				<h6 style={{ color: "black" }}>
					If you're looking for fully furnished residential co-living places
					then, you've landed on the right page. The below properties are ideal
					for both men and women. Also, suitable for students as well as working
					professionals who are looking for a comfortable and hassle-free stay.
					You are sure to experience comfort and freedom which you wouldn’t find
					elsewhere
				</h6>
			</div>
			<div style={{ marginTop: 20, padding: 10, backgroundColor: "#b83227" }}>
				<Filter />
			</div>
		</div>
	);
}

export default Booking;
