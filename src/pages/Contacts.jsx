import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { dummyContacts } from "../utils/dummyContacts";

function Contacts() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return setIsUserSignedIn(true);
		}
		setIsUserSignedIn(false);
	});
	return (
		<>
			<Header isSignIn={isUserSignedIn} />
			<div className="contacts">
				<div className="contacts__inner container">
					{isUserSignedIn ? (
						dummyContacts.map((contact) => {
							return <ContactCard key={contact.id} contact={contact} />;
						})
					) : (
						<p>Sign in to view contacts</p>
					)}
				</div>
			</div>

			{isUserSignedIn && (
				<Link className="add-btn" to="add">
					<FontAwesomeIcon icon={faUserPlus} />
				</Link>
			)}
		</>
	);
}

export default Contacts;
