import React, { useState, useContext } from 'react';
import { deleteComment } from '../../api';
import { CommentDeleteContext } from '../Contexts/CommentDeleteContext';
import '../css/DeleteComment.css'

export const DeleteComment = ({ comment, comments, setComments }) => {
    const { user } = useContext(CommentDeleteContext);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        if (!comment || !comment.comment_id) {
            setDeleteMessage("Invalid comment data.");
            return;
        }

        if (comment.author !== user) {
            setDeleteMessage("You do not have permission to delete this comment.");
            return;
        }

        setDeleteMessage("Deleting...");
        setIsDeleting(true);

        deleteComment(comment.comment_id)
            .then(() => {
                const updatedComments = comments.filter(item => item.comment_id !== comment.comment_id);
                setComments(updatedComments);
                setDeleteMessage("Your comment was successfully deleted!");
                setIsDeleting(false);
            })
            .catch((error) => {
                setDeleteMessage("Failed to delete comment. Please try again.");
                setIsDeleting(false);
                console.error("Error deleting comment:", error);
            });
    };

    return (
        <div className='delete-comment-container'>
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Delete Comment"}
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
};