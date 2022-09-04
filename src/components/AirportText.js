import React, { useState, useEffect } from "react";
import AirportLetter from "./AirportLetter";


const AirportText = (props) => {

    let text = props.text.split("");
    const Wrapper = props.wrapper;


    //https://react-spring.dev/hooks/use-transition#multi-stage-transitions

    return (
        <div>
            <Wrapper>
                {text.map((value) => {
                    return <AirportLetter style="inline-block" letter={value} />
                })}
            </Wrapper>
        </div>
    )
}
export default AirportText;

