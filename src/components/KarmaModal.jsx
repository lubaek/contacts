import React, { useState, useEffect } from "react";
import { database } from "../firebase/config";
import { ref, child, get, update } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faThumbsUp,
	faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import PostCommentForm from "./PostCommentForm";
import Comment from "./Comment";

function KarmaModal({ setIsModalOpen, id }) {
	const userEmail = JSON.parse(localStorage.getItem("user")).email;
	const [contact, setContact] = useState({});
	const [isLikedByUser, setIsLikedByUser] = useState(false);
	const [isDislikedByUser, setIsDislikedByUser] = useState(false);

	const removeLike = (index) => {
		contact.likes.splice(index, 1);
		setIsLikedByUser(false);
		setContact(contact);
	};

	const removeDislike = (index) => {
		contact.dislikes.splice(index, 1);
		setIsDislikedByUser(false);
		setContact(contact);
	};

	const handleThumbsUp = () => {
		// check if contact has attribute 'likes'
		if (contact.likes) {
			// check if user has already liked
			if (isLikedByUser) {
				const userLikeIndex = contact.likes.indexOf(userEmail);
				removeLike(userLikeIndex);
			} else {
				contact.likes.push(userEmail);
				setIsLikedByUser(true);
			}
		} else {
			setIsLikedByUser(true);
			contact.likes = [userEmail];
		}

		// check if has already disliked
		if (isDislikedByUser) {
			const userDislikeIndex = contact.dislikes.indexOf(userEmail);
			removeDislike(userDislikeIndex);
		}
		update(ref(database, `/contacts/${id}`), contact);
	};

	const handleThumbsDown = () => {
		// check if contact has attribute 'dislikes'
		if (contact.dislikes) {
			// check if has already disliked
			if (isDislikedByUser) {
				const userDislikeIndex = contact.dislikes.indexOf(userEmail);
				removeDislike(userDislikeIndex);
			} else {
				contact.dislikes.push(userEmail);
				setIsDislikedByUser(true);
			}
		} else {
			setIsDislikedByUser(true);
			contact.dislikes = [userEmail];
		}
		// check if user has already liked
		if (isLikedByUser) {
			const userLikeIndex = contact.likes.indexOf(userEmail);
			removeLike(userLikeIndex);
		}
		update(ref(database, `/contacts/${id}`), contact);
	};

	useEffect(() => {
		get(child(ref(database), `contacts/${id}`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					const contact = snapshot.val();
					// check if contact has attribute 'likes'
					if (contact.likes) {
						const userLikeIndex = contact.likes.indexOf(userEmail);
						if (userLikeIndex !== -1) setIsLikedByUser(true);
					}
					// check if contact has attribute 'dislikes'
					if (contact.dislikes) {
						const userDisikeIndex = contact.dislikes.indexOf(userEmail);
						if (userDisikeIndex !== -1) setIsDislikedByUser(true);
					}
					setContact(contact);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []); //eslint-disable-line

	return (
		<div className="modal">
			<button className="modal__close-btn" onClick={() => setIsModalOpen(false)}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<div className="karma-modal">
				<h3 className="karma-modal__title">Contact Karma</h3>
				<div className="karma-modal__karma">
					<div className="karma-modal__karma__likes">
						<span>{contact?.likes ? contact.likes.length : 0}</span>
						<button onClick={handleThumbsUp}>
							<FontAwesomeIcon
								icon={faThumbsUp}
								className={isLikedByUser ? "karma-modal__liked-icon" : ""}
							/>
						</button>
					</div>
					<div className="karma-modal__karma__likes">
						<span>{contact?.dislikes ? contact.dislikes.length : 0}</span>
						<button onClick={handleThumbsDown}>
							<FontAwesomeIcon
								icon={faThumbsDown}
								className={isDislikedByUser ? "karma-modal__disliked-icon" : ""}
							/>
						</button>
					</div>
				</div>
				<PostCommentForm />
				<h3 className="karma-modal__comments__title">Comments</h3>
				<div className="karma-modal__comments">
					<Comment />
				</div>
			</div>
		</div>
	);
}

export default KarmaModal;
