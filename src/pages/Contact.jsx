import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyContacts } from "../utils/dummyContacts";
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

	useEffect(() => {
		if (id) {
			const contact = dummyContacts.find((item) => item.id === +id);
			setFormValues(contact);
		}
	}, [id]);

	return (
		<div className="contact">
			<div className="contact__inner container">
				<form className="contact__form">
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
						<button className="contact__form-btn" onClick={() => navigate("/")}>
							Back
						</button>
						<button className="contact__form-btn" onClick={() => navigate("/")}>
							{id ? "Save" : "Add"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
