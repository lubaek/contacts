import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faPhoneAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import contactImg from "../images/5fATtiHqr5I.jpg";

function ContactCard({ contact }) {
	return (
		<div className="contactCard">
			<div className="contactCard__img">
				<div className="contactCard__img__inner">
					<img src={contactImg} alt="contact" />
				</div>
			</div>
			<div className="contactCard__info">
				<h4 className="contactCard__name">{contact.name}</h4>
				<p className="contactCard__info__item">
					<FontAwesomeIcon
						className="contactCard__icon"
						icon={faMapMarkerAlt}
					/>
					{contact.address}
				</p>
				<p className="contactCard__info__item">
					<FontAwesomeIcon className="contactCard__icon" icon={faPhoneAlt} />
					{contact.phoneNumber}
				</p>
				<p className="contactCard__info__item">
					<FontAwesomeIcon className="contactCard__icon" icon={faEnvelope} />
					{contact.email}
				</p>
				<Link className="contactCard__btn" to={`${contact.id}`}>
					Show contact
				</Link>
			</div>
		</div>
	);
}

export default ContactCard;
