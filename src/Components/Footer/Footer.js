import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div>
			<div className='footer-bg-img'>
				<img
					id='footer-bg-img-img'
					src='https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'
				></img>
				<div className='footer-bg-text'>
					<div style={{ width: "100%" }} className='row'>
						<div className='col-lg-6 footer-bg-text-left'>
							<div className='footer-bg-text-left-address'>
								<h4>QuickStay</h4>
								<p>Chitkara Innovation Incubator Foundation,</p>
								<p>Sector 4, Mansa Devi Complex,</p>
								<p>Panchkula, Haryana</p>
							</div>
							<div className='footer-bg-text-left-contact'>
								<div className='row'>
									<div className='col-lg-1'>
										<i class='ni ni-email-83'></i>
									</div>
									<div className='col-lg-11'>
										<p>rooms.quickstay@gmail.com</p>
									</div>
									<div className='col-lg-1'>
										<i class='ni ni-email-83'></i>
									</div>
									<div className='col-lg-11'>
										<p>+91-8386878880</p>
									</div>
								</div>
							</div>
							<div className='footer-bg-text-left-stay-in-touch'>
								<h3>Stay In Touch</h3>
								<img src='assets/homeIcons/facebook.png'></img>
								<img src='assets/homeIcons/instagram.png'></img>
								<img src='assets/homeIcons/twitter.png'></img>
								<img src='assets/homeIcons/Linkedin.png'></img>
							</div>
						</div>
						<div className='col-lg-6 footer-bg-text-right'>
							<h4>Contact Us</h4>
							<form>
								<div className='form-group'>
									<input
										type='email'
										class='form-control'
										// id='exampleFormControlInput1'
										placeholder='Name'
									/>
								</div>
								<div className='form-group'>
									<input
										type='email'
										class='form-control'
										id='exampleFormControlInput1'
										placeholder='Phone'
									/>
								</div>
								<div className='form-group'>
									<input
										type='email'
										class='form-control'
										id='exampleFormControlInput1'
										placeholder='Email'
									/>
								</div>
								<div className='form-group'>
									<textarea
										class='form-control form-control-alternative'
										rows='3'
										placeholder='Message...'
									></textarea>
								</div>
								<input
									className='btn btn-primary'
									type='submit'
									value='submit'
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
