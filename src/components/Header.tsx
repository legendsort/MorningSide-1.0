import React from 'react'

const Header = () => {
	return (
		<div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
			<div className="container flex items-center gap-[50px]">
				<img src="/images/logo.png" alt="logo"/>
				<li>
					<a href="about.html">Home</a>
				</li>
				<li>
					<a href="about.html">About</a>
				</li>
				<li>
					<a href="about.html">Services</a>
				</li>
				<li>
					<a href="about.html">Pages</a>
				</li>
				<li>
					<a href="about.html">News</a>
				</li>
				<li>
					<a href="about.html">Contact</a>
				</li>
				<a href="#" class="theme-btn">CONSULTANCY <i class="fas fa-arrow-right"></i></a>
			</div>
		</div>
	)
}

export default Header;