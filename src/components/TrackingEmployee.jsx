import React, { useState } from "react";
import TrackingHistory from "./TrackingHistory";

function TrackingEmployee() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<div className="tracking-employee">
				<h3 className="tracking-employee__name">Younghoon</h3>
				<p className="tracking-employee__sum">
					Total sum in this month: <span>150</span>
				</p>
				<button
					className="tracking-employee__btn"
					onClick={() => setIsModalOpen(true)}
				>
					View history
				</button>
			</div>

			{isModalOpen && <TrackingHistory setIsModalOpen={setIsModalOpen} />}
		</>
	);
}

export default TrackingEmployee;
