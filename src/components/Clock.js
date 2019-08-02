import React from "react";

const FirstName = "Zenon";
const date = new Date();
const hours = date.getHours();
const hours12 = date.getHours() % 12;
const minutes = date.getMinutes();

let timeofDay;

if (hours < 12) {
	timeofDay = "morning";
} else if (hours > 12 && hours < 17) {
	timeofDay = "afternoon";
} else {
	timeofDay = "night";
}

function Clock() {
	return (
		<div>
			Good {timeofDay + " " + FirstName}!<br />
			It's {hours12} : {minutes}
		</div>
	);
}

export default Clock;
