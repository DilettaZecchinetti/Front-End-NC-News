
import React, { createContext, useState, useEffect } from 'react';
import { getUsers } from '../../api';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(({ users }) => {
                setUsers(users);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <UsersContext.Provider value={{ users, isLoading }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => {
    return React.useContext(UsersContext);
};
