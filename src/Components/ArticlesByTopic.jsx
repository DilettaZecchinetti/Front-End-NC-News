import React, { useState, useEffect } from "react";
import { getArticlesByTopic, getTopics } from "../../api";
import { ArticleCard } from "./ArticleCard";
import { Spinner } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import "../css/ArticlesByTopic.css";

export const ArticlesByTopic = () => {
    const [articles, setArticles] = useState([]);
    const [loadingTopics, setLoadingTopics] = useState(true);
    const [topicDescription, setTopicDescription] = useState("");
    const { topic } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

    useEffect(() => {
        setLoadingTopics(true);
        getArticlesByTopic(topic, sortBy, order)
            .then(({ articles }) => {
                setArticles(articles);
                setLoadingTopics(false);
            })
            .catch((err) => {
                console.error("Error fetching articles by topic:", err);
                setLoadingTopics(false);
            });

        getTopics()
            .then((topicData) => {

                if (topicData && topicData.topics && Array.isArray(topicData.topics)) {
                    const selectedTopic = topicData.topics.find(t => t.slug === topic);


                    if (selectedTopic) {
                        setTopicDescription(selectedTopic.description);
                    } else {
                        console.log("No matching topic found for slug:", topic);
                        setTopicDescription("Description not available");
                    }
                } else {

                    setTopicDescription("Description not available");
                }
            })
            .catch((err) => {
                console.error("Error fetching topic details:", err);
                setTopicDescription("Description not available");
            });
    }, [topic, sortBy, order]);

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

    const selectedTopic = topic && typeof topic === "string" ? topic.charAt(0).toUpperCase() + topic.slice(1) : "Unknown Topic";


    if (loadingTopics) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="articles-by-topic">
            <h2>Articles on {selectedTopic}</h2>

            <p>{topicDescription}</p>

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

            <div className="article-container">
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <ArticleCard key={article.article_id} article={article} />
                    ))
                ) : (
                    <p>No articles found for this topic.</p>
                )}
            </div>
        </div>
    );
};
