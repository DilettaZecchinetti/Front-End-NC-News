import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../../api";
import { Comments } from "./Comments";
import { CommentsProvider } from "../Contexts/CommentsContext";

function Article() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        setCurrentArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load the article.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{currentArticle.title}</h1>
      <img
        src={currentArticle.article_img_url}
        alt={`Image for ${currentArticle.title}`}
        style={{ width: "50%", height: "auto" }}
      />
      <h2>Created on: {new Date(currentArticle.created_at).toLocaleDateString()}</h2>
      <p>{currentArticle.body}</p>
      <CommentsProvider>
        <Comments article_id={article_id} />
      </CommentsProvider>
      <Link to="/">
        <button>Back to Articles</button>
      </Link>
    </div>
  );
}

export default Article;