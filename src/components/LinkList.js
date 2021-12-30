import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router-dom'

const LinkList = (props) => {
    return (
        <div className="d-flex align-items-center listbody">
            <Container fluid="true">
                <Row className="align-items-center">
                    {props.links.map(link => (
                        <Col key={link.id} className="item">
                            <LinkObj link={link} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
export default LinkList;

const LinkObj = (props) => {
    const { title, href, icon, external, desc } = props.link

    const navigate = useNavigate();

    const redirect = (href, external) => {
        if (external) {
            window.location.href = href;
        } else {
            navigate(href)
        }
    }
    return (
        <>
            <h3>{title}</h3>
            <img src={icon} alt={title} onClick={() => { redirect(href, external) }} />
            <h5 className="desc">{desc}</h5>
        </>
    )
}