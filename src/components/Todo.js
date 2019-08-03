import React from "react";
import TodoItem from "../components/TodoItem";

function Todo() {
	return (
		<div className="todo-list">
			<h1 className="mb-5">To do List</h1>
			<TodoItem />
			<TodoItem />
		</div>
	);
}

export default Todo;
