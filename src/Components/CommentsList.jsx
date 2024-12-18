import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../Contexts/CommentsContext";
import { Comment } from "./Comment"
import { getCommentsById } from "../../api";

export const CommentsList = ({ article_id }) => {
    console.log();
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
    }, [])

    return (
        <div>
            <h4>Comments:</h4>
            {comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} />
            })}
        </div>
    )
}