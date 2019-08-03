import React from "react";

function Joke(props) {
	return (
		<div>
			<div className="bg-white text-dark mb-2 mt-2 p-3">
				<p style={{ display: props.question ? "block" : "none" }}>
					Question: {props.question}
				</p>
				<p style={{ display: props.punchline ? "block" : "none" }}>
					Punchline: {props.punchline}
				</p>
			</div>
		</div>
	);
}

export default Joke;
