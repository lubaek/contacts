import React, { useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/Header";
import TrackingForm from "../components/TrackingForm";
import TrackingEmployee from "../components/TrackingEmployee";

function FoodTracking() {
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
			<div className="food-tracking">
				<div className="food-tracking__inner container">
					{isUserSignedIn ? (
						<>
							<TrackingForm />
							<div className="food-tracking__employees">
								<TrackingEmployee />
								<TrackingEmployee />
								<TrackingEmployee />
								<TrackingEmployee />
								<TrackingEmployee />
							</div>
						</>
					) : (
						<p>Sign in to view food tracking</p>
					)}
				</div>
			</div>
		</>
	);
}

export default FoodTracking;
