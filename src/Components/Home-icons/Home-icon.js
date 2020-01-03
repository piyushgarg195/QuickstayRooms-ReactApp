import React from "react";
import "./Home-icon.css";

function HomeIcon() {
	return (
		<div
			style={{
				padding: 10,
				margin: "0 auto"
			}}
		>
			<div style={{ width: "100%" }} className='row icon-container'>
				<div className='col-lg-4 home-icon'>
					<img src='assets/homestay.png' />
				</div>
				<div className='col-lg-8 home-icon-text'>
					<p style={{ fontSize: "large", textAlign: "center" }}>
						HUNTING HOMESTAYS BECOMES EASY
					</p>
					<p>
						Forget about going door to door. Find PG rooms right from the
						comfort of your home. All you need to do is contact us through our
						website and leave rest of the work for us!
					</p>
				</div>
			</div>
			<div style={{ width: "100%" }} className='row icon-container'>
				<div className='col-lg-8 home-icon-text'>
					<p style={{ fontSize: "large", textAlign: "center" }}>
						QUALITY ASSURANCE
					</p>
					<p>
						We value quality craftsmanship and apply strong checks throughout
						the residence stay. You can be assured of reliable and fine-quality
						furniture in your stays.
					</p>
				</div>
				<div className='col-lg-4 home-icon'>
					<img src='assets/Quality.png' />
				</div>
			</div>
			<div style={{ width: "100%" }} className='row icon-container'>
				<div className='col-lg-4 home-icon'>
					<img src='assets/Pocket.png' />
				</div>
				<div className='col-lg-8 home-icon-text'>
					<p style={{ fontSize: "large", textAlign: "center" }}>
						POCKET FRIENDLY
					</p>
					<p>
						You don't need a broker and his time to find you a suitable home
						stay. QuickStay rooms are brokerage free! Opt for a private room or
						get yourself a company with two/three sharing rooms.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HomeIcon;
