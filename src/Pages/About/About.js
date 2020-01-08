import React from "react";

//custom components
import Navbar from "../../Components/Navbar/Navbar";
import Story from "../../Components/About/Story";

function About() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Story />
			</div>
		</div>
	);
}

export default About;
