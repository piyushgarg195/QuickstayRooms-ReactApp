import React from "react";

// Custom Components
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
}

export default Home;
