import React from "react";

const FirstName = "Zenon";
const date = new Date();
const hours = date.getHours();
const hours12 = date.getHours();
const minutes = date.getMinutes();

let timeofDay;
const styles = {
	color: "#fff"
};

if (hours < 12) {
	timeofDay = "morning";
	styles.color = "green";
} else if (hours >= 12 && hours < 17) {
	timeofDay = "afternoon";
} else {
	timeofDay = "evening";
	styles.color = "var(--orange)";
}

function Clock() {
	return (
		<div style={styles}>
			Good {timeofDay + " " + FirstName}!<br />
			It's {hours12} : {minutes}
		</div>
	);
}

export default Clock;
