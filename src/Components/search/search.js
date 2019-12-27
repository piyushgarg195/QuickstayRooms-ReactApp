import React from "react";

function Search() {
	return (
		<div
			class='row'
			style={{
				marginLeft: "auto",
				marginRight: "auto",
				width: "50%",
				marginTop: "15%"
			}}
		>
			<div class='col-md-12'>
				<div class='form-group'>
					<div class='input-group mb-4'>
						<div class='input-group-prepend'>
							<span class='input-group-text'>
								<i class='ni ni-zoom-split-in'></i>
							</span>
						</div>
						<input class='form-control' placeholder='Search' type='text' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
