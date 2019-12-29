import React from "react";

//Custom components
import Navbar from "../../Components/Navbar/Navbar";
import PgDetail from "../../Components/Pg-details/PgDetail";

function Pg() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<PgDetail />
			</div>
		</div>
	);
}

export default Pg;
