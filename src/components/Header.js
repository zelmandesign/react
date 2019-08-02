import React from "react";
import "../css/Header.css";
import logo from "../logo.svg";

function Header() {
	return (
		<header>
			Header
			<img src={logo} alt="logo" width="75" height="75" />
		</header>
	);
}

export default Header;
