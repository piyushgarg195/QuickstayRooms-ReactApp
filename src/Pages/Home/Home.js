import React from "react";

// // Custom Components
// import Carousel from "../../Components/carousel/Carousel";
// import Form from "../../Components/Form/Form";
import Search from "../../Components/search/search";
import Navbar2 from "../../Components/Navbar/Navbar2";

function Home() {
	return (
		<div>
			{/* <Carousel /> */}
			{/* <div
				style={{
					border: "1px solid grey",
					width: "80%",
					marginRight: "auto",
					marginLeft: "auto",
					padding: 20,
					background: "#b83227",
					color: "white",
					position: "relative",
					marginTop: "-3%"
				}}
			>
				<Form />
			</div> */}
			<div>
				<img
					style={{ position: "absolute", width: "100%", height: "80%" }}
					src='https://www.bookingholdings.com/wp-content/uploads/2018/01/booking_background.jpg'
				></img>
				<Navbar2 />
				<Search />
			</div>
		</div>
	);
}

export default Home;
