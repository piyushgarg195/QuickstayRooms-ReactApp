import React from "react";

//Custom components
import Navbar from "../../Components/Navbar/Navbar";
import Book from "../../Components/Book/Book";

function Booknow() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Book />
			</div>
		</div>
	);
}

export default Booknow;
