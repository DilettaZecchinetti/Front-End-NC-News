import React, { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "./ArticleCard";

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticles()
            .then(({ articles }) => {
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section className="article-container">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </section>
    );
}

export default ArticleList;


