import React from "react";
import SideBar from "../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Post from "../components/Post"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/NavBar"


class MusicBlog extends React.Component {

    state = {
        links: []
    }

    componentDidMount() {
        fetch('/api/blog-post-list')
        .then(res => res.json())
        .then((data) => {
          this.setState({ links: data })
        })
        .catch(console.log)
    }

    render() {

        return (
            <>
                <Navbar/>
                <div className="introCard">
                    <h1>Music Blog</h1>
                </div>
                <Container fluid>
                    <Row>
                        <Col md="auto">
                            <SideBar links={this.state.links}/>
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
}
export default MusicBlog;