import React, { useState } from 'react';
import { deleteComment } from '../../api';

export const DeleteComment = ({ comment_id, removeCommentFromList }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();
        setIsDeleting(true);
        setDeleteMessage("Deleting your comment...");

        deleteComment(comment_id)
            .then((response) => {
                console.log("comment_id:", comment_id);

                if (response.success) {
                    removeCommentFromList(comment_id);
                    setDeleteMessage("Comment deleted successfully!");
                } else {
                    setDeleteMessage("Failed to delete the comment.");
                }
            })
            .catch((err) => {
                setDeleteMessage("Error deleting the comment. Please try again.");
                console.error("Error deleting comment:", err);
            })
            .finally(() => {
                setIsDeleting(false);
            });
    };

    return (
        <div>
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Delete Comment"}
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
};