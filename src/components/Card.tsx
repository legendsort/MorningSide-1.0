
interface ICard {
	name: string,
	list: Array<string>
}
	
const Card = (props: ICard) => {
	const {name, list} = props;
	return (
		<div className="card">
			<div className="text-primary font-medium text-xl">{name}</div>
			<div className="divider" />
			{list.map((item, index) =>
				<p key={index}>{item}</p>
			)}
		</div>
	)
}

export default Card;