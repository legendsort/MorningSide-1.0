import React from 'react'

const Team = () => {
	const imagePath = "/images/feature_img.jpg"

	return (
		<div className="container">
			<div className="container">
				<div className="w-1/2 mr-20">
					<p className="text-primary font-medium text-xl my-5 uppercase">Our Team</p>
					<h2 className="text-primary text-4xl font-bold mb-5 leading-none uppercase">Our creative family</h2>
					<div className="divider w-[30px]" />
					<p className="text-primary font-medium text-md my-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div 
				className="w-1/2 h-[300px] z-[-1] bg-cover" 
				style={{ 
					backgroundImage: `url(${imagePath})`
				}}
			></div>
		</div>
	)
}

export default Team;