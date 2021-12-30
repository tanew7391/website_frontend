import React, { Component } from "react";
import { v4 } from 'uuid'
import LinkList from "../components/LinkList";

class MainView extends Component {

    sections = [
        {
            title: "GitHub",
            href: "https://github.com/tanew7391",
            icon: "https://avatars.githubusercontent.com/u/7423736?v=4",
            desc: "Click to go to my GitHub page.",
            external: true,
            id: v4()
        },
        {
            title: "Experience",
            href: "/experience",
            icon: "https://thumbs.dreamstime.com/b/written-paper-icon-vector-sign-symbol-isolated-white-back-background-your-web-mobile-app-design-logo-concept-133754707.jpg",
            desc: "Click to see my resume and work experiences.",
            external: false,
            id: v4()
        },
        {
            title: "Music Blog",
            href: "/blog",
            desc: "Click to see what I'm listening to right now.",
            icon: "https://media.istockphoto.com/vectors/music-note-icon-on-white-background-vector-vector-id1141530936",
            external: false,
            id: v4()
        }
    ]

    render() {
        return (
            <>
                <h1>Taylor Newman</h1>
                <LinkList links={this.sections} />
            </>
        )
    }
}
export default MainView;