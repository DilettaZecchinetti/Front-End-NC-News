import { CommentsList } from "./CommentsList";
import { AddComment } from "./AddComment";

export const Comments = ({ article_id }) => {
    return (
        <div>
            <AddComment article_id={article_id} />
            <CommentsList article_id={article_id} />
        </div>
    )
}