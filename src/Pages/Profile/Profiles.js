import React from "react";

// CUSTOM COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import UserPro from "../../Components/UserDet/UserPro";

function Profile() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<UserPro />
			</div>
		</div>
	);
}

export default Profile;
