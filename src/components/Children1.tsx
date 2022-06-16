import React from "react"

type PropType = {
	onParentNameChange: (name: string) => void
	heading: string
}

const Children1: React.FC<PropType> = ({onParentNameChange, heading}) => {
	const [tempName, setTempName] = React.useState("")

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTempName(event.target.value)
	}
	return (
		<div className="children__card">
			<h3>{heading}</h3>
			<input
				type="text"
				placeholder="parents name"
				onChange={handleNameChange}
			/>
			<button className="btn" onClick={() => onParentNameChange(tempName)}>
				Change
			</button>
		</div>
	)
}

export default Children1
