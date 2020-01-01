import React from "react";

// Custom css
import "./Cities.css";

function Cities() {
	return (
		<div>
			<div className='row' style={{ padding: 20, width: "100%" }}>
				<div className='col-sm-6'>
					<div className='row'>
						<div className='col-sm-2'>
							<div className='img'></div>
						</div>
						<div className='col-sm-2'>
							<p className='city-name'>Chandigarh</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6'>
					<div className='fact-container'>
						<p>FUN FACTS</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cities;
