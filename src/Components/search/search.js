import React from "react";

import "./search.css";

function Search() {
	return (
		<div
			class='row'
			style={{
				marginLeft: "auto",
				marginRight: "auto",
				width: "90%",
				marginTop: "5%"
			}}
		>
			<div class='col-lg-6'>
				<h2 style={{ color: "white" }}>LET US FIND YOU A COZY HOMESTAY.</h2>
				<div class='form-group'>
					<div class='input-group mb-4 input-placeholder'>
						<div class='input-group-prepend'></div>
						<input
							style={{ borderRadius: 20 }}
							class='form-control'
							placeholder='Search a homestay nearby...'
							type='text'
						/>
						{/* <span class='input-group-text'>
							<i class='ni ni-zoom-split-in'></i>
						</span> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
