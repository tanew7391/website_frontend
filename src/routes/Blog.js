import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Post from "../components/Post"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/NavBar"
import Error from "./Error";

const query = `
{
    blogPostCollection {
      items {
        id
        title
        sys {
            firstPublishedAt
        }
        blogImage {
            url
        }
      }
    }
}
`

const Blog = (props) => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch(`https://graphql.contentful.com/content/v1/spaces/odf8gczm8w1b/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer BJCVWsO-7uCvWUtgAbMxiv9CDHw2W9s8wKmEm0lzzkE",
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }
                setPosts(data.blogPostCollection.items);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="introCard">
                <h1>Blog</h1>
                <h2>My Interests On Display</h2>
            </div>
            <Container fluid>
                <Row>
                    <Col md="auto">
                        {/* <SideBar links={posts} /> */}
                    </Col>
                    <Col>
                        <Routes>
                            <Route path="/" element={
                                posts.map(post => {
                                    return (
                                        <>
                                            <Link to={post.id}>
                                            {post.blogImage &&
                                                <img href={post.blogImage.url}/>
                                            }
                                            <h1>{post.title}</h1>
                                            <p>{post.sys.firstPublishedAt}</p>
                                            </Link>
                                        </>

                                    )
                                })
                            } />
                            <Route path="/:postid" element={<Post />} />
                            <Route path="/*" element={<Error errorVal={404} />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>

        </>);

}
export default Blog;