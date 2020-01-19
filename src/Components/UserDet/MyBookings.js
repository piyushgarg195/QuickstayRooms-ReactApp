import React from "react";
import "./MyBookings.css";

function MyBookings() {
	return (
		<div>
			<div className='mybookings-container'>
				<h3 style={{ color: "black" }}>My Bookings</h3>
				<div className='mybookings-room-cards'>
					<div className='row'>
						<div className='col-lg-4 mybookings-room-img-container'>
							<img src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'></img>
						</div>
						<div className='col-lg-8 mybookings-room--details-container'>
							<div className='row'>
								<div className='col col-lg-6'>
									<h5>Abc PG</h5>
									<p>Abc Marg, xyz city</p>
									<p>India -1230198</p>
								</div>
								<div className='col col-lg-6'>
									<h5>Room Details</h5>
									<p>2 sharing</p>
									<p>Rs. 66999/-</p>
								</div>
								<div style={{ marginTop: 20 }} className='col-sm-6 col-lg-4'>
									<p>Move-in-date</p>
								</div>
								<div style={{ marginTop: 20 }} className='col-sm-6 col-lg-8'>
									<div style={{ width: "50%" }} class='form-group'>
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
							</div>
						</div>
					</div>
				</div>
				<div className='mybookings-room-cards'>
					<div className='row'>
						<div className='col-lg-4 mybookings-room-img-container'>
							<img src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'></img>
						</div>
						<div className='col-lg-8 mybookings-room--details-container'>
							<div className='row'>
								<div className='col col-lg-6'>
									<h5>Abc PG</h5>
									<p>Abc Marg, xyz city</p>
									<p>India -1230198</p>
								</div>
								<div className='col col-lg-6'>
									<h5>Room Details</h5>
									<p>2 sharing</p>
									<p>Rs. 66999/-</p>
								</div>
								<div style={{ marginTop: 20 }} className='col-sm-6 col-lg-4'>
									<p>Move-in-date</p>
								</div>
								<div style={{ marginTop: 20 }} className='col-sm-6 col-lg-8'>
									<div style={{ width: "50%" }} class='form-group'>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyBookings;
