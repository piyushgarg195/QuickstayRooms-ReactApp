import React from "react";

// // Custom Components
// import Carousel from "../../Components/carousel/Carousel";
// import Form from "../../Components/Form/Form";
import Search from "../../Components/search/search";
import Navbar2 from "../../Components/Navbar/Navbar2";
import HomeIcon from "../../Components/Home-icons/Home-icon";

function Home() {
	return (
		<div>
			<div style={{ backgroundColor: "#b83227", width: "100%" }}>
				{/* <img
					style={{ position: "absolute", width: "100%", height: "80%" }}
					src='https://www.bookingholdings.com/wp-content/uploads/2018/01/booking_background.jpg'
				></img> */}
				<Navbar2 />
				<Search />
			</div>
			<div style={{ width: "100%" }}>
				<HomeIcon />
			</div>
		</div>
	);
}

export default Home;
