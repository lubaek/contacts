import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Comment({ comment }) {
	return (
		<div className="comment">
			<h4 className="comment__author">
				{comment.author} - {comment.status} karma
			</h4>
			<p className="comment__text">{comment.text}</p>
			<div className="comment__date">
				<FontAwesomeIcon icon={faClock} />
				<span>{moment(comment.date).utc().local().fromNow()}</span>
			</div>
		</div>
	);
}

export default Comment;
