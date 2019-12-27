import React from "react";

// // Custom Components
// import Carousel from "../../Components/carousel/Carousel";
// import Form from "../../Components/Form/Form";
import Search from "../../Components/search/search";
import Navbar2 from "../../Components/Navbar/Navbar2";

const url =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlCXCL9puGe6KTrp3QIsw1cS2kgyiNBVT_3M-vbdncTMOcCmpd";

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
			<div
				style={{
					backgroundImage: "url(" + url + ")"
					// backgroundRepeat: "no-repeat"
					// backgroundSize: "cover",
				}}
			>
				<Navbar2 />
				<Search />
			</div>
		</div>
	);
}

export default Home;
