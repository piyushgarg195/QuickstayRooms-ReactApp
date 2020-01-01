import React from "react";
import "./PgDetail.css";

function PgDetail() {
	return (
		<div>
			<div className=' row'>
				<div className='col-sm-6'>
					<div className='pg-img-container'>
						<div className='pg-img'>
							<h1>PG IMAGES</h1>
						</div>
						<div className='row'>
							<div className='col col-md-4 col-xl-2 pg-texts'>
								{/* <p>Exterior</p> */}
								<button type='button' class='btn btn-outline-default'>
									Exterior
								</button>
							</div>
							<div className='col col-md-4 col-xl-2 pg-texts'>
								{/* <p>Private</p> */}
								<button type='button' class='btn btn-outline-default'>
									Private
								</button>
							</div>
							<div className='col col-md-3 pg-texts'>
								{/* <p>Two sharing</p> */}
								<button type='button' class='btn btn-outline-default'>
									Two Sharing
								</button>
							</div>
							<div className='col col-md-4 col-xl-2 pg-texts'>
								{/* <p>Interior</p> */}
								<button type='button' class='btn btn-outline-default'>
									Interior
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='col-sm-6'>
					<h4>Room Type</h4>
					<div style={{ padding: 20 }} className='row'>
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
										<div className='row'>
											<div className='col col-md-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														checked
														id='room11'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room11'
													></label>
												</div>
											</div>
											<div className='col col-md-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room12'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room12'
													></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-xl-4'>
									<div className='rm-num-container'>
										<p>Room 2</p>
										<div className='row'>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room21'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room21'
													></label>
												</div>
											</div>
											<div className='col col-sm-6'>
												{/* <div className='rm-num-color-active'></div> */}
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room22'
														type='radio'
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
										<div className='row'>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room31'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room31'
													></label>
												</div>
											</div>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														checked
														id='room32'
														type='radio'
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
										<div className='row'>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room41'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room41'
													></label>
												</div>
											</div>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room42'
														type='radio'
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
										<div className='row'>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														checked
														id='room51'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room51'
													></label>
												</div>
											</div>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														checked
														id='room52'
														type='radio'
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
										<div className='row'>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room61'
														type='radio'
													/>
													<label
														class='custom-control-label'
														for='room61'
													></label>
												</div>
											</div>
											<div className='col col-sm-6'>
												<div class='custom-control custom-radio '>
													<input
														// name='custom-radio-1'
														class='custom-control-input'
														id='room62'
														checked
														type='radio'
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
