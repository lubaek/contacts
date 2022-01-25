import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Comment() {
	return (
		<div className="comment">
			<h4 className="comment__author">Klara Lu</h4>
			<p className="comment__text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis sequi
				quaerat quo ea eaque necessitatibus asperiores vero a itaque. Facere
				laudantium eveniet recusandae sint voluptatibus impedit facilis quo tempora
				animi rem distinctio odit cum, enim at sed in, sequi inventore dignissimos.
				Atque aut magni maxime possimus voluptas numquam neque!
			</p>
			<div className="comment__date">
				<FontAwesomeIcon icon={faClock} />
				<span>2 hours ago</span>
			</div>
		</div>
	);
}

export default Comment;
