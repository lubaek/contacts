import React from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Header({ isSignIn }) {
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	};

	const googleSignOut = () => {
		signOut(auth)
			.then(() => console.log("sign out"))
			.catch((error) => console.log(error));
	};
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<a href="/" className="logo">
						<FontAwesomeIcon icon={faAddressBook} />
						Breez Contacts
					</a>
					{isSignIn ? (
						<button className="signin-btn" onClick={googleSignOut}>
							SIGN OUT
						</button>
					) : (
						<button className="signin-btn" onClick={googleSignIn}>
							SIGN IN
						</button>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
