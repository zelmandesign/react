import React from "react";

function Joke(props) {
	return (
		<div>
			<div
				style={{ display: props.joke ? "block" : "none" }}
				className="bg-white text-dark mb-2 mt-2 p-3"
			>
				<p style={{ display: props.joke.question ? "block" : "none" }}>
					Question: {props.joke.question}
				</p>
				<p style={{ display: props.joke.punchline ? "block" : "none" }}>
					Punchline: {props.joke.punchline}
				</p>
			</div>
		</div>
	);
}

export default Joke;
