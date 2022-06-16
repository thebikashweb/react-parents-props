import React from "react"
import "./App.css"

import Children2 from "./components/Children2"
import Children1 from "./components/Children1"

function App() {
	const [name, setName] = React.useState("Bikash")
	const [children1Heading, setChildren1Heading] = React.useState(
		"Change parents name",
	)

	const handleNameChange = (name: string) => {
		setName(name)
	}

	return (
		<div className="App">
			<div className="wrapper">
				<h2>Hello, {name}!</h2>

				<div className="childrens">
					<Children1
						onParentNameChange={handleNameChange}
						heading={children1Heading}
					/>
					<Children2
						name={name}
						onChildredn1HeadingChange={(heading) =>
							setChildren1Heading(heading)
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
