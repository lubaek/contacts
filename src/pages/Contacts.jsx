import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, database } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);
	const [contacts, setContacts] = useState([]);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			return setIsUserSignedIn(true);
		}
		setIsUserSignedIn(false);
	});

	useEffect(() => {
		onValue(ref(database), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				setContacts({ ...data.contacts });
			}
		});
	}, []);

	return (
		<>
			<Header isSignIn={isUserSignedIn} contacts={contacts} />
			<div className="contacts">
				<div className="contacts__inner container">
					{isUserSignedIn ? (
						Object.keys(contacts).map((id) => {
							return <ContactCard key={id} contact={contacts[id]} id={id} />;
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
