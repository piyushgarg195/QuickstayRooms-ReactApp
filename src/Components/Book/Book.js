import React from "react";
import "./Book.css";

function Book() {
	return (
		<div>
			<div className='row'>
				{/* left side page start */}
				<div className='col-lg-6'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='pg-photo'>
								<p style={{ textAlign: "center", marginTop: 50 }}>PG PHOTOS</p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='pg-name'>
								<p>Abc PG</p>
								<p>Abc marg, Xyz city </p>
								<p>India-140603</p>
								<hr></hr>
								<p>Room Details</p>
								<p>2 sharing</p>
								<p>Rs. 6,999/- onwards</p>
								<a href='#'>Change</a>
							</div>
						</div>
						{/* details from starts */}
						<div className='col-lg-6 det-form'>
							<h6>Details</h6>
							<form className='form-group'>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-4'>
										<p>Name: </p>
									</div>
									<div className='col-lg-8'>
										<input
											type='text'
											className='form-control'
											placeholder='Name'
										/>
									</div>
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-4'>
										<p>Phone No. </p>
									</div>
									<div className='col-lg-8'>
										<input
											type='number'
											className='form-control'
											placeholder='Phone No'
										/>
									</div>
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-4'>
										<p>Your Joining Data: </p>
									</div>
									<div className='col-lg-8'>
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
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-6'>
										<div class='custom-control custom-radio'>
											<input
												name='custom-radio-1'
												class='custom-control-input'
												id='Male'
												type='radio'
											/>
											<label class='custom-control-label' for='Male'>
												Male
											</label>
										</div>
									</div>
									<div className='col-lg-6'>
										<div class='custom-control custom-radio'>
											<input
												name='custom-radio-1'
												class='custom-control-input'
												id='Female'
												type='radio'
											/>
											<label class='custom-control-label' for='Female'>
												Female
											</label>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-lg-12'>
										<button className='btn btn-primary save-btn'>SAVE</button>
									</div>
								</div>
							</form>
						</div>
						{/* details from ends */}
					</div>
				</div>
				{/* left side page ends */}
				{/* Right side page starts here */}
				<div className='col-lg-6 right-side-container'>
					<h2 style={{ textAlign: "center", color: "#b83227", marginTop: 10 }}>
						TOKEN AMOUNT
					</h2>
					<div style={{ padding: 10 }}>
						<p
							style={{
								fontWeight: 1000
							}}
						>
							For placing a booking request, a token amount is charged.
						</p>
						<p>
							Note: In case of a confirmed booking, this token amount will
							further be adjusted in your first month's rental.
						</p>
						<p>
							Otherwise, it will be refunded back to your orignal payment method
						</p>
					</div>
					{/* refral starts here */}
					<div className='refral row'>
						<div className='col-lg-6'>
							<input
								type='text'
								className='form-control'
								placeholder='I have a Referral Code'
							/>
						</div>
						<div className='col-lg-6'>
							<button className='btn btn-outline-primary'>Apply</button>
						</div>
					</div>
					<div className='refral row'>
						<div className='col-lg-6'>
							<input
								type='text'
								className='form-control'
								placeholder='I have a Promo Code'
							/>
						</div>
						<div className='col-lg-6'>
							<button className='btn btn-outline-primary'>Apply</button>
						</div>
					</div>
					{/* refral ends here */}
					{/* INVOICE STARTS HERE */}
					<div className='invoice'>
						<p>INVOICE</p>
						<div style={{ padding: 20 }}>
							<div className='row'>
								<div className='col-lg-6'>
									<p>Total Amount: </p>
								</div>
								<div className='col-lg-6'>
									<p>Rs. 1,000</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-6'>
									<p>Convenience Fee: </p>
								</div>
								<div className='col-lg-6'>
									<p>Rs. 30</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-6'>
									<p style={{ fontWeight: 800 }}>Payable Amount: </p>
								</div>
								<div className='col-lg-6'>
									<p style={{ fontWeight: 800 }}>Rs. 1,030</p>
								</div>
							</div>
						</div>
						<button className='btn btn-outline-primary pay-now'>PAY NOW</button>
					</div>
					{/* INVOICE ENDS HERE */}
				</div>
				{/* Right side page ends here */}
			</div>
		</div>
	);
}

export default Book;
