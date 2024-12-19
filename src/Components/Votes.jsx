
import { updateVoteCount } from "../../api";
import React, { useState } from "react";

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
        <div>
            <h4>Votes: {votes}   </h4>
            <div>
                <button onClick={() => handleVote(1)}>👍</button>
                <button onClick={() => handleVote(-1)}>👎</button>
            </div>
        </div>
    )
};
