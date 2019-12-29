import React from "react";

//custom components
import Navbar from "../../Components/Navbar/Navbar";
import Cities from "../../Components/City/Cities";
import Filter from "../../Components/Filter/Filter-details";
import Card from "../../Components/Cards/Card";

function Details() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Cities />
			</div>
			<div>
				<Filter />
			</div>
			<div className='row'>
				<div className='col-sm-3'>
					<Card />
				</div>
				<div className='col-sm-3'>
					<Card />
				</div>
				<div className='col-sm-3'>
					<Card />
				</div>
				<div className='col-sm-3'>
					<Card />
				</div>
			</div>
		</div>
	);
}

export default Details;
