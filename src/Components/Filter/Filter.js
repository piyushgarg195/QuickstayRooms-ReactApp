import React from "react";

function Filter() {
	return (
		<div>
			<form>
				<div class='row'>
					<div class='col-md-6'>
						<div class='form-group'>
							<label style={{ color: "white" }}>Check-in</label>
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
					<div class='col-md-6'>
						<div class='form-group'>
							<label style={{ color: "white" }}>Gender</label>
							<select class='form-control'>
								<option>Male</option>
								<option>Female</option>
								<option>Others</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Filter;
