import React, { useState } from "react";

export function Home() {
	const [name, setName] = useState("");
	const ValidateInput = () => {
		if (name == "") {
			alert("Enter your Name");
		} else {
			alert("Welcome " + name);
		}
	};

	return (
		<div className="text-center mt-5">
			<input
				placeholder="Enter your Name"
				onChange={e => setName(e.target.value)}
				value={name}
                ></input>
			<button onClick={ValidateInput}>Validate</button>
		</div>
	);
}
