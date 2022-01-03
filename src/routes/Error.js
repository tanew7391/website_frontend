import React from "react";

const Error = (props) => {
    const {errorVal} = props;
    if (errorVal === 404){
        return(<h1 className="introCard">Sorry! That page doesn't exist.</h1>)
    }
    return(<h1 className="titleCard">Error occured: {props.errorVal}</h1>)
}
export default Error