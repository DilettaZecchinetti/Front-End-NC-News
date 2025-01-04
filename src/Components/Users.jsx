import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import "../css/Users.css";

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(({ users }) => {
                console.log(users);
                setUsers(users);
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
        <div className="users-container">
            <header>
                <h1>Users</h1>
            </header>
            <nav>
                <ul>
                    {users.map((user) => (
                        <li key={user.username} className="user-item">
                            <img
                                src={user.avatar_url}
                                alt={user.username}
                                className="user-avatar"
                                width={80}
                                height={80}
                            />
                            <div className="user-info">
                                <strong>Username: {user.username}</strong>
                                <p>Name: {user.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Users;
