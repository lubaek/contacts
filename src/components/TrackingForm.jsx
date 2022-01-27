import React from "react";

function TrackingForm() {
	return (
		<form className="tracking-form">
			<h3 className="tracking-form__title">
				How much did you spend on lunch today?
			</h3>
			<div className="tracking-form__item">
				<label className="tracking-form__item__label">Enter a sum *</label>
				<input type="number" className="tracking-form__text" placeholder="0" />
			</div>

			<div className="tracking-form__item">
				<label className="tracking-form__item__label">Add a comment</label>
				<textarea
					rows="3"
					placeholder="Type a comment (optional) "
					className="tracking-form__text"
				></textarea>
			</div>
			<button className="tracking-form__btn">Submit</button>
		</form>
	);
}

export default TrackingForm;
