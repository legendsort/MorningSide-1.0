import React from 'react'
import Hero from '../components/Hero'
import Services from '../parts/Services'
import AboutUs from '../parts/AboutUs'
import Team from '../parts/Team'
import Blog from '../parts/Blog'

const LandingPage = () => {
	return (
		<div>
			<Hero />
			<Services />
			<AboutUs />
			<Team />
			<Blog />
		</div>
	)
}

export default LandingPage;