import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 sticky-top">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}>
              <Offcanvas.Header>
                <Offcanvas.Title className='display-3 m-auto text-primary' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img width={200} src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png" alt='xentice' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="align-center ms-5">
                  <Nav.Link href="#action1">Post Requirements</Nav.Link>
                  <Nav.Link href="#action2">Post Ad</Nav.Link>
                  <Nav.Link href="#action3">Post Services</Nav.Link>
                  <Nav.Link href="#action4">Profile</Nav.Link>
                  <Nav.Link href="#action5">Notification</Nav.Link>
                  <Nav.Link href="#action6">Near Me</Nav.Link>
                  <Nav.Link href="#action7">Pricing</Nav.Link>
                  <hr />
                  <Nav.Link href="#action8">Login/Sign Up</Nav.Link>
                  <br />
                  <Nav.Link href="#action9">About Us</Nav.Link>
                  <Nav.Link href="#action10">Contact Us</Nav.Link>
                  <Nav.Link href="#action10">Privacy Policy</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand href="https://www.xentice.com/" className='text-primary ms-2 display-6'><h1>xentice</h1></Navbar.Brand>
            <Nav.Link className='ms-auto' href="#action10">Post Ad</Nav.Link>
            <Nav.Link className='ms-4' href="https://www.xentice.com/Nearme">Near Me</Nav.Link>
            <Nav.Link className='ms-4' href="#action10">Login/Sign Up</Nav.Link>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;