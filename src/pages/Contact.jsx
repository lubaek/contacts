import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, push, onValue, update } from "firebase/database";
import { database } from "../firebase/config";
import { toast } from "react-toastify";
import contactImg from "../images/5fATtiHqr5I.jpg";

function Contact() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [formValues, setFormValues] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formValues.name &&
			formValues.phoneNumber &&
			formValues.email &&
			formValues.address
		) {
			if (id) {
				update(ref(database, `/contacts/${id}`), formValues)
					.then(() => {
						toast.success("Contact was updated successfully");
						navigate("/");
					})
					.catch((error) => toast.error(error));
			} else {
				push(ref(database, "contacts/"), formValues)
					.then(() => {
						toast.success("Contact was added successfully");
						navigate("/");
					})
					.catch((error) => toast.error(error));
			}
		} else toast.error("Please provide value in each input field!");
	};

	useEffect(() => {
		let cleanupFunction = false;
		if (id) {
			onValue(ref(database), (snapshot) => {
				const data = snapshot.val();
				if (data !== null && !cleanupFunction) {
					setFormValues({ ...data.contacts[id] });
				}
			});
		}
		return () => (cleanupFunction = true);
	}, [id]);

	return (
		<div className="contact">
			<div className="contact__inner container">
				<form className="contact__form" onSubmit={handleSubmit}>
					<div className="contactCard__img">
						<div className="contactCard__img__inner">
							<img src={contactImg} alt="contact" />
						</div>
					</div>
					<div className="contact__form-item">
						<label className="contact__form__label">Name *</label>
						<input
							type="text"
							name="name"
							value={formValues.name}
							onChange={handleChange}
						/>
					</div>
					<div className="contact__form-item">
						<label className="contact__form__label">Phone number *</label>
						<input
							type="text"
							name="phoneNumber"
							value={formValues.phoneNumber}
							onChange={handleChange}
						/>
					</div>
					<div className="contact__form-item">
						<label className="contact__form__label">Address *</label>
						<input
							type="text"
							name="address"
							value={formValues.address}
							onChange={handleChange}
						/>
					</div>
					<div className="contact__form-item">
						<label className="contact__form__label">Email *</label>
						<input
							type="text"
							name="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
					<div className="contact__form-actions">
						<button
							className="contact__form-btn"
							type="button"
							onClick={() => navigate("/")}
						>
							Back
						</button>
						<button className="contact__form-btn" type="submit">
							{id ? "Save" : "Add"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
