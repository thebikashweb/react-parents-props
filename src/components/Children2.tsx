import React from "react"

type PropType = {
	name: string
	onChildredn1HeadingChange: (name: string) => void
}

const Children2: React.FC<PropType> = ({name, onChildredn1HeadingChange}) => {
	const [tempHeading, setTeampHeading] = React.useState("")
	const handleHeadingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTeampHeading(event.target.value)
	}
	return (
		<div className="children__card">
			<h3>{name}</h3>
			<input
				type="text"
				placeholder="Children 1 heading"
				onChange={handleHeadingChange}
			/>
			<button
				className="btn"
				onClick={() => onChildredn1HeadingChange(tempHeading)}>
				Change
			</button>
		</div>
	)
}

export default Children2
