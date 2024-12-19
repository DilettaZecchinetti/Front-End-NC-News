import { createContext, useState } from "react";

// Create the context
export const CommentsContext = createContext();

// Provide the context to the children components
export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);

    return (
        <CommentsContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentsContext.Provider>
    );
};
