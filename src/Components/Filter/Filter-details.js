import React from "react";
import "./Filter-details.css";

function Filter() {
	return (
		<div>
			<div className='filter-cotanier'>
				<div style={{ width: "100%" }} className='row rad'>
					<div className='col-sm-3'>
						<div class='form-group'>
							<div class='input-group input-group-alternative'>
								<div class='input-group-prepend'>
									<span class='input-group-text'>
										<i class='ni ni-calendar-grid-58'></i>
									</span>
								</div>
								<input
									class='form-control datepicker'
									placeholder='Select date'
									type='text'
									value='06/20/2019'
								/>
							</div>
						</div>
					</div>
					<div className='col-sm-3'>
						<div className='form-group'>
							<select className='form-control'>
								<option>Boys</option>
								<option>Girls</option>
							</select>
						</div>
					</div>
					<div className='col-sm-3'>
						<div className='form-group'>
							<select className='form-control'>
								<option>Food</option>
								<option>No Food</option>
							</select>
						</div>
					</div>
					<div className='col-sm-3'>
						<div className='form-group'>
							<select className='form-control'>
								<option>Locality</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;
