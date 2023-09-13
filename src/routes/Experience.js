import React from "react";
import LinkList from "../components/LinkList";
import Resume from "./Resume";
import { v4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import Navbar from "../components/NavBar"
import AAFC from "./AAFC";
import StatCan from "./StatCan";
import ProNav from "./ProNav";

class Experience extends React.Component {

    sections = [
        {
            title: "Resume",
            href: "resume",
            icon: "https://images.ctfassets.net/odf8gczm8w1b/3mw56maMNmWh3qEQRNakED/1d58651bf699e19514431838b8ee6178/clem-onojeghuo-fY8Jr4iuPQM-unsplash.jpg?fit=fill&h=400&w=400",
            desc: "My resume.",
            external: false,
            id: v4()
        },
        {
            title: "Agriculture Canada 2021",
            href: "aafc2021",
            icon: "https://images.ctfassets.net/odf8gczm8w1b/36wZTzUSm3BZS5IRXsaWDa/a04d60dabb8f8de208befe6dc7a4476c/AAFC.jpg",
            desc: "My work experience at Agriculture Canada 2021",
            external: false,
            id: v4()
        },
        {
            title: "Statistics Canada 2022",
            href: "statcan2022",
            icon: "https://images.ctfassets.net/odf8gczm8w1b/5UcBjtsMx1AXaoZQzd8m2x/f92ae0e03200f7ef223fad3cd29ccfa5/statscanlogoforweb.jpg?fit=fill&h=400&w=400",
            desc: "My work experience at Statistics Canada 2022",
            external: false,
            id: v4()
        },
        {
            title: "ProNavigator 2022",
            href: "pronavigator2023",
            icon: "https://www.pronavigator.ai/hs-fs/hubfs/pronavigator-logo-tri-blue-rgb-1.png?width=1759&height=963&name=pronavigator-logo-tri-blue-rgb-1.png",
            desc: "My work experience at ProNavigator 2023",
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
                <Route path="aafc2021" element={<AAFC />}/>
                <Route path="statcan2022" element={<StatCan />}/>
                <Route path="pronavigator2023" element={<ProNav />}/>
                <Route path="*" element={<Error errorVal={404}/>}/>

            </Routes>
        </>
        )
    }
}
export default Experience;