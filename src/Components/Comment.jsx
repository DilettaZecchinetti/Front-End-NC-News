import { Card } from "react-bootstrap";

export const Comment = ({ comment }) => {
    return (
        <Card>
            <Card.Header> {new Date(comment.created_at).toLocaleDateString()}</Card.Header>
            <Card.Body>
                <Card.Title>{comment.author}</Card.Title>
                <Card.Text>
                    {comment.body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};