import React from "react";

function ContactCard(props) {
	console.log(props);
	return (
		<div className="contact-card mb-3">
			<img src={props.contact.imgUrl} alt="asdaasd" />
			<h3 className="pt-3">{props.contact.name}</h3>
			<p>tel: {props.contact.tel}</p>
			<p>email: {props.contact.email}</p>
		</div>
	);
}

export default ContactCard;
