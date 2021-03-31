import React, { useState } from "react";

export function Home() {
	const [name, setName] = useState("");

	const changeName = () => {
		setName("Pedro");
	};

	return (
		<div className="text-center mt-5">
			<input
				placeholder="Enter your Name"
				onChange={e => setName(e.target.value)}
				value={name}></input>
			<button onClick={changeName}>Validate</button>
		</div>
	);
}
