import React from 'react'

const Header = () => {
	return (
		<div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
			<div className="container flex items-center justify-between">
				<div className="flex gap-20">
					<img src="/images/logo.png" alt="logo"/>
					<div className="flex items-center gap-5">
						<a href="about.html">Home</a>
						<a href="about.html">About</a>
						<a href="about.html">Services</a>
						<a href="about.html">Pages</a>
						<a href="about.html">News</a>
						<a href="about.html">Contact</a>
					</div>
				</div>
				<a href="#" className="theme-btn">CONSULTANCY <i className="fas fa-arrow-right"></i></a>
			</div>
		</div>
	)
}

export default Header;