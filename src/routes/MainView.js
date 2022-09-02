import React, { Component } from "react";
import { v4 } from 'uuid'
import LinkList from "../components/LinkList";

class MainView extends Component {

    sections = [
        {
            title: "GitHub",
            href: "https://github.com/tanew7391",
            icon: "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png",
            desc: "My GitHub page.",
            external: true,
            id: v4()
        },
        {
            title: "Experience",
            href: "/experience",
            icon: "https://images.ctfassets.net/odf8gczm8w1b/6vOoCdjWb3xXkNK2iM9qpS/8256527705debc21639494a55f33baf3/experience.jpg",
            desc: "My resume and work experiences.",
            external: false,
            id: v4()
        },
        {
            title: "Blog",
            href: "/blog",
            desc: "My projects and interests.",
            icon: "https://images.ctfassets.net/odf8gczm8w1b/1aPdhfyY4LZpCtJP38bxab/a681f245635faad706f90f4b7c9ed5fe/music.jpg",
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