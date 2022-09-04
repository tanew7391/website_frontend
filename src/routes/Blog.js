import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { v4 } from "uuid";
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
            publishedAt
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

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col md="auto">
                        {/* <SideBar links={posts} /> */}
                    </Col>
                    <Col>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <div className="introCard">
                                        <h1>Blog</h1>
                                        <h2>My Interests On Display</h2>
                                    </div>
                                    {posts.map(post => {
                                        return (
                                            <div className="blogentry" key={v4()}>
                                                <Link to={post.id}>
                                                    <div className="inline-block">
                                                        {post.blogImage &&
                                                            <img src={post.blogImage.url} />
                                                        }
                                                        <h1 className="inline-block">{post.title}</h1>
                                                    </div>
                                                    <div>
                                                        {post.sys && post.sys.firstPublishedAt &&
                                                            <p className="inline-block">First Published: {(new Date(post.sys.publishedAt)).toDateString(options)}</p>
                                                        }
                                                        {post.sys && post.sys.publishedAt && post.sys.firstPublishedAt && post.sys.publishedAt !== post.sys.firstPublishedAt &&
                                                            <p className="inline-block">&ensp; Modified On: {(new Date(post.sys.publishedAt)).toDateString(options)}</p>
                                                        }
                                                    </div>
                                                </Link>
                                            </div>

                                        )
                                    })}
                                </>
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