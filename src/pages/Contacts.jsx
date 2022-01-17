import React from "react";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
import { dummyContacts } from "../utils/dummyContacts";

function Contacts() {
	return (
		<>
			<Header />
			<div className="contacts">
				<div className="contacts__inner container">
					{dummyContacts.map((contact) => {
						return <ContactCard key={contact.id} contact={contact} />;
					})}
				</div>
			</div>
		</>
	);
}

export default Contacts;
