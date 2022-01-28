import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function TrackingHistory({ costs, setIsModalOpen }) {
	return (
		<div className="modal">
			<button className="modal__close-btn" onClick={() => setIsModalOpen(false)}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<div className="tracking-history">
				<h3 className="tracking-history__title">Food Tracking History</h3>
				<div className="tracking-history__container">
					{costs
						.sort(function (a, b) {
							return new Date(b.date) - new Date(a.date);
						})
						.map((cost, index) => {
							return (
								<div key={index} className="tracking-history__item">
									<p className="tracking-history__date">
										<span>Datetime: </span> {cost.date}
									</p>
									<p className="tracking-history__sum">
										<span>Sum: </span> {cost.sum}
									</p>
									{cost.comment && (
										<p className="tracking-history__sum">
											<span>Comment: </span> {cost.comment}
										</p>
									)}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default TrackingHistory;
