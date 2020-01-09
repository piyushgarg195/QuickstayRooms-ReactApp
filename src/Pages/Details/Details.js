import React from "react";

//custom components
import Navbar from "../../Components/Navbar/Navbar";
// import Cities from "../../Components/City/Cities";
import Filter from "../../Components/Filter/Filter-details";
import Card from "../../Components/Cards/Card";

function Details() {
	var x = window.matchMedia("(max-width: 700px)");
	let filter;
	if (x.matches) {
		filter = "";
	} else {
		filter = <Filter />;
	}

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>{filter}</div>
			<div
				style={{ width: "100%", margin: "0 auto", padding: "5px 20px" }}
				className='row'
			>
				<div style={{ padding: 0 }} className='col-sm-3'>
					<Card />
				</div>
				<div style={{ padding: 0 }} className='col-sm-3'>
					<Card />
				</div>
				<div style={{ padding: 0 }} className='col-sm-3'>
					<Card />
				</div>
				<div style={{ padding: 0 }} className='col-sm-3'>
					<Card />
				</div>
			</div>
		</div>
	);
}

export default Details;
