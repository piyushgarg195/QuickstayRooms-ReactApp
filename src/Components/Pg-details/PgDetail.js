import React from "react";
import "./PgDetail.css";

function PgDetail() {
	return (
		<div>
			<div className='row'>
				<div className='col-sm-6'>
					<div className='pg-img-container'>
						<div className='pg-img'>
							<h1>PG IMAGES</h1>
						</div>
						<div className='row'>
							<div className='col-sm-2 pg-texts'>
								<p>Exterior</p>
							</div>
							<div className='col-sm-2 pg-texts'>
								<p>Private</p>
							</div>
							<div className='col-sm-2 pg-texts'>
								<p>Two sharing</p>
							</div>
							<div className='col-sm-2 pg-texts'>
								<p>Interior</p>
							</div>
						</div>
					</div>
				</div>
				<div className='col-sm-6'>
					<h4>Room Type</h4>
					<div className='row'>
						<div className='col-sm-3'>
							<div className='sharing'>
								<p>
									Three Sharing <span>Rs.4,999/- onwards</span>
								</p>
							</div>
							<div className='sharing sharing-active'>
								<p>
									Two Sharing <span>Rs.4,999/- onwards</span>
								</p>
							</div>
							<div className='sharing'>
								<p>
									Three Sharing <span>Rs.4,999/- onwards</span>
								</p>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='row'>
								<div className='col-sm-4'>
									<div className='rm-num-container'>
										<p>Room 1</p>
										<div className='row'>
											<div className='col-sm-6'>
												<div className='rm-num-color'></div>
											</div>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='rm-num-container'>
										<p>Room 2</p>
										<div className='row'>
											<div className='col-sm-6'>
												<div className='rm-num-color'></div>
											</div>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='rm-num-container'>
										<p>Room 3</p>
										<div className='row'>
											<div className='col-sm-6'>
												<div className='rm-num-color'></div>
											</div>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='rm-num-container'>
										<p>Room 4</p>
										<div className='row'>
											<div className='col-sm-6'>
												<div className='rm-num-color'></div>
											</div>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='rm-num-container'>
										<p>Room 5</p>
										<div className='row'>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='rm-num-container'>
										<p>Room 6</p>
										<div className='row'>
											<div className='col-sm-6'>
												<div className='rm-num-color-active'></div>
											</div>
											<div className='col-sm-6'>
												<div className='rm-num-color'></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='pg-btns'>
						<div className='row'>
							<div className='col-sm-6'>
								<button type='button' class='btn btn-outline-danger'>
									SCHEDULE A VISIT
								</button>
							</div>
							<div className='col-sm-6'>
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
