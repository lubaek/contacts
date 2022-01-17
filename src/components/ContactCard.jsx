import React from "react";
import contactImg from "../images/5fATtiHqr5I.jpg";

function ContactCard({ contact }) {
	return (
		<div className="contactCard">
			<div className="contactCard__img">
				<div className="contactCard__img__inner">
					<img src={contactImg} alt="contact" />
				</div>
			</div>
			<h4 className="contactCard__name">{contact.name}</h4>
			<p className="contactCard__address">{contact.address}</p>
			<p className="contactCard__phoneNumber">{contact.phoneNumber}</p>
			<p className="contactCard__email">{contact.email}</p>
			<button>view contact</button>
		</div>
	);
}

export default ContactCard;
