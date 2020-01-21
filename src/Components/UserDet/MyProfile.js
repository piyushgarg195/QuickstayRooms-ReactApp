import React, { useState, useEffect } from "react";

import "./MyProfile.css";

function MyProfile() {
	const [myp, setmyp] = useState(true);
	const [smi, setsmi] = useState(false);
	const handelsetmyp = () => {
		setmyp(true);
		setsmi(false);
	};
	const handelsetsmi = () => {
		setmyp(false);
		setsmi(true);
	};
	useEffect(() => {});
	return (
		<div>
			<h3 style={{ color: "black" }}>My Profile</h3>
			<div className='row'>
				<div className='col col-lg-4'>
					<a
						href='#'
						onClick={() => handelsetmyp()}
						style={{
							fontSize: "large",
							color: "black",
							borderBottom: myp ? "3px solid black" : ""
						}}
					>
						My Profile
					</a>
				</div>
				<div className='col col-lg-4'>
					<a
						href='#'
						onClick={() => handelsetsmi()}
						style={{
							fontSize: "large",
							color: "black",
							borderBottom: smi ? "3px solid black" : ""
						}}
					>
						Some more information
					</a>
				</div>
			</div>
			<hr style={{ margin: 0 }} />
			{/* myprofile starts here */}
			<div style={{ display: myp ? "" : "none" }} className='row'>
				<div className='col-lg-4 myprofile-user-pic'>
					<img src='https://vignette.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest/scale-to-width-down/340?cb=20141230074301'></img>
				</div>
				<div className='col-lg-8 myprofile-user-details'>
					<div className='row'>
						<div className='col-lg-12'>
							<p>Full Name</p>
							<div class='form-group'>
								<input
									type='text'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='Full Name'
								/>
							</div>
						</div>
						<div className='col-lg-12'>
							<p>Gender</p>
							<div class='form-group'>
								<input
									type='text'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='Gender'
								/>
							</div>
						</div>
						<div className='col-lg-12'>
							<p>Phone Number</p>
							<div class='form-group'>
								<input
									type='number'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='Phone Number'
								/>
							</div>
						</div>
						<div className='col-lg-12'>
							<p>Email</p>
							<div class='form-group'>
								<input
									type='email'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='Email'
								/>
							</div>
						</div>
					</div>
					<button style={{ width: "80%" }} className='btn btn-primary'>
						SAVE
					</button>
				</div>
			</div>
			{/* myprofile ends here */}
			{/* some more information starts here */}
			<div style={{ display: smi ? "" : "none" }} className='row'>
				<div className='col-lg-12'>
					<p>What kind of food do you prefer?</p>
					<div className='row'>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='veg'
									class='custom-control-input'
									id='veg'
									type='radio'
								/>
								<label class='custom-control-label' for='veg'>
									veg
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='non-veg'
									class='custom-control-input'
									id='non-veg'
									type='radio'
								/>
								<label class='custom-control-label' for='non-veg'>
									non-veg
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='eggi'
									class='custom-control-input'
									id='eggi'
									type='radio'
								/>
								<label class='custom-control-label' for='eggi'>
									eggi
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-12'>
					<p>Do You smoke?</p>
					<div className='row'>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='yes'
									class='custom-control-input'
									id='yes'
									type='radio'
								/>
								<label class='custom-control-label' for='yes'>
									yes
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='no'
									class='custom-control-input'
									id='no'
									type='radio'
								/>
								<label class='custom-control-label' for='no'>
									no
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='socially'
									class='custom-control-input'
									id='socially'
									type='radio'
								/>
								<label class='custom-control-label' for='socially'>
									socially
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='choose not to answer'
									class='custom-control-input'
									id='choose not to answer'
									type='radio'
								/>
								<label class='custom-control-label' for='choose not to answer'>
									choose not to answer
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-12'>
					<p>Do You have any food alergy?</p>
					<div className='row'>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='alergy'
									class='custom-control-input'
									id='alergy-yes'
									type='radio'
								/>
								<label class='custom-control-label' for='alergy-yes'>
									yes
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='alergy'
									class='custom-control-input'
									id='alergy-no'
									type='radio'
								/>
								<label class='custom-control-label' for='alergy-no'>
									no
								</label>
							</div>
						</div>
					</div>
				</div>
				<hr style={{ margin: "0  auto", width: "100%" }} />
				<div className='col-lg-12'>
					<p>How did you hear about us?</p>
					<div className='row'>
						<div className='col-lg-3'>
							<div class='custom-control custom-checkbox mb-3'>
								<input
									class='custom-control-input'
									id='Google Search'
									type='checkbox'
								/>
								<label class='custom-control-label' for='Google Search'>
									Google Search
								</label>
							</div>
						</div>
						<div className='col-lg-3'>
							<div class='custom-control custom-checkbox mb-3'>
								<input
									class='custom-control-input'
									id='Online Ad'
									type='checkbox'
								/>
								<label class='custom-control-label' for='Online Ad'>
									Online Ad
								</label>
							</div>
						</div>
						<div className='col-lg-3'>
							<div class='custom-control custom-checkbox mb-3'>
								<input
									class='custom-control-input'
									id='QuickStay branding'
									type='checkbox'
								/>
								<label class='custom-control-label' for='QuickStay branding'>
									QuickStay branding
								</label>
							</div>
						</div>
						<div className='col-lg-3'>
							<div class='custom-control custom-checkbox mb-3'>
								<input
									class='custom-control-input'
									id='Pamphlets'
									type='checkbox'
								/>
								<label class='custom-control-label' for='Pamphlets'>
									Pamphlets
								</label>
							</div>
						</div>
						<div className='col-lg-3'>
							<div class='custom-control custom-checkbox mb-3'>
								<input
									class='custom-control-input'
									id='From an existing QuickStayer'
									type='checkbox'
								/>
								<label
									class='custom-control-label'
									for='From an existing QuickStayer'
								>
									From an existing QuickStayer
								</label>
							</div>
						</div>
						<div className='col-lg-3'>
							<div class='custom-control custom-checkbox mb-3'>
								<input
									class='custom-control-input'
									id='From a Friend'
									type='checkbox'
								/>
								<label class='custom-control-label' for='From a Friend'>
									From a Friend
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-12'>
					<p>For how long will you be staying?</p>
					<div className='row'>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='time'
									class='custom-control-input'
									id='time-3'
									type='radio'
								/>
								<label class='custom-control-label' for='time-3'>
									Below 3 months
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='time'
									class='custom-control-input'
									id='time-3-6'
									type='radio'
								/>
								<label class='custom-control-label' for='time-3-6'>
									3-6 months
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='time'
									class='custom-control-input'
									id='time-6-12'
									type='radio'
								/>
								<label class='custom-control-label' for='time-6-12'>
									6-12 months
								</label>
							</div>
						</div>
						<div className='col-lg-4'>
							<div class='custom-control custom-radio mb-3'>
								<input
									name='time'
									class='custom-control-input'
									id='time-12'
									type='radio'
								/>
								<label class='custom-control-label' for='time-12'>
									above 12 months
								</label>
							</div>
						</div>
					</div>
				</div>
				<button
					style={{ width: "80%", margin: "0 auto" }}
					className='btn btn-primary'
				>
					SAVE
				</button>
			</div>

			{/* some more information ends here */}
		</div>
	);
}

export default MyProfile;
