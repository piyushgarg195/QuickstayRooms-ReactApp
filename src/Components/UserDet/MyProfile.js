import React from "react";

import "./MyProfile.css";

function MyProfile() {
	return (
		<div>
			<h3 style={{ color: "black" }}>My Profile</h3>
			<div className='row'>
				<div className='col-lg-4'>
					<a
						href='#'
						style={{
							fontSize: "large",
							color: "black",
							borderBottom: "4px solid black"
						}}
					>
						My Profile
					</a>
				</div>
				<div className='col-lg-4'>
					<a href='#' style={{ fontSize: "large", color: "black" }}>
						Some more information
					</a>
				</div>
			</div>
			<hr style={{ margin: 0 }} />
			<div className='row'>
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
		</div>
	);
}

export default MyProfile;
