import { useEffect } from "react";
import { getCommentsById } from "../../api";
import { CommentsList } from "./CommentsList";

export const Comments = ({ article_id }) => {
    return <CommentsList article_id={article_id} />
}