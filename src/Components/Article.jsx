import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { Link } from "react-router-dom";
import { CommentsList } from "./CommentsList";
import { CommentsProvider } from "../Contexts/CommentsContext";
import { Votes } from "./Votes";
import Button from 'react-bootstrap/Button';
import "../css/Article.css"


function Article() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (!article) return <p>Article not found.</p>;


  return (
    <div className="single-article-container">
      <h1>{article.title}</h1>
      <p>By {article.author} on {new Date(article.created_at).toLocaleDateString()} </p>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.body}</p>

      <Votes article_id={article_id} initialVotes={article.votes} setArticle={setArticle} />
      <Link to="/">
        <Button variant="dark">Back to Articles</Button>
      </Link>
      <CommentsProvider>
        <CommentsList article_id={article.article_id} />
      </CommentsProvider>
    </div >
  );
}

export default Article;