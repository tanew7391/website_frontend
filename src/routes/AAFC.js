import React, { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai"
import ReactMarkdown from "react-markdown";

const AAFC = (props) => {
    const [content, setContent] = useState('# Loading');


    useEffect(() => {
        fetch('https://assets.ctfassets.net/odf8gczm8w1b/2Ce4FBU6JzPE6W4YeqlLrQ/4fabbe60264e1f24a05c22b0fae497f8/AAFC.md')
        .then(res => res.text())
        .then((data) => {
            setContent(data);
        })
        .catch(console.log)
    }, []);

    return (
        <>
            <div className="introCard">
                <h1>Agriculture and Agri-Food Canada</h1>
                <a href="https://twitter.com/aafc_canada" style={{ fontSize: "50px" }}><AiFillTwitterCircle /></a>
                <h2>Geomatics Technician</h2>
                <h3>CO-OP Position</h3>
                <h3>September 7, 2021 - December 23, 2021</h3>
            </div>
            <div className="content">
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </div>
        </>
    )
}
export default AAFC;