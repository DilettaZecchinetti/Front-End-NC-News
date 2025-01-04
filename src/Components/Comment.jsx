import { Card } from "react-bootstrap";
import "../css/Comment.css";
import React from 'react';

export const Comment = ({ comment, user }) => {

    return (
        <Card bg="dark" text="white" className="comment-card">
            <Card.Header className="comment-header">
                <div className="comment-header-info">
                    <div className="comment-author-container">
                        <img
                            src={user.avatar_url}
                            alt={user.username}
                            className="comment-author-img"
                        />
                        <span className="comment-author">{comment.author}</span>
                    </div>
                </div>
                <div className="comment-header-info-date">
                    {new Date(comment.created_at).toLocaleDateString()} at{" "}
                    {new Date(comment.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </div>
            </Card.Header>
            <Card.Body className="comment-body">
                <Card.Text className="comment-text">{comment.body}</Card.Text>
            </Card.Body>
        </Card>
    );
}    