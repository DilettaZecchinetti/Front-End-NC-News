import { Card, Button } from "react-bootstrap";
import "../css/Comment.css";

export const Comment = ({ comment }) => {
    return (
        <Card className="comment-card">
            <Card.Header className="comment-header">
                <div className="comment-header-info">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date"> {new Date(comment.created_at).toLocaleDateString()} at{" "}
                        {new Date(comment.created_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}</span>
                </div>
            </Card.Header>
            <Card.Body className="comment-body">
                <Card.Text className="comment-text">{comment.body}</Card.Text>
            </Card.Body>
        </Card>
    );
};
