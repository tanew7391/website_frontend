import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from 'uuid'

class MainView extends Component {

    sections = [
        {
            title: "GitHub",
            href: "https://github.com/tanew7391",
            icon: "https://avatars.githubusercontent.com/u/7423736?v=4",
            external: true,
            id: v4()
        }, 
        {
            title: "Resume",
            href: "/resume",
            icon: "https://thumbs.dreamstime.com/b/written-paper-icon-vector-sign-symbol-isolated-white-back-background-your-web-mobile-app-design-logo-concept-133754707.jpg",
            external: false,
            id: v4()
        }, 
        {
            title: "Music Blog",
            href: "/blog",
            icon: "https://media.istockphoto.com/vectors/music-note-icon-on-white-background-vector-vector-id1141530936",
            external: false,
            id: v4()
        }
    ]

    render() {
        return( 
            <>
                <h1>Taylor Newman</h1>
                <div className="centered outer">
                    <div className="centered middle">
                        <div className="centered inner">
                            <LinkList links={this.sections}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainView;

const LinkList = (props) => {
    return (
        <div className="listbody">
            <ul>
                {props.links.map(link => (
                    <li key={link.id}>
                        <LinkObj link={link}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const LinkObj = (props) => {
    const { title, href, icon, external} = props.link

    if(external) {
        return (<a href={href}><img src={icon} alt={title}/></a>)
    }
    return (<Link to={href}><img src={icon} alt={title}/></Link>)

}