import React, { Component } from "react";
import NavBar from "./NavBar";

class SideBar extends Component {
    render() {
        return (
            <div className="sideBar">
                <h1>SideBar</h1>
                <NavBar />
            </div>
        );
    }
}
export default SideBar;