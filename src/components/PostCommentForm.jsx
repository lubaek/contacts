import React, { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function PostCommentForm({ postComment }) {
	const [comment, setComment] = useState("");
	const [status, setStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (status && comment) {
			postComment(status, comment);
			setComment("");
			setStatus("");
		} else toast.error("Please provide value in each input field!");
	};

	return (
		<form className="post-comment-form" onSubmit={handleSubmit}>
			<h3 className="post-comment-form__title">Choose status</h3>
			<div className="post-comment-form__status">
				<button
					type="button"
					onClick={() => setStatus("positive")}
					className="post-comment-form__status-btn"
				>
					<FontAwesomeIcon
						icon={faArrowUp}
						className={status === "positive" ? "positive" : ""}
					/>
				</button>
				<button
					type="button"
					onClick={() => setStatus("negative")}
					className="post-comment-form__status-btn"
				>
					<FontAwesomeIcon
						icon={faArrowDown}
						className={status === "negative" ? "negative" : ""}
					/>
				</button>
			</div>
			<h3 className="post-comment-form__title">Add a comment</h3>
			<textarea
				rows="3"
				placeholder="Type a comment"
				className="post-comment-form__text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			></textarea>
			<button className="post-comment-form__btn">Post Comment</button>
		</form>
	);
}

export default PostCommentForm;
