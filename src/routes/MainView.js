import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
        return (
            <>
                <h1>Taylor Newman</h1>
                <LinkList links={this.sections} />
            </>
        )
    }
}
export default MainView;

const LinkList = (props) => {
    return (
        <div className="d-flex align-items-center listbody">
            <Container fluid="true">
                <Row className="align-items-center">
                    {props.links.map(link => (
                        <Col key={link.id}>
                                <LinkObj link={link} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

const LinkObj = (props) => {
    const { title, href, icon, external } = props.link

    if (external) {
        return (
            <>
                <a href={href} className="d-flex justify-content-center onHover">
                    <img src={icon} alt={title} />
                </a>
                <h4 className="desc">{title}</h4>
            </>
            
            )
    }
    return (<Link to={href} className="d-flex justify-content-center"><img src={icon} alt={title} /></Link>)

}