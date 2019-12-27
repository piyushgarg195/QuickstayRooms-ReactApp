import React from "react";

// Custom Components
import Carousel from "../../Components/carousel/Carousel";
import Form from "../../Components/Form/Form";

function Home() {
	return (
		<div className='App'>
			<Carousel />
			<div
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
			</div>
		</div>
	);
}

export default Home;
