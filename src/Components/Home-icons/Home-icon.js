import React from "react";
import Scrolls from "../Scrolls/Scroll";
import ScrollExperience from "../Scrolls/ScrollExperience";
import "./Home-icon.css";

function HomeIcon() {
	return (
		<div>
			<div
				style={{ width: "100%" }}
				className='home-findquickstay-container row'
			>
				<div className='col-lg-2 home-find-quickstay'>
					<img src='assets/homeIcons/old-key.png'></img>
					<p>Find QuickStay in</p>
				</div>
				<div className=' col-lg-10'>
					<Scrolls />
					{/* <div className='row home-find-quickstay-city-container'>
						<div className='col col-lg-2'>
							<div className='home-find-quickstay-city-cards'>
								<img src='assets/homeIcons/map.png'></img>
								<p>Chandigarh</p>
							</div>
						</div>
						<div className='col col-lg-2'>
							<div className='home-find-quickstay-city-cards'>
								<img src='assets/homeIcons/map.png'></img>
								<p>Mohali</p>
							</div>
						</div>
						<div className='col col-lg-2'>
							<div className='home-find-quickstay-city-cards'>
								<img src='assets/homeIcons/map.png'></img>
								<p>Panchkula</p>
							</div>
						</div>
						<div className='col col-lg-2'>
							<div className='home-find-quickstay-city-cards'>
								<img src='assets/homeIcons/map.png'></img>
								<p>Zirakpur</p>
							</div>
						</div>
						<div className='col col-lg-2'>
							<div className='home-find-quickstay-city-cards'>
								<img src='assets/homeIcons/map.png'></img>
								<p>Ambala</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<div
				style={{ width: "100%" }}
				className='home-quickstay-icons-container row'
			>
				<div className='col-lg-2 home-quickstay-icons-text'>
					<p id='home-quickstay-icons-text-p1'>QuickStay</p>
					<p id='home-quickstay-icons-text-p2'>ha to sahi h</p>
				</div>
				<div className=' col-lg-10'>
					<div className='row'>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/money-bag.png'></img>
							<p>No Brokerage</p>
							<span>Say bye-bye to </span>
							<span>Heavy Brokage</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/search home.png'></img>
							<p>No Search Hassle</p>
							<span>No need to wander</span>
							<span>around in search</span>
							<span>of a PG</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/sofa.png'></img>
							<p>Fully Furnished</p>
							<span>Get cozy with</span>
							<span>already installed</span>
							<span>furniture</span>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{ width: "100%" }}
				className='home-quickstay-icons-container row'
			>
				<div className='col-lg-2 home-quickstay-icons-text'>
					<p id='home-quickstay-icons-text-p1'>Stay ho to</p>
					<p id='home-quickstay-icons-text-p2'>QuickStay jaisa</p>
				</div>
				<div className=' col-lg-10'>
					<div className='row'>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/pocket.png'></img>
							<span>Pocket</span>
							<span>Friendly</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/wrench.png'></img>
							<span>Well</span>
							<span>Maintained</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/water.png'></img>
							<span>Water</span>
							<span>Purify</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/professions-and-jobs.png'></img>
							<span>HouseKeeping</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/fun.png'></img>
							<span>Friendly</span>
							<span>Aura</span>
						</div>
						<div className='col-lg-4 home-quickstay-icons'>
							<img src='assets/homeIcons/customer-service.png'></img>
							<span>Customer</span>
							<span>Support</span>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{ width: "100%" }}
				className='home-quickstay-icons-container row'
			>
				<div className='col-lg-2 home-quickstay-icons-text'>
					<p id='home-quickstay-icons-text-p1'>User</p>
					<p id='home-quickstay-icons-text-p2'>Experience</p>
				</div>
				<div style={{ marginTop: 50 }} className=' col-lg-10'>
					<ScrollExperience />
				</div>
			</div>
			<div
				style={{ width: "100%" }}
				className='home-quickstay-icons-container row'
			>
				<div className='col-lg-2 home-quickstay-icons-text'>
					<p id='home-quickstay-icons-text-p1'>Get the</p>
					<p id='home-quickstay-icons-text-p2'>QuickStay App</p>
					<p style={{ textAlign: "center" }}>
						Download the QuickStay App and get everything done! From booking
						online to getting every update, make your life easier
					</p>
				</div>
				<div className=' col-lg-10'>
					<div className='home-getapp-container'>
						<img src='assets/homeIcons/en_badge_web_generic.png'></img>
						<img src='assets/homeIcons/download-on-app-store-png-download-1272.png'></img>
						<img src='assets/homeIcons/iphone-iphone_x-_iphonex-mobile-apple-device-2-512.png'></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeIcon;
