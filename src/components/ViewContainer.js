import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import MainView from "../routes/MainView";
import Error from "../routes/Error";
import Experience from "../routes/Experience";
import Blog from "../routes/Blog"

class ViewContainer extends Component {
    render() {
        return (
            <div className="main">
                <div style={{flex:"1 0 auto"}}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<MainView />} />
                            <Route path="/experience/*" element={<Experience />} />
                            <Route path="/blog/*" element={<Blog />} />
                            <Route path="*" element={<Error errorVal={404} />} />
                        </Routes>
                    </Router>
                </div>
                <div style={{flexShrink:0}}>
                    <Footer />
                </div>
            </div>

        );
    }
}
export default ViewContainer;