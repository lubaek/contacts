import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function TrackingHistory({ setIsModalOpen }) {
	return (
		<div className="modal">
			<button className="modal__close-btn" onClick={() => setIsModalOpen(false)}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<div className="tracking-history">
				<h3 className="tracking-history__title">Food Tracking History</h3>
				<div className="tracking-history__container">
					<div className="tracking-history__item">
						<p className="tracking-history__date">
							<span>Datetime: </span> 27.01.2022
						</p>
						<p className="tracking-history__sum">
							<span>Sum: </span> 150
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrackingHistory;
