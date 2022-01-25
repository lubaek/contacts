import React, { useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../firebase/config";
import { ref, remove } from "firebase/database";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faPhoneAlt,
	faEnvelope,
	faEdit,
	faTrash,
	faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

import contactImg from "../images/5fATtiHqr5I.jpg";
import KarmaModal from "./KarmaModal";

function ContactCard({ contact, id }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const deleteContact = () => {
		if (window.confirm("Are you sure you want to delete this contact?")) {
			remove(ref(database, `/contacts/${id}`))
				.then(() => {
					toast.success("Contact was deleted successfully");
				})
				.catch((error) => toast.error(error));
		}
	};
	return (
		<>
			<div className="contactCard">
				<div className="contactCard__img">
					<div className="contactCard__img__inner">
						<img src={contactImg} alt="contact" />
					</div>
				</div>
				<div className="contactCard__info">
					<h4 className="contactCard__name">{contact.name}</h4>
					<p className="contactCard__info__item">
						<FontAwesomeIcon className="contactCard__icon" icon={faMapMarkerAlt} />
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
					<div className="contactCard__actions">
						<Link className="contactCard__btn" to={`${id}`}>
							<FontAwesomeIcon icon={faEdit} />
						</Link>
						<button className="contactCard__btn" onClick={deleteContact}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
						<button className="contactCard__btn" onClick={() => setIsModalOpen(true)}>
							<FontAwesomeIcon icon={faCommentDots} />
						</button>
					</div>
				</div>
			</div>

			{isModalOpen && (
				<KarmaModal setIsModalOpen={setIsModalOpen} contact={contact} id={id} />
			)}
		</>
	);
}

export default ContactCard;
