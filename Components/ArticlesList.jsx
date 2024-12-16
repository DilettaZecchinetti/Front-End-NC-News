import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";


function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticles()
            .then(({ articles }) => {
                console.log(articles)
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="article-container">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </section>
    );
}

export default ArticleList;
