import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faThumbsUp,
	faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import PostCommentForm from "./PostCommentForm";
import Comment from "./Comment";

function KarmaModal({ setIsModalOpen, contact, id }) {
	return (
		<div className="modal">
			<button className="modal__close-btn" onClick={() => setIsModalOpen(false)}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<div className="karma-modal">
				<h3 className="karma-modal__title">Contact Karma</h3>
				<div className="karma-modal__karma">
					<div className="karma-modal__karma__likes">
						<span>15</span>
						<button>
							<FontAwesomeIcon icon={faThumbsUp} />
						</button>
					</div>
					<div className="karma-modal__karma__likes">
						<span>0</span>
						<button>
							<FontAwesomeIcon icon={faThumbsDown} />
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
