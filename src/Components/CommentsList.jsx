import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../Contexts/CommentsContext";
import { Comment } from "./Comment";
import { getCommentsById } from "../../api";
import { useParams } from "react-router";
import { AddComment } from "./AddComment";

export const CommentsList = ({ article_id }) => {
    const { comments, setComments } = useContext(CommentsContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCommentsById(article_id)
            .then(({ comments }) => {
                console.log(comments)
                setComments(comments);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [article_id])

    const addCommentToList = (newComment) => {
        setComments((currentComments) => [newComment, ...currentComments]);
    };

    return (
        <div>
            <AddComment article_id={article_id} addCommentToList={addCommentToList} />
            {comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} />
            })}
        </div>
    )
}