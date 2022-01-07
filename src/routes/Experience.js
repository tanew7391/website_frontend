import React from "react";
import LinkList from "../components/LinkList";
import Resume from "./Resume";
import { v4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Workterm from "./Workterm";
import Error from "./Error";
import Navbar from "../components/NavBar"

class Experience extends React.Component {

    sections = [
        {
            title: "Resume",
            href: "resume",
            icon: "https://thumbs.dreamstime.com/b/written-paper-icon-vector-sign-symbol-isolated-white-back-background-your-web-mobile-app-design-logo-concept-133754707.jpg",
            desc: "Click to see my resume.",
            external: false,
            id: v4()
        },
        {
            title: "Agriculture Canada 2021",
            href: "aafc2021",
            icon: "https://cdn.wallpapersafari.com/36/67/LX2C7J.jpg",
            desc: "My work experience at Agriculture Canada 2021",
            external: false,
            id: v4()
        }
    ]

    render () {
        return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <>
                        <h1 className="introCard">Experiences</h1>
                        <LinkList links={this.sections} />
                    </>
                }/>
                <Route path="resume" element={<Resume />}/>
                <Route path="aafc2021" element={<Workterm />}/>
                <Route path="*" element={<Error errorVal={404}/>}/>

            </Routes>
        </>
        )
    }
}
export default Experience;