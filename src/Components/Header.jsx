import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">NC NEWS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/#home">Home</Nav.Link>
                        <Nav.Link href="#features">Topics</Nav.Link>
                        <Nav.Link href="#pricing">Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header