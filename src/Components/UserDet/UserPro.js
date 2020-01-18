import React from "react";

// custom componenets
import MyProfile from "./MyProfile";
import "./UserPro.css";

function UserPro() {
	return (
		<div>
			<div style={{ width: "100%" }} className='row user-profile-container'>
				<div className='col-sm-12 col-lg-4 user-profile-left-container'>
					<div className='user-profile-left-dp'>
						<img src='https://vignette.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest/scale-to-width-down/340?cb=20141230074301'></img>
						<p>Hermione granger</p>
					</div>
					<div className='user-profile-left-links'>
						<p>My Profile</p>
						<p>My Bookings</p>
						<p>Schedule a visit</p>
						<p>Transaction history</p>
						<p>LogOut</p>
					</div>
				</div>
				<div className='col-sm-12 col-lg-8 user-profile-right-container'>
					<h3 style={{ color: "black" }}>My Profile</h3>
					<div className='user-profile-right-content'>
						<div className='row'>
							<div className='col-lg-4'>
								<a
									href='#'
									style={{
										fontSize: "large",
										color: "black",
										borderBottom: "4px solid black"
									}}
								>
									My Profile
								</a>
							</div>
							<div className='col-lg-4'>
								<a href='#' style={{ fontSize: "large", color: "black" }}>
									Some more information
								</a>
							</div>
						</div>
						<hr style={{ margin: 0 }} />
						<div>
							<MyProfile />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserPro;
