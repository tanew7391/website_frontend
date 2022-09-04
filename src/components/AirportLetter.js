import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { useTransition, animated } from "react-spring";



const AirportLetter = (props) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-= "
    const [letter, setLetter] = useState(alphabet.charAt(Math.random() * alphabet.length))
    const correctLetter = props.letter;


    const nextChar = (scrambled) => {
        if (scrambled === correctLetter) {
            return scrambled
        }
        scrambled = alphabet[(alphabet.indexOf(scrambled) + 1) % alphabet.length]
        console.log(scrambled)
        return scrambled
    }

    const transitions = useTransition(letter, {
        from: { opacity: 0.25, transform: `translate3d(0px, -30px, 0px)`},
        enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)`},
        leave: { opacity: 0.25, transform: `translate3d(0px, 30px, 0px)`},
        config: { "tension": 500, "friction": 13, "mass": 0.1, clamp: true },
        keys: v4(),
        exitBeforeEnter: true,

        onStart: () => {
            if(letter !== correctLetter || letter == null){
                setLetter((letter) => nextChar(letter))
            }
        },
    })

/*     useEffect(() => {
        if(letter !== correctLetter || letter == null){
            setTimeout(() => {
                setLetter((letter) => nextChar(letter))
            }, 2000)
        }
    }, [letter]) */

    return (
        <div style={{ display: 'flex' }}>
            {transitions((sty, item) => (
                <div key={v4()}>
                    <animated.div
                        style={sty}>
                        {item}
                    </animated.div>
                </div>
            ))}
        </div>
    )
}
export default AirportLetter;

/* {
    opacity: opacity.to({
        range: [0.25, 0.5, 1],
        output: [0, 0.5, 0]
    }),
    transform: opacity
        .to({
            range: [0, 0.80, 1],
            output: [-40, -10, 0]
        })
        .to(y => `translate3d(0,${y}px,0)`),
} */