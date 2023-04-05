import React from 'react'

const Footer = () => {
	const hero1ImagePath = "/images/hero1.jpg"
	const hero1ClipPathPoints = "25% 0%, 100% 0%, 101% 70%, 66% 80%, 0% 17%";
	const hero2ImagePath = "/images/hero2.jpg"
	const hero2ClipPathPoints = "50% 0%, 100% 100%, 0% 100%";

	return (
		<div className="container">
			<div className="m-20">
				<img className="my-5" src="/images/logo.png" alt="logo"/>
				<div className="flex justify-between">
					<div>
						<p className="font-medium my-2">Address</p>
						<p className="text-gray-500 font-medium">Dubai, UAE</p>
					</div>
					<div>
						<p className="font-medium my-2">Contact</p>
						<p className="text-gray-500 font-medium">Email:info@unleashing.ai</p>
					</div>
					<div>
						<p className="font-medium my-2">Sitemap</p>
						<p className="text-gray-500 font-medium">Home</p>
						<p className="text-gray-500 font-medium">About</p>
						<p className="text-gray-500 font-medium">Work</p>
						<p className="text-gray-500 font-medium">Blog</p>
						<p className="text-gray-500 font-medium">Contact</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;