import React from "react";

// Custom Components
<<<<<<< HEAD
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
=======
import Model from "../../Components/Modals/Model";
import firebase from "../../firebase";

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <button
        onClick={() => firebase.auth().signOut()}
        className="btn btn-danger"
      >
        Logout
      </button>
      {/* <Model /> */}
    </div>
  );
>>>>>>> 58b15cc7f002bb9a76eaa629948b1b2a9e07e897
}

export default Home;
