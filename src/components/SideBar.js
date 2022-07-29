import React, { Component } from "react";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <Nav className="flex-column sidebar">
                {this.props.links ? this.props.links.map(link => (
                    <Nav.Link as={Link} to={link.href} className="navLink">{link.title}</Nav.Link>
                )) : <p>Loading</p>}
            </Nav>
        );
    }
}
export default SideBar;