import React from 'react'
import Card from '../components/Card'
import { services } from '../constants/services'

const Hero = () => {
	return (
		<div className="section-padding">
			<div className="container flex flex-col justify-center items-center">
				<p className="text-primary uppercase m-5">Our Services</p>
				<h1 className="text-primary text-80 leading-80 tracking[-0.1875] m-8">What We Do</h1>
				<div className="flex gap-5 w-full">
					{services.map((service) => 
						<Card name={service.name} list={service.services} />
					)}
				</div>
			</div>
		</div>
	)
}

export default Hero;