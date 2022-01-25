import React, { useState } from "react";

function PostCommentForm() {
	const [comment, setComment] = useState("");

	return (
		<form className="post-comment-form">
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
