import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { LogoNodejs, NotificationsOutline, PersonCircle } from 'react-ionicons'
function NavbarAdmin() {
    return (
        <Navbar expand="lg" style={{
            height: 70, backgroundColor: 'white', boxShadow: '1px 2px 5px gray', marginBottom: 20
        }}>
            <Container fluid>
                <Navbar.Brand href="/" style={{ fontFamily: 'poppins', fontSize: 26 }}>Andalas</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Form className="d-flex">
                    <Form.Control
                        style={{ fontFamily: 'poppins', fontSize: 14, borderRadius: 20 }}
                        type="search"
                        placeholder="Cari berita"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary" style={{ fontFamily: 'poppins', borderRadius: 20 }}>Cari</Button>
                </Form>
                <Navbar className='d-flex'>
                    <NotificationsOutline
                        color={'#00000'}
                        title={''}
                        height="30px"
                        width="30px"
                    />
                    <PersonCircle
                        color={'#00000'}
                        title={''}
                        height="30px"
                        width="30px"
                    />
                    <b style={{ marginRight: 10, marginLeft: 10 }}>Hi, Zuli</b>
                </Navbar>


            </Container>
        </Navbar>
    );
}

export default NavbarAdmin;