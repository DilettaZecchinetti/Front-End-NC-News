import React, { useState, useEffect } from "react";
import { getTopics } from "../../api";
import { Link } from "react-router";

function TopicsList() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getTopics()
            .then(({ topics }) => {
                console.log(topics)
                setTopics(topics);
                setIsLoading(false)
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="topic-container">
            <header>
                Topics
            </header>

            <ul>
                {topics.map((topic) => (
                    <li key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`} aria-label={`View articles on ${topic.slug}`}>
                            {topic.slug}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TopicsList;