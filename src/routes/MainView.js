import React, { Component } from "react";
import { v4 } from 'uuid'
import LinkList from "../components/LinkList";
import ExperienceImg from '../static/img/experience.jpg'
import MusicImg from "../static/img/music.jpg"

class MainView extends Component {

    sections = [
        {
            title: "GitHub",
            href: "https://github.com/tanew7391",
            icon: "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png",
            desc: "Click to go to my GitHub page.",
            external: true,
            id: v4()
        },
        {
            title: "Experience",
            href: "/experience",
            icon: ExperienceImg,
            desc: "Click to see my resume and work experiences.",
            external: false,
            id: v4()
        },
        {
            title: "Music Blog",
            href: "/blog",
            desc: "Click to see what I'm listening to right now.",
            icon: MusicImg,
            external: false,
            id: v4()
        }
    ]

    render() {
        return (
            <>
                <div className="introCard">
                    {/* <img src="https://avatars.githubusercontent.com/u/7423736?v=4"/> */}
                    <h1>Taylor Newman</h1>
                    <h4>Third Year Computer Science Student at the University of Guelph</h4>
                </div>
                <LinkList links={this.sections} />
            </>
        )
    }
}
export default MainView;