import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
    return (
        <Card bg="dark" text="white" style={{ width: "80%", margin: "0 auto" }}>
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: "0 0 200px", marginRight: "20px" }}>
                    <Card.Img
                        variant="top"
                        src={article.article_img_url}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div style={{ flex: "1" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Card.Title style={{ flex: "1" }}>{article.title}</Card.Title>
                        <Card.Text style={{ fontSize: "0.9em", color: "#bbb" }}>
                            <strong>Author:</strong> {article.author}
                        </Card.Text>
                    </div>
                    <Card.Text>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </Card.Text>
                    <Card.Text style={{ fontSize: "0.9em", color: "#bbb" }}>
                        Created on: {new Date(article.created_at).toLocaleDateString()}
                    </Card.Text>
                    <Link to={`/articles/${article.article_id}/${article.title}`}>
                        <Button variant="dark">Read more</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>

    );
};

