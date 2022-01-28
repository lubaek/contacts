import React, { useState } from "react";
import { ref, push, update } from "firebase/database";
import { database } from "../firebase/config";
import { toast } from "react-toastify";

function TrackingForm({ trackingHistory }) {
	const userEmail = JSON.parse(localStorage.getItem("user")).email;
	const userName = JSON.parse(localStorage.getItem("user")).displayName;

	const [formValues, setFormValues] = useState({
		sum: "",
		comment: "",
	});

	const checkIfPostByUser = () => {
		return Object.keys(trackingHistory).find(
			(key) => trackingHistory[key].userEmail === userEmail
		);
	};

	const handleChangeValue = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userId = checkIfPostByUser();
		if (userId) {
			const userHistory = trackingHistory[userId];
			update(ref(database, `/trackingHistory/${userId}`), {
				costs: [...userHistory.costs, { ...formValues, date: Date() }],
			})
				.then(() => {
					toast.success("Successfully added costs");
				})
				.catch((error) => toast.error(error));
		} else {
			push(ref(database, "trackingHistory/"), {
				userEmail,
				userName,
				costs: [{ ...formValues, date: Date() }],
			})
				.then(() => {
					toast.success("Successfully added costs");
				})
				.catch((error) => toast.error(error));
		}

		setFormValues({ sum: "", comment: "" });
	};

	return (
		<form className="tracking-form" onSubmit={handleSubmit}>
			<h3 className="tracking-form__title">
				How much did you spend on lunch today?
			</h3>
			<div className="tracking-form__item">
				<label className="tracking-form__item__label">Enter a sum *</label>
				<input
					name="sum"
					type="number"
					className="tracking-form__text"
					placeholder="0"
					value={formValues.sum}
					onChange={handleChangeValue}
				/>
			</div>

			<div className="tracking-form__item">
				<label className="tracking-form__item__label">Add a comment</label>
				<textarea
					name="comment"
					rows="3"
					placeholder="Type a comment (optional) "
					className="tracking-form__text"
					value={formValues.comment}
					onChange={handleChangeValue}
				></textarea>
			</div>
			<button className="tracking-form__btn">Submit</button>
		</form>
	);
}

export default TrackingForm;
