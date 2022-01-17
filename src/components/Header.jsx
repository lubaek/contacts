import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<a href="/" className="logo">
						<FontAwesomeIcon icon={faAddressBook} />
						Breez Contacts
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
