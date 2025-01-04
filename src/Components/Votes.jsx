import { updateVoteCount } from "../../api";
import React, { useState } from "react";
import "../css/Votes.css"

export const Votes = ({ article_id, initialVotes }) => {
    const [votes, setVotes] = useState(initialVotes);

    const handleVote = (voteChange) => {
        setVotes((prevVotes) => prevVotes + voteChange);

        updateVoteCount(article_id, voteChange)
            .catch((err) => {
                console.log("error updating vote:", err)
                setVotes((prevVotes) => prevVotes - voteChange)
            })
    }

    return (
        <div className="votes-container">
            <h4>Votes: {votes}</h4>
            <div className="vote-buttons">
                <button className="vote-up-button" onClick={() => handleVote(1)}>👍</button>
                <button className="vote-down-button" onClick={() => handleVote(-1)}>👎</button>
            </div>
        </div>
    );

};
