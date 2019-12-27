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

<<<<<<< HEAD
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
=======
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
                <span class="nav-link-inner--text d-lg-none">Discover</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
                <span class="nav-link-inner--text d-lg-none">Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
                <span class="nav-link-inner--text d-lg-none">Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Partner with us
                <span class="nav-link-inner--text d-lg-none">Profile</span>
              </a>
            </li>

            <li class="nav-item">
              {!isSignedIn ? (
                <a
                  class="nav-link"
                  data-toggle="modal"
                  data-target="#modal-form"
                  onClick={() => {}}
                  href="#"
                >
                  Sign In
                  <span class="nav-link-inner--text d-lg-none">Profile</span>
                </a>
              ) : (
                <a class="nav-link" onClick={() => {}} href="#">
                  {user.displayName}
                  <span class="nav-link-inner--text d-lg-none">Profile</span>
                </a>
              )}
            </li>

            {/* <li class='nav-item dropdown'>
>>>>>>> 58b15cc7f002bb9a76eaa629948b1b2a9e07e897
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
<<<<<<< HEAD
					</ul>
				</div>
			</div>
		</nav>
	);
=======
          </ul>
        </div>
      </div>
      <div
        class="modal fade"
        id="modal-form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-form"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal- modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body p-0">
              <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-white pb-5">
                  <div class="text-muted text-center mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div class="btn-wrapper text-center">
                    <a
                      onClick={() => signInHandler()}
                      class="btn btn-neutral btn-icon"
                    >
                      <span class="btn-inner--icon">
                        <img src="../../assets/img/icons/common/google.svg" />
                      </span>
                      <span class="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form role="form">
                    <div class="form-group mb-3">
                      <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div class="custom-control custom-control-alternative custom-checkbox">
                      <input
                        class="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        class="custom-control-label"
                        for=" customCheckLogin"
                      >
                        <span>Remember me</span>
                      </label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-primary my-4">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
>>>>>>> 58b15cc7f002bb9a76eaa629948b1b2a9e07e897
};

export default Navbar;
