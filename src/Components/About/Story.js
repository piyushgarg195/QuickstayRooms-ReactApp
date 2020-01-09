import React from "react";

import "./Story.css";

function Story() {
	return (
		<div>
			<h1 id='about-title'>about</h1>
			<div className='about-img'>
				<img src='https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'></img>
				<div className='about-quickstay'>
					<p>
						QuickStay Rooms is a North-India based services company providing
						paying guest accommodations with a unique stay experience.
						Relocating to a new place can be stressful especially when you don't
						have a decent place to hop-in. Finding an ideal accommodation as per
						your requirements can be a challenging task and a hassle too. At
						QuickStay Rooms, we introduce to you a platform that not only helps
						you search hassle-free quality stays but also saves your money by
						saying a big “NO” to Brokerage fee. From providing quality budget
						rooms to becoming the most trusted brand for accommodations,
						QuickStay Rooms is trying to redefine the paying guest living
						scenario and giving you the home-like comfort that you deserve.
					</p>
				</div>
			</div>
			<div className='about-our-story-container'>
				<div className='about-our-story-title'>
					<p>OUR</p>
					<h6>STORY</h6>
				</div>
				<div className='row'>
					<div className='col-lg-6 about-our-story-text'>
						<p>
							One of the founder of this Company, Jatin Madaan has been away
							from his home past few years. He come across many PG rooms in past
							5 years describing some of them as 3-star hotel rooms and some as
							dungy conditioned rooms. Due to the need for setting right this
							unstructured market, he discusses the facts and figures with his
							best friend & the other founder of this company, Ishita. In
							Between this raw discussion, they decided to collect real time
							facts and do a vigorous research. While collecting data, they
							realised that the result were unbelievable.
						</p>
						<p>
							This market was even more worse than they thought. People are
							struggling to find a decent stay and even paying high prices for
							the not-so-decent stay. To know better, they started to interact
							with their close ones and friends who were living in the PG's.
							While understanding about the facilities and problems of the PG's,
							they came across another friend of theirs, CMO and Co-founder,
							Ishan Sharma. They together, started collaborating with the PG
							owners to resolve the problem of search hassle, overpricing,
							brockage fee, cleanliness and other small issues.
						</p>
					</div>
					<div className='col-lg-6 about-our-story-team-container'>
						<h5>TEAM</h5>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='about-team-img-container'>
									<img></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Story;
