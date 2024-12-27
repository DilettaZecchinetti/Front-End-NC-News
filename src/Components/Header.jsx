import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container className='header'>
                    <Navbar.Brand href="/">NC NEWS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link}>Topics</Nav.Link>
                        <Nav.Link as={Link} >Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header