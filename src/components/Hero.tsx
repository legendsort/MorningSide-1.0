import React from 'react'

const Hero = () => {
	const hero1ImagePath = "/images/hero1.jpg"
	const hero1ClipPathPoints = "25% 0%, 100% 0%, 101% 70%, 66% 80%, 0% 17%";
	const hero2ImagePath = "/images/hero2.jpg"
	const hero2ClipPathPoints = "50% 0%, 100% 100%, 0% 100%";

	return (
		<div className="hero md:pt-40">
			<div className="container">
				<div className="z-2">
					<h2 className="text-primary text-3xl lg:text-5xl md:text-80 font-black mb-5 leading-none tracking[-0.1875]">Artificial Intelligence</h2>
					<h1 className="text-primary text-4xl lg:text-6xl md:text-100 font-black leading-80 tracking[-0.1875]">Studio</h1>
					<p className="text-primary font-medium text-lg md:text-xl mt-5">Empower Your Business with Cutting-Edge AI Solutions</p>
					<div className="flex flex-col md:flex-row mt-[35px] gap-5">
						<a href="#services" className="theme-btn">Service we provide <i className="fas fa-arrow-right"></i></a>
						<a href="#" className="theme-btn minimal-btn">Let's Chat <i className="fas fa-arrow-right"></i></a>
					</div>
				</div>
			</div>
			<div 
				className="w-[471px] h-[488px] lg:w-[771px] lg:h-[788px] absolute top-0 right-0 z-[-1] bg-cover hidden md:block" 
				style={{ 
					backgroundImage: `url(${hero1ImagePath})`,
					backgroundPosition: '-125px',
					clipPath: `polygon(${hero1ClipPathPoints})`
				}}
			></div>
			<div 
				className="w-[571px] h-[385px] lg:w-[972px] lg:h-[486px] absolute bottom-0 right-[80px] z-[-1] bg-cover bg-center hidden md:block" 
				style={{ 
					backgroundImage: `url(${hero2ImagePath})`,
					clipPath: `polygon(${hero2ClipPathPoints})`
				}}
			></div>
		</div>
	)
}

export default Hero;