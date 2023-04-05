import React from 'react'

const Card = (props) => {
	const { name, photo, role, description, links, style } = props;
	console.log(style)
	return (
		<div className={`flex ${style === 1 ? 'flex-row-reverse' : ''}`}>
			<div className="w-1/2 my-5 flex justify-center">
				<img src={photo} alt="logo"/>
			</div>
			<div className="w-1/2 p-0 md:p-20 flex flex-col justify-center">
				<div className="text-blue-300 font-medium uppercase m-2">{role}</div>
				<div className="text-primary font-medium text-xl uppercase m-2">{name}</div>
				<div className="text-gray-500 font-medium m-2">{description}</div>
			</div>
		</div>
	)
}

export default Card;