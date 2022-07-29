import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Post = (props) => {
    let params = useParams();
    let [post, setPost] = useState('Loading')

    useEffect(() => {
        fetch('/api/posts/' + params.postid)
            .then((response) => {
                return response.text();
            }).then((response) => {
                setPost(response);
            })
            .catch((msg) => {
                console.log(msg)
                setPost('No Post Found!');
            })
    }, [params.postid])
    return (
        <ReactMarkdown>{post}</ReactMarkdown>
    );
}
export default Post;