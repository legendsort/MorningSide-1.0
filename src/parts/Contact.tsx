import React from 'react'

const Contact = () => {
	const hero1ImagePath = "/images/hero1.jpg"
	const hero1ClipPathPoints = "25% 0%, 100% 0%, 101% 70%, 66% 80%, 0% 17%";
	const hero2ImagePath = "/images/hero2.jpg"
	const hero2ClipPathPoints = "50% 0%, 100% 100%, 0% 100%";

	return (
			<div className="container">
				<div className="flex flex-col items-center">
					<p className="text-gray-500 font-medium mb-20 uppercase">Stay in touch</p>
					<h2 className="text-primary text-6xl md:text-100 text-center font-bold mb-2 leading-none">Let's Talk</h2>
					<p className="text-gray-500 font-medium my-5">
						Feel free to contact us.
					</p>
					<a href="#" className="theme-btn">Contact Us</a>
				</div>
			</div>
	)
}

export default Contact;