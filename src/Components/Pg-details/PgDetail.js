import React from "react";
import "./PgDetail.css";

//custom components
import Carousel from "../carousel/Carousel";

function PgDetail() {
	return (
		<div>
			<div style={{ width: "100%" }} className=' row pg-det-container'>
				<div className=' col-lg-6'>
					<div className='pg-img-container'>
						<div className='pg-img'>
							<Carousel />
						</div>
						<div className='row'>
							<div className='col col-md-4 col-xl-3 pg-texts'>
								{/* <p>Exterior</p> */}
								<button type='button' class='btn btn-outline-default'>
									Exterior
								</button>
							</div>
							<div className='col col-md-4 col-xl-3 pg-texts'>
								{/* <p>Private</p> */}
								<button type='button' class='btn btn-outline-default'>
									Private
								</button>
							</div>
							<div className='col col-md-3 col-xl-3 pg-texts'>
								{/* <p>Two sharing</p> */}
								<button type='button' class='btn btn-outline-default'>
									Two Sharing
								</button>
							</div>
							<div className='col col-md-4 col-xl-3 pg-texts'>
								{/* <p>Interior</p> */}
								<button type='button' class='btn btn-outline-default'>
									Interior
								</button>
							</div>
						</div>
					</div>
					{/* pg specs container starts here */}
					<div>
						<h3>Rooms Details</h3>
						<div id='pg-specs' className='row'>
							<div className='col col-lg-4 room-det'>
								<h4 style={{ color: "black" }}>
									<i>Private room</i>
								</h4>
								<p>Rs.9999/per month</p>
							</div>
							<div className='hr'></div>
							<div className='col col-lg-4 room-det'>
								<h4 style={{ color: "black" }}>
									<i>Two room </i>
								</h4>
								<p>Rs.4999/per month</p>
							</div>
							<div className='hr'></div>
							<div className='col col-lg-4 room-det'>
								<h4 style={{ color: "black" }}>
									<i>Three room</i>
								</h4>
								<p>Rs.4999/per month</p>
							</div>
						</div>
					</div>
					{/* pg details container ends here */}
					{/* Amenities starts here */}
					<div className='icons'>
						<h3>Amenities</h3>
						<div className='row'>
							<div className='col-lg-4'>
								<div className='row'>
									<div className='col-sm-1'>
										<i class='ni ni-atom'></i>
									</div>
									<div className='col-sm-1'>
										<p>AC</p>
									</div>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className='row'>
									<div className='col-sm-1'>
										<i class='ni ni-world-2'></i>
									</div>
									<div className='col-sm-1'>
										<p>WIFI</p>
									</div>
								</div>
							</div>
							<div className='col-lg-4'>
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
					<div>
						<h3>Neighbourhood</h3>
						<div className='row'>
							<div className='col-lg-4'>
								<p>
									Hotel <label>500km away</label>
								</p>
							</div>
							<div className='col-lg-4'>
								<p>
									Saloon <label>100km away</label>
								</p>
							</div>
						</div>
					</div>
					{/* Neighbourhood ends here */}
				</div>
				<div style={{ marginTop: 10 }} className=' col-lg-6'>
					<h4>Room Type</h4>
					<div style={{ padding: 10 }} className='row'>
						<div className='col-sm-3'>
							<div className='animated sharing'>
								<p>
									Three Sharing <span>Rs.4,999/- onwards</span>
								</p>
							</div>
							<div className='animated sharing'>
								<p>
									Two Sharing <span>Rs.4,999/- onwards</span>
								</p>
							</div>
							<div className='animated sharing'>
								<p>
									Three Sharing <span>Rs.4,999/- onwards</span>
								</p>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='row'>
								<div className='col-md-12 col-xl-4'>
									<div className='rm-num-container'>
										<p>Room 1</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4'>
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
											<div className='col col-md-4'>
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
									<div className='rm-num-container'>
										<p>Room 2</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4'>
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
											<div className='col col-md-4'>
												{/* <div className='rm-num-color-active'></div> */}
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
									<div className='rm-num-container'>
										<p>Room 3</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4'>
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
											<div className='col col-md-4'>
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
									<div className='rm-num-container'>
										<p>Room 4</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4'>
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
											<div className='col col-md-4'>
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
									<div className='rm-num-container'>
										<p>Room 5</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4'>
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
											<div className='col col-md-4'>
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
									<div className='rm-num-container'>
										<p>Room 6</p>
										<div
											style={{ marginLeft: "auto", marginRight: "auto" }}
											className='row'
										>
											<div className='col col-md-4'>
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
											<div className='col col-md-4'>
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
								<button type='button' class='btn btn-outline-danger'>
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
		</div>
	);
}

export default PgDetail;
