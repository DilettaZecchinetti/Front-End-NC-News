import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../css/ArticleCard.css";

export const ArticleCard = ({ article }) => {
    return (
        <Card bg="dark" text="white" className="article-card">
            <Card.Body className="article-card-body">
                <div className="article-card-image">
                    <Card.Img
                        variant="top"
                        src={article.article_img_url}
                        alt={`Image for ${article.title}`}
                    />
                </div>
                <div className="article-card-content">
                    <Card.Title className="article-title">{article.title}</Card.Title>

                    <Card.Text className="article-meta">
                        <span>By {article.author} on {new Date(article.created_at).toLocaleDateString()}</span>
                    </Card.Text>
                    <Card.Text className="article-topic">Topic: {article.topic}</Card.Text>
                    <Card.Text className="article-comment-count">
                        Comments: {article.comment_count}
                    </Card.Text>
                    <Link to={`/articles/${article.article_id}`}>
                        <Button variant="primary" className="read-more-btn">Read More</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};
