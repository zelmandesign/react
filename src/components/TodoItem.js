import React from "react";

function TodoItem() {
	return (
		<div className="form-check todo-item">
			<input
				className="form-check-input"
				type="checkbox"
				value=""
				id="defaultCheck1"
			/>
			<label className="form-check-label" for="defaultCheck">
				Default checkbox
			</label>
		</div>
	);
}

export default TodoItem;
