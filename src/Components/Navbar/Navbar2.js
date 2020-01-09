import React, { useState, useEffect } from "react";

// Custom css
import "./Navbar2.css";

const Navbar2 = () => {
	var x = window.matchMedia("(max-width: 700px)");
	if (x.matches) {
		var size = true;
	}
	const [hide, setHide] = useState("0px");
	useEffect(() => {}, [hide]);
	return (
		<div>
			<nav class='navbar navbar-expand-lg navbar-dark'>
				<div class='container'>
					<a class='navbar-brand' href='#'>
						<img style={{ marginRight: 10 }} src='assets/Santa_QS.png' />
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

						<ul class='navbar-nav ml-lg-auto '>
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
								<a
									class='nav-link'
									href='#'
									onClick={() => {
										size ? setHide("100%") : setHide("40%");
									}}
								>
									Sign In
									<span class='sr-only'>(current)</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* login bar */}
			<div>
				<div style={{ width: hide }} class='sidenav'>
					<a
						href='javascript:void(0)'
						class='closebtn'
						onClick={() => setHide("0px")}
					>
						&times;
					</a>
					<div className='sidnav-container'>
						<h3 style={{ textAlign: "center", fontSize: "x-large" }}>LOGIN</h3>
						<div className='row '>
							<div className='col-lg-12 sidenav-content'>
								<div className='row'>
									<div className='col-lg-3'>
										<p>Phone No. </p>
									</div>
									<div className='col col-lg-4'>
										<input type='text' className='form-control' />
									</div>
									<div className='col col-lg-4'>
										<button className='btn btn-outline-primary'>
											Send OTP
										</button>
									</div>
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-3'>
										<p>OTP </p>
									</div>
									<div className='col-lg-6 input-respons-login'>
										<input type='number' className='form-control' />
									</div>
								</div>
							</div>

							<button
								style={{ margin: "20px auto" }}
								className='btn btn-primary'
							>
								Login
							</button>
							<div className='col-lg-12 sidenav-content'>
								<p style={{ fontSize: "x-large", margin: "10px auto" }}>
									New to QuickStay?
									<span style={{ color: "#b83227" }}> SIGN UP</span>
								</p>
								<div className='row'>
									<div className='col-lg-3'>
										<p>Full Name</p>
									</div>
									<div className='col-lg-6 input-respons-login'>
										<input type='text' className='form-control' />
									</div>
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-3'>
										<p>Email</p>
									</div>
									<div className='col-lg-6 input-respons-login'>
										<input type='email' className='form-control' />
									</div>
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-3'>
										<p>Phone No. </p>
									</div>
									<div className='col col-lg-4'>
										<input type='text' className='form-control' />
									</div>
									<div className='col col-lg-4'>
										<button className='btn btn-outline-primary'>
											Send OTP
										</button>
									</div>
								</div>
								<div style={{ marginTop: 10 }} className='row'>
									<div className='col-lg-3'>
										<p>OTP </p>
									</div>
									<div className='col-lg-6 input-respons-login'>
										<input type='number' className='form-control' />
									</div>
								</div>
							</div>
							<button
								style={{ margin: "0 auto", marginTop: 20 }}
								className='btn btn-primary'
							>
								Create Account
							</button>
						</div>
						<p style={{ textAlign: "center", marginTop: 30, marginRight: 10 }}>
							By Creating an account, you accept our terms and conditions
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar2;
