import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIMG from "../Assets/shopping-cart.png"
function Navigationbar() {
  const cartProducts=useSelector(state=> state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/dashbord" as={Link}>Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link to="/cart" as={Link}><Badge bg="danger">{cartProducts.length}</Badge> </Nav.Link>
           
        
        {/* <Nav.Link to="/cart" as={Link}><img src={CartIMG} alt='Not Dispaly' class="d-md-block img-flude mx-2 mt-4 " width="150px" autoplay/><span style={{position:'relative', top:-45, fontSize:20, left:35, color:'red'}}> {cartProducts.length}</span></Nav.Link> */}
      </Container>
    </Navbar>
  );
}

export default Navigationbar;