import { createContext, useState } from "react";

export const CommentDeleteContext = createContext();

export const CommentDeleteProvider = ({ children }) => {
    const [commentToDelete, setCommentToDelete] = useState(null);
    const [user, setUser] = useState("tickle122");

    const deleteComment = (commentId) => {
        return api.delete(`/comments/${commentId}`)
            .then(({ data }) => {
                return data;
            })
            .catch((error) => {
                console.error('Error deleting comment:', error);
                throw error;
            });
    }

    return (
        <CommentDeleteContext.Provider
            value={{ commentToDelete, deleteComment, user }}
        >
            {children}
        </CommentDeleteContext.Provider>
    );
};
