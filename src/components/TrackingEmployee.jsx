import React from "react";

function TrackingEmployee() {
	return (
		<div className="tracking-employee">
			<h3 className="tracking-employee__name">Younghoon</h3>
			<p className="tracking-employee__sum">
				Total sum in this month: <span>150</span>
			</p>
			<button className="tracking-employee__btn">View history</button>
		</div>
	);
}

export default TrackingEmployee;
