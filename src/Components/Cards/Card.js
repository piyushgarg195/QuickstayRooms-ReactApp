import React from "react";
import "./Cards.css";

function Card() {
	return (
		<div style={{ marginTop: 10, padding: 10 }}>
			<div className=''>
				<div className=''>
					<div className='card'>
						<div className='card-img'></div>
						<div className='card-text'>
							<div>
								<div>
									<div className='card-add'>
										<p>QS101</p>
										<p>Sector 22</p>
									</div>
									<div className='card-price'>
										<p>
											Starting at: <span>Rs.4.9999/-</span>
										</p>
									</div>
								</div>
								{/* <div className='col-sm-6'>
									<div className='text-icon'>
										<i class='ni ni-bold-left'></i>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
