import React, { useState, useEffect } from "react";
import "./Filter.css";

function Filter() {
	const [showfilter, setShowFilter] = useState(true);
	useEffect(() => {}, [showfilter]);
	return (
		<div>
			<a href='/' className='cancel-filter'>
				&times;
			</a>
			<div className='filter-title-container'>
				<h2>
					QuickStay,
					<span className='tilte-city-name'>
						Chandigarh
						<i
							onClick={() => {
								{
									showfilter ? setShowFilter(false) : setShowFilter(true);
								}
								console.log(showfilter);
							}}
							class='ni ni-bold-down'
						></i>
					</span>
				</h2>
			</div>
			<div
				style={{ display: showfilter ? "" : "none" }}
				className='filter-content-container animate'
			>
				<p>Select your preferred location: </p>
				<div className='row'>
					<div className='col col-lg-1'>
						<button type='button' class='btn btn-outline-info'>
							Sector 22
						</button>
					</div>
					<div className='col col-lg-1'>
						<button type='button' class='btn btn-outline-info'>
							Sector 34
						</button>
					</div>
					<div className='col col-lg-1'>
						<button type='button' class='btn btn-outline-info'>
							Sector 20
						</button>
					</div>
				</div>
				<p>Loking for: </p>
				<div className='row'>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='men'
								type='radio'
							/>
							<label class='custom-control-label' for='men'>
								Men
							</label>
						</div>
					</div>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='women'
								type='radio'
							/>
							<label class='custom-control-label' for='women'>
								Women
							</label>
						</div>
					</div>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='unisex'
								type='radio'
							/>
							<label class='custom-control-label' for='unisex'>
								Unisex
							</label>
						</div>
					</div>
				</div>
				<p>Kind of Property</p>
				<div className='row'>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='Flat'
								type='radio'
							/>
							<label class='custom-control-label' for='Flat'>
								Flat
							</label>
						</div>
					</div>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='PG'
								type='radio'
							/>
							<label class='custom-control-label' for='PG'>
								PG
							</label>
						</div>
					</div>
				</div>
				<p>Would you like to include Food?</p>
				<div className='row'>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='Yes'
								type='radio'
							/>
							<label class='custom-control-label' for='Yes'>
								Yes
							</label>
						</div>
					</div>
					<div className='col col-lg-1'>
						<div class='custom-control custom-radio'>
							<input
								name='custom-radio-1'
								class='custom-control-input'
								id='No'
								type='radio'
							/>
							<label class='custom-control-label' for='No'>
								No
							</label>
						</div>
					</div>
				</div>

				<p>When are you planning to move in? </p>
				<div className='row'>
					<div className='col-lg-2'>
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
		</div>
	);
}

export default Filter;
