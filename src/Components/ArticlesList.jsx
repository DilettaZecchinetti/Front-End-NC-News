import React, { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "./ArticleCard";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "../css/ArticlesList.css";

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

    useEffect(() => {

        setIsLoading(true);
        getArticles(sortBy, order)
            .then(({ articles }) => {

                setArticles(articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [sortBy, order]);

    const handleSortByChange = (event) => {
        const newSortBy = event.target.value;
        setSearchParams((prevParams) => ({
            ...prevParams,
            sort_by: newSortBy,
        }));
    };

    const handleSortOrderChange = (event) => {
        const newOrder = event.target.value;
        setSearchParams((prevParams) => ({
            ...prevParams,
            order: newOrder,
        }));
    };

    return (
        <div>
            <div className="articles-list-name">Articles</div>
            <div className="sorting-options">
                <label id="sort_by">Sort by: </label>
                <select id="sort_by" value={sortBy} onChange={handleSortByChange}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
                </select>
                <label id="sort_order">Order: </label>
                <select id="sort_order" value={order} onChange={handleSortOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            {/* Conditionally render the spinner if articles are loading */}
            {isLoading ? (
                <div className="spinner-container">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div className="article-container">
                    {articles.map((article) => (
                        <ArticleCard key={article.article_id} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ArticleList;
