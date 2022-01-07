import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid style={{paddingLeft:"5%"}}>
                <Navbar.Brand as={NavLink} to="/">Taylor Newman</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/experience">Experiences</Nav.Link>
                    <Nav.Link as={NavLink} to="/blog">Music Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavBar;