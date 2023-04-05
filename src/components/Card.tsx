import React from 'react'

const Card = (props) => {
	const {name, list} = props;
	return (
		<div className="card">
			<div className="text-primary font-medium text-xl">{name}</div>
			<div className="divider" />
			{list.map((item) =>
				<p>{item}</p>
			)}
		</div>
	)
}

export default Card;