import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home"><img style={{height: '30px'}} src="https://i.ibb.co/t3rc4qj/Group-1329.png" alt="icon"/></Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Donations</Nav.Link>
      <Nav.Link href="#pricing">Event</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      </Nav>
      <Button className='mr-2' variant="primary">Register</Button>
      <Button variant="dark">Admin</Button>
      
      </Navbar>
        
    );
};

export default Header;