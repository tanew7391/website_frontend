import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./SideBar";
import Footer from "./Footer";
import MainView from "../routes/MainView";
import Error from "../routes/Error";
import Experience from "../routes/Experience";

class ViewContainer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainView />}/>
                        <Route path="/experience/*" element={<Experience />}/>
                        <Route path="*" element={<Error errorVal={404}/>}/>
                    </Routes>
                </Router>
                <Footer />
            </div>
        );
    }
}
export default ViewContainer;