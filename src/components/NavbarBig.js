import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarBig() {
    return (
        <Navbar expand="lg" style={{
            height: 70, backgroundColor: 'white', boxShadow: '1px 2px 5px gray', marginBottom: 20
        }}>
            <Container fluid>
                <Navbar.Brand href="/" style={{ fontFamily: 'poppins', fontSize: 26 }}>Andalas</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="https://www.mediaandalas.com/" style={{ fontFamily: 'poppins' }}>Home</Nav.Link>
                        <Nav.Link href="about" style={{ fontFamily: 'poppins' }}>About</Nav.Link>
                        <NavDropdown title="Contact" id="navbarScrollingDropdown" style={{ fontFamily: 'poppins' }}>
                            <NavDropdown.Item href="https://web.facebook.com/groups/250968749647284" style={{ fontFamily: 'poppins' }}>
                                Facebook
                            </NavDropdown.Item>
                            <NavDropdown.Item href="http://wa.link/p9r6ei" style={{ fontFamily: 'poppins' }}>
                                Whatsapp
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="login" style={{ fontFamily: 'poppins' }}>
                            Login
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            style={{ fontFamily: 'poppins', fontSize: 14 }}
                            type="search"
                            placeholder="Cari berita"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" style={{ fontFamily: 'poppins' }}>Cari</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBig;