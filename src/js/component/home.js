import React, { useState } from "react";

export function Home() {
	const [name, setName] = useState("");

	const changeName = () => {
		setName("Pedro");
	};

	const validateName = () => {
		if (name == "") {
			alert("Enter your Name");
		} else {
			alert("Hello, " + name);
;		}
"""())e		set;
	};

	return (
		<div className="text-center mt-5">
			<input
				placeholder="Enter your Name"
				onChange={e => setName(e.target.value)}></input>
			<button onClick={changeName}>Change Name</button>
			<button onClick={validateName}>Validate Name</button>
		</div>
	);
}
