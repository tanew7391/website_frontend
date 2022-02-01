import React from "react";
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai"
import { SiAiohttp } from "react-icons/si"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Resume = (props) => {
    return (
        <div className="resume">
            <h1>Taylor Newman</h1>
            <h5>Guelph, Ontario</h5>
            <h5><a href="mailto:newmant@uoguelph.ca"><AiFillMail />  newmant@uoguelph.ca</a></h5>
            <h5><a href="http://linkedin.com/in/taylor-k-newman"><AiFillLinkedin /> LinkedIn</a></h5>
            <h5><a href="http://www.tnewman.ca"><SiAiohttp /> Personal Website</a></h5>
            <h5><a href="https://github.com/tanew7391/"><AiFillGithub /> GitHub</a></h5>


            <h3>Summary</h3>
            <p>Computer Science Major (CO-OP) and Applied Geomatics Minor at The University of Guelph</p>
            <h3>Skills</h3>
            <Container>
                <Row>
                    <Col>
                        <p><b>Languages:</b></p>
                    </Col>
                    <Col>
                        <p>C, Java, R, Python, JavaScript(ES6), HTML, CSS3, C++</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><b>Frameworks/Technologies:</b></p>
                    </Col>
                    <Col>
                        <p> ArcGIS, Node.JS, React, JUnit, Express, REST</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><b>Development Tools:</b></p>
                    </Col>
                    <Col>
                        <p>Linux, Github, VS Code, Gradle, Maven, Virtual Machines, Bash</p>
                    </Col>
                </Row>
            </Container>
            <h3>Professional Experience</h3>
            <h5>September 2021 – December 2021</h5>
            <h4>GIS Technician, Agriculture and Agri-food Canada, Ottawa, Ontario</h4>
            <ul>
                <li>
                    Developed and improved R and Python code for Canadian soil moisture modeling.
                </li>
                <li>
                    Profiled code and updated modeling formulas.
                </li>
                <li>
                    Improved model speeds by 10%.
                </li>
            </ul>
            <h3>Extra-Curriculars</h3>
            <h5>January 2019 – June 2019</h5>
            <h4>First Robotics Canada 2019 – Team 4917’s (Sir Lancerbot) Programming Team</h4>
            <ul>
                <li>
                    Developed software with C++ for interpreting video data and driving a robot autonomously.
                </li>
                <li>
                    Engaged in a collaborative development environment by using GitHub among a large group of developers.
                </li>
                <li>
                    These efforts allowed us to win two local competitions and progress to the world championship.
                </li>
            </ul>
            <h3>Projects</h3>
            <h5>December 2021</h5>
            <h4>Personal Website – <a href="/">http://www.tnewman.ca</a>    <a href="https://github.com/tanew7391/website_frontend"><AiFillGithub /></a></h4>
            <ul>
                <li>
                    Developed a website for showcasing my experiences and my personal hobbies.
                </li>
                <li>
                    Used React.JS for the front end and NodeJS for serving React and as an API.
                </li>
            </ul>
            <h5>June 2019</h5>
            <h4>TMMCity <a href="https://github.com/tanew7391/TMMCity"><AiFillGithub /></a></h4>
            <ul>
                <li>
                    Used the Slick2D game library to build a multi functional city simulator game with Java.
                </li>
                <li>
                    Collaborated and developed remotely with two other developers by using Skype and GitHub.
                </li>
            </ul>
            <h3>Education</h3>
            <h5>September 2019 - Present</h5>
            <p>
                University of Guelph - Bachelor of Computing, Computer Science - Applied Geomatics Minor
            </p>
            <p>Maintaining a 4.0 GPA</p>
            <p>Received the Dean’s Scholarship in fall 2021</p>
            <p>Dean’s Honor List Recipient 2019-2021</p>
        </div>


    )
}
export default Resume;