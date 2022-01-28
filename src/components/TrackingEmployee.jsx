import React, { useState, useEffect } from "react";
import TrackingHistory from "./TrackingHistory";

function TrackingEmployee({ employee }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [totalSum, setTotalSum] = useState(0);

	useEffect(() => {
		const currentMonth = new Date().getMonth();
		const currentMonthCosts = employee.costs.filter(
			(item) => new Date(item.date).getMonth() === currentMonth
		);
		const totalSum = currentMonthCosts
			.map((item) => item.sum)
			.reduce((prev, next) => Number(prev) + Number(next));
		setTotalSum(totalSum);
	}, [employee]);

	return (
		<>
			<div className="tracking-employee">
				<h3 className="tracking-employee__name">{employee.userName}</h3>
				<p className="tracking-employee__sum">
					Total sum in this month: <span>{totalSum}</span>
				</p>
				<button
					className="tracking-employee__btn"
					onClick={() => setIsModalOpen(true)}
				>
					View history
				</button>
			</div>

			{isModalOpen && (
				<TrackingHistory costs={employee.costs} setIsModalOpen={setIsModalOpen} />
			)}
		</>
	);
}

export default TrackingEmployee;
