import React, { useState, useEffect } from "react";
import { database } from "../firebase/config";
import { ref, child, get, update } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faArrowUp,
	faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import PostCommentForm from "./PostCommentForm";
import Comment from "./Comment";
import { toast } from "react-toastify";

function KarmaModal({ setIsModalOpen, id }) {
	const userEmail = JSON.parse(localStorage.getItem("user")).email;
	const userName = JSON.parse(localStorage.getItem("user")).displayName;
	const [contact, setContact] = useState({});

	const checkIfCommentByUser = (status) => {
		// check if contact has attribute 'comments'
		if (contact.comments) {
			const currentYear = new Date().getFullYear();
			const currentMonth = new Date().getMonth();
			return contact.comments.find((item) => {
				return (
					item.email === userEmail &&
					item.status === status &&
					new Date(item.date).getFullYear() === currentYear &&
					new Date(item.date).getMonth() === currentMonth
				);
			});
		}
		return false;
	};

	const postComment = (status, comment) => {
		if (!checkIfCommentByUser(status)) {
			let newComment = {
				email: userEmail,
				author: userName,
				date: new Date(),
				text: comment,
				status,
			};
			// check if contact has attribute 'comments'
			if (contact.comments) contact.comments.push(newComment);
			else contact.comments = [newComment];

			if (status === "positive") contact.likes += 1;
			else contact.dislikes += 1;
			update(ref(database, `/contacts/${id}`), contact).then(() =>
				toast.success("Comment was added successfully")
			);
		} else toast.error(`You have already left ${status} karma in this month!`);
	};

	useEffect(() => {
		get(child(ref(database), `contacts/${id}`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					const contact = snapshot.val();
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
						<span>{contact.likes}</span>
						<FontAwesomeIcon icon={faArrowUp} />
					</div>
					<div className="karma-modal__karma__likes">
						<span>{contact.dislikes}</span>
						<FontAwesomeIcon icon={faArrowDown} />
					</div>
				</div>
				<PostCommentForm postComment={postComment} />
				<h3 className="karma-modal__comments__title">Comments</h3>
				<div className="karma-modal__comments">
					{contact.comments ? (
						contact.comments
							.sort(function (a, b) {
								return new Date(b.date) - new Date(a.date);
							})
							.map((item, index) => <Comment key={index} comment={item} />)
					) : (
						<p>No comments yet</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default KarmaModal;
