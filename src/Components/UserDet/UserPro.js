import React, { useState, useEffect } from "react";

// custom componenets
import MyProfile from "./MyProfile";
import MyBookings from "./MyBookings";
import Schedulevisit from "./Schedulevisit";
import "./UserPro.css";

function UserPro() {
	const [myprofile, setmyprofile] = useState(true);
	const [mybookings, setmybookings] = useState(false);
	const [schedulevisit, setschedulevisit] = useState(false);
	const handelsetmyprofile = () => {
		setmyprofile(true);
		setmybookings(false);
		setschedulevisit(false);
	};
	const handelsetmybookings = () => {
		setmyprofile(false);
		setschedulevisit(false);
		setmybookings(true);
	};
	const handelsetschedulevisit = () => {
		setschedulevisit(true);
		setmyprofile(false);
		setmybookings(false);
	};
	useEffect(() => {});
	return (
		<div>
			<div style={{ width: "100%" }} className='row user-profile-container'>
				<div className='col-sm-12 col-lg-4 user-profile-left-container'>
					<div className='user-profile-left-dp'>
						<img src='https://vignette.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest/scale-to-width-down/340?cb=20141230074301'></img>
						<p>Hermione granger</p>
					</div>
					<div className='user-profile-left-links'>
						<p style={{ borderLeft: myprofile ? "10px solid #12cad6" : "" }}>
							<a href='#' onClick={() => handelsetmyprofile()}>
								My Profile
							</a>
						</p>
						<p style={{ borderLeft: mybookings ? "10px solid #12cad6" : "" }}>
							<a href='#' onClick={() => handelsetmybookings()}>
								My Bookings
							</a>
						</p>
						<p
							style={{ borderLeft: schedulevisit ? "10px solid #12cad6" : "" }}
						>
							<a href='#' onClick={() => handelsetschedulevisit()}>
								Schedule a visit
							</a>
						</p>
						<p>
							<a href='#'>Transaction history</a>
						</p>
						<p>
							<a href='#'>LogOut</a>
						</p>
					</div>
				</div>
				<div className='col-sm-12 col-lg-8 user-profile-right-container'>
					{/* <h3 style={{ color: "black" }}>My Profile</h3> */}
					<div className='user-profile-right-content'>
						<div
							style={{
								display: myprofile ? "" : "none"
							}}
						>
							<MyProfile />
						</div>
						<div
							style={{
								display: mybookings ? "" : "none"
							}}
						>
							<MyBookings />
						</div>
						<div style={{ display: schedulevisit ? "" : "none" }}>
							<Schedulevisit />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserPro;
