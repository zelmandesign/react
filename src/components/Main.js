import React from "react";
import Clock from "../components/Clock";

function Main() {
	return (
		<main>
			<div className="container">
				<div className="text-right">
					<Clock />
				</div>
			</div>
		</main>
	);
}

export default Main;
