import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../Contexts/CommentsContext";
import { UsersContext } from "../Contexts/UsersContext";
import { Comment } from "./Comment";
import { getCommentsById } from "../../api";
import { AddComment } from "./AddComment";
import { DeleteComment } from "./DeleteComment";
import { CommentDeleteProvider } from "../Contexts/CommentDeleteContext";
import '../css/Article.css';

export const CommentsList = ({ article_id }) => {
    const { comments, setComments } = useContext(CommentsContext);
    const { users } = useContext(UsersContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCommentsById(article_id)
            .then(({ comments }) => {
                setComments(comments);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [article_id]);

    const addCommentToList = (newComment) => {
        setComments((currentComments) => [newComment, ...currentComments]);
    };

    // Function to get the user for the specific comment using the author's username
    const getUserForComment = (authorUsername) => {
        return users.find(user => user.username === authorUsername);
    };

    return (
        <CommentDeleteProvider>
            <div>
                <AddComment article_id={article_id} addCommentToList={addCommentToList} />
                {comments.map((comment) => {
                    const user = getUserForComment(comment.author);
                    return (
                        <div key={comment.comment_id}>
                            <Comment comment={comment} user={user} />
                            <DeleteComment comment={comment} comments={comments} setComments={setComments} />
                        </div>
                    );
                })}
            </div>
        </CommentDeleteProvider>
    );
};
