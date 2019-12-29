import React, { useState, useEffect } from "react";

// Custom Imports
import firebase from "../../firebase";

const Navbar = () => {
	const [isSignedIn, setSignIn] = useState(false);
	const [user, setUser] = useState({});

	const signInHandler = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				if (result.user) {
					setUser(user);
					setSignIn(true);
				} else {
					setSignIn(false);
				}
			});
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				setUser(user);
				setSignIn(true);
			} else {
				setSignIn(false);
			}
		});
	});

	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-primary '>
			<div class='container'>
				<a class='navbar-brand' href='#'>
					Quickstay
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbar-primary'
					aria-controls='navbar-default'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbar-primary'>
					<div class='navbar-collapse-header'>
						<div class='row'>
							<div class='col-6 collapse-brand'>
								<a href='index.html'>
									<img src='assets/img/brand/blue.png' />
								</a>
							</div>
							<div class='col-6 collapse-close'>
								<button
									type='button'
									class='navbar-toggler'
									data-toggle='collapse'
									data-target='#navbar-primary'
									aria-controls='navbar-primary'
									aria-expanded='false'
									aria-label='Toggle navigation'
								>
									<span></span>
									<span></span>
								</button>
							</div>
						</div>
					</div>

					<ul class='navbar-nav ml-lg-auto'>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Home
								<span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								About
								<span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Blog
								<span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Partner with us
								<span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							{!isSignedIn ? (
								<a class='nav-link' onClick={() => signInHandler()} href='#'>
									Sign In
									<span class='sr-only'>(current)</span>
								</a>
							) : (
								<a class='nav-link' onClick={() => {}} href='#'>
									{user.displayName}
									<span class='sr-only'>(current)</span>
								</a>
							)}
						</li>
						{/* <li class='nav-item dropdown'>
							<a
								class='nav-link'
								href='#'
								id='navbar-primary_dropdown_1'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Settings
							</a>
							<div
								class='dropdown-menu dropdown-menu-right'
								aria-labelledby='navbar-default_dropdown_1'
							>
								<a class='dropdown-item' href='#'>
									Action
								</a>
								<a class='dropdown-item' href='#'>
									Another action
								</a>
								<div class='dropdown-divider'></div>
								<a class='dropdown-item' href='#'>
									Something else here
								</a>
							</div>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
