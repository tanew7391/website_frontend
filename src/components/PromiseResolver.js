import React, { useEffect, useState } from "react";

const PromiseResolver = (props) => {
    let [body, setBody] = useState('# Loading');

    useEffect(() => {
        props.promise.then((data) => {
            setBody(data)
        });
    }, [props.promise])

    const Wrapper = props.wrapper;

    return (
        <Wrapper>{body}</Wrapper>
    )
}
export default PromiseResolver;