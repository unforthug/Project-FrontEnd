import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Nav_bar.css'
import {logout} from '../Redux/UserSlice';



function Nav_bar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut =(e)=>{
    e.preventDefault();
    dispatch(logout({navigate}))  
}

  const { userLoggedIn } = useSelector((state) => state.auth);

  return (
    <div>
    <Navbar bg="#537FE7" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{color : "#C0EEF2"}}>YOURDAILY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='link_container'>
            <Link to={"/"} className="link">Home</Link>
            <Link to={"/news"} className="link">News</Link>
            {userLoggedIn &&  <Link to={"/profile"} className="link" >MySpace</Link>}
            <Link to={"/movies"} className="link">Movies</Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <Link className="link" >Action</Link><br/>
              <Link className="link">Another action </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{color : "#537FE7"}}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            </div>
          </Nav>
          {/* <Form className="d-flex">
          <Button variant="outline-success">Search</Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}
          {!userLoggedIn && (<Button className='btn' variant="white"><Link to={'/user/signup'} style={{textDecoration : "none" , color : "#537FE7"}}>Sign Up</Link></Button>)}
          {userLoggedIn ? <Button style={{textDecoration : "none" , color : "#537FE7"}}  variant="white" onClick={handleLogOut}>LogOut</Button> : (<Button className='btn' variant="white"><Link to={'/user/signin'} style={{textDecoration : "none" , color : "#537FE7"}}>Sign In</Link></Button>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nav_bar