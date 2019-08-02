import React from "react";

function Todo() {
	return (
		<div>
			<h1 className="mb-5">To do List</h1>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="defaultCheck1"
				/>
				<label className="form-check-label" for="defaultCheck1">
					Default checkbox 1
				</label>
			</div>
		</div>
	);
}

export default Todo;
