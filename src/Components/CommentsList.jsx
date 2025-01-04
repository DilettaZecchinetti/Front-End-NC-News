import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../Contexts/CommentsContext";
import { Comment } from "./Comment";
import { getCommentsById } from "../../api";
import { AddComment } from "./AddComment";
import { DeleteComment } from "./DeleteComment";
import { CommentDeleteProvider } from "../Contexts/CommentDeleteContext";
import '../css/Article.css'

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

    return (
        <CommentDeleteProvider>
            <div>
                <AddComment article_id={article_id} addCommentToList={addCommentToList} />
                {comments.map((comment) => {
                    return (
                        <div key={comment.comment_id}>
                            <Comment comment={comment} />
                            <DeleteComment comment={comment} comments={comments} setComments={setComments}
                            />
                        </div>
                    );
                })}
            </div>
        </CommentDeleteProvider>
    );
};
