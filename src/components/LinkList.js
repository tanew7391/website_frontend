import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router-dom'

const LinkList = (props) => {



    return (
        <div className="d-flex align-items-center listbody">
            <Container fluid="md">
                <Row id="titles" className="align-items-center">
                    {props.links.map(link => (
                        <Col key={link.id} id={link.id + 'title'} className="item">
                            <h3>{link.title}</h3>
                        </Col>
                    ))}
                </Row>
                <Row className="align-items-center">
                    {props.links.map(link => (
                        <Col key={link.id} className="item">
                            <LinkObj link={link} />
                        </Col>
                    ))}
                </Row>
                <Row className="align-items-center">
                    {props.links.map(link => (
                        <Col key={link.id} id={link.id + 'desc'} className="item">
                            <h5 className="desc">{link.desc}</h5>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
export default LinkList;

const LinkObj = (props) => {
    const { title, href, icon, external, id } = props.link

    const navigate = useNavigate();

    const redirect = (href, external) => {
        if (external) {
            window.location.href = href;
        } else {
            navigate(href)
        }
    }

    const showDescription = (id) => {
        let element = document.getElementById(id + 'desc').firstChild;
        element.style.visibility = "visible";
        element.style.opacity = "1";

        const elements = document.getElementById('titles').children;
        Array.prototype.map.call(elements, (item) => { //htmlCollection, https://chuckdries.medium.com/traversing-the-dom-with-filter-map-and-arrow-functions-1417d326d2bc
            if(item.id !== id + 'title'){
                item.style.visibility = "hidden"
                item.style.opacity = "0";
            }
        });
    }

    const hideDescription = (id) => {
        let element = document.getElementById(id + 'desc').firstChild;
        element.style.visibility = "hidden";
        element.style.opacity = "0";
        const elements = document.getElementById('titles').children;
        Array.prototype.map.call(elements, (item) => {
            item.style.visibility = "visible";
            item.style.opacity = "1";
        });
    }

    return (
        <img src={icon}
            alt={title}
            onClick={() => { redirect(href, external) }}
            onMouseOver={() => { showDescription(id) }}
            onMouseOut={() => { hideDescription(id) }} />
    )
}