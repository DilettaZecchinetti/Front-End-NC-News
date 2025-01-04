import React, { useEffect, useState } from 'react';
import { useUsers } from '../Contexts/UsersContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../css/Header.css";

function Header() {
    const { users, isLoading } = useUsers();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (!isLoading && users.length > 0) {
            const user = users.find(user => user.username === "tickle122");
            setCurrentUser(user);
        }
    }, [users, isLoading]);

    return (
        <div className='header'>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container className='header'>
                    <Navbar.Brand href="/" className="nc-news-brand">NC NEWS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/topics/coding">Coding</Nav.Link>
                        <Nav.Link as={Link} to="/topics/football">Football</Nav.Link>
                        <Nav.Link as={Link} to="/topics/cooking">Cooking</Nav.Link>
                        <Nav.Link as={Link} to="/users">Users</Nav.Link>
                    </Nav>
                    <Navbar.Text className="ms-auto text-white">
                        Logged in as: <strong>tickle122</strong>
                    </Navbar.Text>
                    {currentUser && currentUser.avatar_url && (
                        <img
                            src={currentUser.avatar_url}
                            alt="User Avatar"
                            className="user-avatar ms-3"
                            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                        />
                    )}
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
