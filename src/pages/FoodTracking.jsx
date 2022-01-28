import React, { useState, useEffect } from "react";
import { auth, database } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import Header from "../components/Header";
import TrackingForm from "../components/TrackingForm";
import TrackingEmployee from "../components/TrackingEmployee";

function FoodTracking() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);
	const [trackingHistory, setTrackingHistory] = useState("");

	onAuthStateChanged(auth, (user) => {
		if (user) {
			return setIsUserSignedIn(true);
		}
		setIsUserSignedIn(false);
	});

	useEffect(() => {
		let cleanupFunction = false;
		onValue(ref(database), (snapshot) => {
			const data = snapshot.val();
			if (data !== null && !cleanupFunction) {
				setTrackingHistory({ ...data.trackingHistory });
			}
		});
		return () => (cleanupFunction = true);
	}, []); //eslint-disable-line

	return (
		<>
			<Header isSignIn={isUserSignedIn} />
			<div className="food-tracking">
				<div className="food-tracking__inner container">
					{isUserSignedIn ? (
						<>
							<TrackingForm trackingHistory={trackingHistory} />
							<div className="food-tracking__employees">
								{Object.keys(trackingHistory).map((id) => {
									return <TrackingEmployee key={id} employee={trackingHistory[id]} />;
								})}
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
