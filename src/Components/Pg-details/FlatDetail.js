import React from "react";
import "./FlatDetail.css";

//custom components
import Carousel from "../carousel/Carousel";

function FlatDetail() {
	var x = window.matchMedia("(max-width: 700px)");
	if (x.matches) {
		var size = true;
	}
	return (
		<div>
			<div style={{ width: "100%" }} className=' row flat-det-container'>
				<div style={{ backgroundColor: "#e9efff" }} className=' col-lg-6'>
					<div className='flat-img-container'>
						<div className='flat-img'>
							<Carousel />
						</div>
						<div
							style={{
								marginTop: 10,
								marginBottom: 10,
								display: "flex",
								justifyContent: "center"
							}}
							className='row'
						>
							<div className='col col-md-3 col-lg-4 col-xl-2 flat-texts'>
								<button type='button' class='btn btn-outline-default'>
									Exterior
								</button>
							</div>
							<div className='col col-md-3 col-lg-4 col-xl-2 flat-texts'>
								<button type='button' class='btn btn-outline-default'>
									Private
								</button>
							</div>
							<div className='col col-md-3 col-lg-4 col-xl-2 flat-texts'>
								<button type='button' class='btn btn-outline-default'>
									1bhk
								</button>
							</div>
							<div className='col col-md-3 col-lg-4 col-xl-2 flat-texts'>
								<button type='button' class='btn btn-outline-default'>
									2bhk
								</button>
							</div>
						</div>
					</div>
					{/* flat specs container starts here */}
					<div className='flat-room-det-container'>
						<h3>Rooms Details</h3>
						<div id='flat-specs' className='row'>
							<div className='col col-lg-4 room-det'>
								<h4 style={{ color: "black" }}>Private room</h4>
								<p>Rs.9999/per month</p>
							</div>
							<div className='hr'></div>
							<div className='col col-lg-4 room-det'>
								<h4 style={{ color: "black" }}>Two room</h4>
								<p>Rs.4999/per month</p>
							</div>
							<div className='hr'></div>
							<div className='col col-lg-4 room-det'>
								<h4 style={{ color: "black" }}>Three room</h4>
								<p>Rs.4999/per month</p>
							</div>
						</div>
					</div>
					{/* flat details container ends here */}
					{/* Amenities starts here */}
					<div className='flat-icons'>
						<h3>Amenities</h3>
						<div className='row'>
							<div className='col col-lg-4'>
								<div className='row'>
									<div className='col-sm-1'>
										<i class='ni ni-atom'></i>
									</div>
									<div className='col-sm-1'>
										<p>AC</p>
									</div>
								</div>
							</div>
							<div className='col col-lg-4'>
								<div className='row'>
									<div className='col-sm-1'>
										<i class='ni ni-world-2'></i>
									</div>
									<div className='col-sm-1'>
										<p>WIFI</p>
									</div>
								</div>
							</div>
							<div className='col col-lg-4'>
								<div className='row'>
									<div className='col-sm-1'>
										<i class='ni ni-camera-compact'></i>
									</div>
									<div className='col-sm-1'>
										<p>CCTV</p>
									</div>
								</div>
							</div>
							<div className='col col-lg-4'>
								<div className='row'>
									<div className='col-sm-1'>
										<i class='ni ni-camera-compact'></i>
									</div>
									<div className='col-sm-1'>
										<p>CCTV</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Amenities ends here */}
					{/* Neighbourhood stats here */}
					<div className='flat-Neighbourhood-container'>
						<h3>Neighbourhood</h3>
						<p>
							QuickStay is strategically placed nearby key office spaces and
							access roads
						</p>
						<div className='row'>
							<div className='col-lg-4 flat-nbr'>
								<p>Hotel</p>
								<span>500km away</span>
							</div>
							<div className='col-lg-4 flat-nbr'>
								<p>Saloon</p>
								<sapn>100km away</sapn>
							</div>
							<div className='col-lg-4 flat-nbr'>
								<p>Hospital</p>
								<sapn>10km away</sapn>
							</div>
							<div className='col-lg-4 flat-nbr'>
								<p>Club</p>
								<sapn>1m away</sapn>
							</div>
						</div>
					</div>
					{/* Neighbourhood ends here */}
				</div>
				<div
					style={{ marginTop: 10 }}
					className={size ? "col-lg-6" : "col-lg-6 fix-col"}
				>
					<div style={{ padding: 10 }} className='row '>
						<div className='col-lg-4'>
							<h4>Flat Type</h4>
						</div>
						<div className='col-lg-8'>
							<div
								style={{ padding: "0 10px", float: "right" }}
								className='row mr-auto ml-auto furnished-btns'
							>
								<div className='col-lg-6'>
									<button type='button' class='btn btn-outline-info'>
										Semi-furnished
									</button>
								</div>
								<div className='col-lg-6'>
									<button type='button' class='btn btn-outline-info'>
										Fully-furnished
									</button>
								</div>
							</div>
						</div>
					</div>
					<div style={{ padding: 10 }} className='row'>
						<div className='col-sm-4'>
							<div className='animated flat-sharing'>
								<p>1 bhk</p>
								<p>Rs.4,999/- onwards</p>
							</div>
							<div className='animated flat-sharing'>
								<p>2 bhk</p>
								<p>Rs.4,999/- onwards</p>
							</div>
							<div className='animated flat-sharing flat-sharing-active'>
								<p>3 bhk</p>
								<p>Rs.4,999/- onwards</p>
							</div>
						</div>
						<div className='col-md-8 flat-rm-num-container-container'>
							<div className='row'>
								<div className='col-md-12 col-xl-4'>
									<div
										style={{ backgroundColor: "#12cad6", color: "white" }}
										className='flat-rm-num-container'
									>
										<p>Flat No. </p>
										<p>102</p>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='flat-rm-num-container'>
										<p>Flat No. </p>
										<p>105</p>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='flat-rm-num-container'>
										<p>Flat No. </p>
										<p>301</p>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='flat-rm-num-container'>
										<p>Flat No. </p>
										<p>401</p>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='flat-rm-num-container'>
										<p>Flat No. </p>
										<p>403</p>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='flat-rm-num-container'>
										<p>Flat No. </p>
										<p>501</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flat-btns'>
						<div className='row'>
							<div className='col col-md-6'>
								<button
									type='button'
									class='btn btn-outline-danger'
									data-toggle='modal'
									data-target='#exampleModal'
								>
									SCHEDULE A VISIT
								</button>
							</div>
							<div className='col col-md-6'>
								<button type='button' class='btn btn-danger'>
									BOOK NOW
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			<h2>FOOTER COMING SOON</h2>
			{/*  Modal starts here */}
			<div
				class='modal fade'
				id='exampleModal'
				tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div class='modal-dialog modal-dialog-centered' role='document'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='exampleModalLabel'>
								SCHEDULE A VISIT
							</h5>
							<button
								type='button'
								class='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div class='modal-body'>
							<div className='row'>
								<div className='col-lg-12 modalContent'>
									<div className='row'>
										<div className='col-lg-4'>
											<p>Flat Prefrence: </p>
										</div>
										<div className='col-lg-4'>
											<button type='button' class='btn btn-outline-secondary'>
												semi-furnished
											</button>
										</div>
										<div className='col-lg-4'>
											<button type='button' class='btn btn-outline-secondary'>
												Fully-furnished
											</button>
										</div>
									</div>
								</div>
								<div className='col-lg-12 modalContent'>
									<div className='row'>
										<div className='col-lg-4'>
											<p>Arival Date: </p>
										</div>
										<div className='col-lg-4'>
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
								</div>
								<div className='col-lg-12 modalContent'>
									<div className='row'>
										<div className='col col-lg-4'>
											<p>Arival Time Slot: </p>
										</div>
										<div className='col col-lg-6'>
											<div className='row'>
												<div className='col-sm-6 col-lg-6'>
													<label className='radBtn'>
														<input type='radio' name='select' />
														<span>09AM-10AM</span>
													</label>
												</div>
												<div className='col-sm-6 col-lg-6'>
													<label className='radBtn'>
														<input type='radio' name='select' />
														<span>10AM-11AM</span>
													</label>
												</div>
												<div className='col-sm-6 col-lg-6'>
													<label className='radBtn'>
														<input type='radio' name='select' />
														<span>11AM-12PM</span>
													</label>
												</div>
												<div className='col-sm-6 col-lg-6'>
													<label className='radBtn'>
														<input type='radio' name='select' />
														<span>01PM-02PM</span>
													</label>
												</div>
												<div className='col-sm-6 col-lg-6'>
													<label className='radBtn'>
														<input type='radio' name='select' />
														<span>02PM-03PM</span>
													</label>
												</div>
												<div className='col-sm-6 col-lg-6'>
													<label className='radBtn'>
														<input type='radio' name='select' />
														<span>03PM-04PM</span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='modal-footer'>
							<button
								type='button'
								class='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='button' class='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
			{/*  Modal ends here */}
		</div>
	);
}

export default FlatDetail;
