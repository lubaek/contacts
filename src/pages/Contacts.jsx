import React, { useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
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
						<p>Sign in to view all contacts</p>
					)}
				</div>
			</div>
		</>
	);
}

export default Contacts;
