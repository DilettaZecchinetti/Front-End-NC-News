import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../Contexts/CommentsContext";
import { Comment } from "./Comment";
import { getCommentsById } from "../../api";
import { AddComment } from "./AddComment";
import { DeleteComment } from "./DeleteComment";

export const CommentsList = ({ article_id }) => {
    const { comments, setComments } = useContext(CommentsContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCommentsById(article_id)
            .then(({ comments }) => {
                console.log(comments);
                setComments(comments);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [article_id]);

    const addCommentToList = (newComment) => {
        setComments((currentComments) => [newComment, ...currentComments]);
    };

    // Function to remove a comment from the list
    const removeCommentFromList = (comment_id) => {
        setComments((currentComments) =>
            currentComments.filter((comment) => comment.comment_id !== comment_id)
        );
    };

    return (
        <div>
            <AddComment article_id={article_id} addCommentToList={addCommentToList} />
            {comments.map((comment) => {
                return (
                    <div key={comment.comment_id}>
                        <Comment comment={comment} />
                        <DeleteComment
                            comment_id={comment.comment_id}
                            removeCommentFromList={removeCommentFromList}
                        />
                    </div>
                );
            })}
        </div>
    );
};
