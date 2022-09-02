import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkDownPromise = (props) => {
    let [body, setBody] = useState('# Loading');

    useEffect(() => {
        props.promise.then((data) => {
            setBody(data)
        });
    }, [props.promise])

    return (
        <ReactMarkdown>{body}</ReactMarkdown>
    )
}
export default MarkDownPromise;