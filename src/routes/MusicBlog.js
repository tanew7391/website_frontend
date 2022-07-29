import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Post from "../components/Post"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/NavBar"


const MusicBlog = (props) => {
    const [links, setLinks] = useState(null);


    useEffect(() => {
        fetch('/api/blog-post-list')
            .then(res => res.json())
            .then((data) => {
                setLinks(data);
            })
            .catch(console.log)
    }, []);

    return (
        <>
            <Navbar />
            <div className="introCard">
                <h1>Music Blog</h1>
            </div>
            <Container fluid>
                <Row>
                    <Col md="auto">
                        <SideBar links={links} />
                    </Col>
                    <Col>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <h4>Pick Blog Post</h4>
                                </>
                            } />
                            <Route path="/:postid" element={<Post />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>

        </>);

}
export default MusicBlog;