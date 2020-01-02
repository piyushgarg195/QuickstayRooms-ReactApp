import React from "react";

//Custom components
import Navbar from "../../Components/Navbar/Navbar";
import FlatDetail from "../../Components/Pg-details/FlatDetail";

function Flat() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<FlatDetail />
			</div>
		</div>
	);
}

export default Flat;
