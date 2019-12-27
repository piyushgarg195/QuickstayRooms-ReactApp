import React from "react";

function Form() {
	return (
		<div>
			<form>
				<div class='row'>
					<div class='col-md-3 col-sm-6 col-xs-6'>
						<div class='form-group'>
							<label>City</label>
							<select
								style={{ background: "#b83227", color: "white" }}
								className='form-control'
							>
								<option>Chandigarh</option>
								<option>Jaipur</option>
								<option>Mumbai</option>
							</select>
						</div>
					</div>
					<div className='col-md-3 col-sm-6 col-xs-6'>
						<div class='form-group'>
							<label>Check-in</label>
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
					<div class='col-md-3 col-sm-6 col-xs-6'>
						<div class='form-group'>
							<label>Months</label>
							<select
								style={{ background: "#b83227", color: "white" }}
								className='form-control'
							>
								<option>1 Month</option>
								<option>2 Month</option>
								<option>3 Month</option>
								<option>4 Month</option>
							</select>
						</div>
					</div>
					<div class='col-md-3 col-sm-6 col-xs-6'>
						<div class='form-group'>
							<label>Category</label>
							<select
								style={{ background: "#b83227", color: "white" }}
								className='form-control'
							>
								<option>Boys</option>
								<option>Girls</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
