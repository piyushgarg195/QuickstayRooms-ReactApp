import React from "react";
import "./PgDetail.css";

//custom components
import Carousel from "../carousel/Carousel";

function PgDetail() {
	var x = window.matchMedia("(max-width: 700px)");
	if (x.matches) {
		var size = true;
	}
	return (
		<div>
			<div style={{ width: "100%" }} className=' row pg-det-container'>
				<div style={{ backgroundColor: "#e9efff" }} className=' col-lg-6'>
					<div className='pg-img-container'>
						<div className='pg-img'>
							<Carousel />
						</div>
						<div
							style={{
								marginTop: 10,
								marginBottom: 10
							}}
							className='row'
						>
							<div className='col col-md-3 col-lg-4 col-xl-2 pg-texts'>
								<button type='button' class='btn btn-outline-default'>
									Exterior
								</button>
							</div>
							<div className='col col-md-3 col-lg-4 col-xl-2 pg-texts'>
								<button type='button' class='btn btn-outline-default'>
									Private
								</button>
							</div>
							<div className='col col-md-3 col-lg-4 col-xl-2 pg-texts'>
								<button type='button' class='btn btn-outline-default'>
									Two Sharing
								</button>
							</div>
							<div className='col col-md-3 col-lg-4 col-xl-2 pg-texts'>
								<button type='button' class='btn btn-outline-default'>
									Interior
								</button>
							</div>
						</div>
					</div>
					{/* pg specs container starts here */}
					<div className='pg-room-det-container'>
						<h3>Rooms Details</h3>
						<div id='pg-specs' className='row'>
							<div className='col col-lg-4 pg-room-det'>
								<h4 style={{ color: "black" }}>
									<i>Private room</i>
								</h4>
								<p>Rs.9999/per month</p>
							</div>
							<div className='hr'></div>
							<div className='col col-lg-4 pg-room-det'>
								<h4 style={{ color: "black" }}>
									<i>Two room </i>
								</h4>
								<p>Rs.4999/per month</p>
							</div>
							<div className='hr'></div>
							<div className='col col-lg-4 pg-room-det'>
								<h4 style={{ color: "black" }}>
									<i>Three room</i>
								</h4>
								<p>Rs.4999/per month</p>
							</div>
						</div>
					</div>
					{/* pg details container ends here */}
					{/* Amenities starts here */}
					<div className='pg-icons'>
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
					<div className='pg-Neighbourhood-container'>
						<h3>Neighbourhood</h3>
						<p>
							QuickStay is strategically placed nearby key office spaces and
							access roads
						</p>
						<div className='row'>
							<div className='col-lg-4 pg-nbr'>
								<p>Hotel</p>
								<span>500km away</span>
							</div>
							<div className='col-lg-4 pg-nbr'>
								<p>Saloon</p>
								<sapn>100km away</sapn>
							</div>
							<div className='col-lg-4 pg-nbr'>
								<p>Hospital</p>
								<sapn>10km away</sapn>
							</div>
							<div className='col-lg-4 pg-nbr'>
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
					<h4>Room Type</h4>
					<div style={{ padding: 10 }} className='row'>
						<div className='col-sm-4'>
							<div className='animated pg-sharing'>
								<p>Three Sharing</p>
								<p>Rs.4,999/- onwards</p>
							</div>
							<div className='animated pg-sharing pg-sharing-active'>
								<p>Two Sharing</p>
								<p>Rs.4,999/- onwards</p>
							</div>
							<div className='animated pg-sharing'>
								<p>Three Sharing</p>
								<p>Rs.4,999/- onwards</p>
							</div>
						</div>
						<div className='col-md-8'>
							<div className='row'>
								<div className='col-md-12 col-xl-4'>
									<div className='pg-rm-num-container'>
										<p>Room 1</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-6 col-lg-6'>
												<div class='custom-control custom-checkbox'>
													<input
														class='custom-control-input'
														id='room1-1'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room1-1'
													></label>
												</div>
											</div>
											<div className='col col-md-6 col-lg-6'>
												<div class='custom-control custom-checkbox'>
													<input
														class='custom-control-input'
														id='room1-2'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room1-2'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='pg-rm-num-container'>
										<p>Room 2</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room21'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room21'
													></label>
												</div>
											</div>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room22'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room22'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='pg-rm-num-container'>
										<p>Room 3</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room31'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room31'
													></label>
												</div>
											</div>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room32'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room32'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='pg-rm-num-container'>
										<p>Room 4</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room41'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room41'
													></label>
												</div>
											</div>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room42'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room42'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='pg-rm-num-container'>
										<p>Room 5</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room51'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room51'
													></label>
												</div>
											</div>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room52'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room52'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='pg-rm-num-container'>
										<p>Room 6</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room61'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room61'
													></label>
												</div>
											</div>
											<div className='col col-md-4 col-lg-6'>
												<div class='custom-control custom-checkbox '>
													<input
														// name='custom-checkbox-1'
														class='custom-control-input'
														id='room62'
														type='checkbox'
													/>
													<label
														class='custom-control-label'
														for='room62'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='pg-btns'>
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

export default PgDetail;
