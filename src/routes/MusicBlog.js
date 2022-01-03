import React from "react";
import SideBar from "../components/SideBar";
import {Routes, Route} from "react-router-dom";
import Post from "../components/Post"

class MusicBlog extends React.Component {

    links = [
        {title:"awdwd", href:"boof"},
        {title:"ddd", href:"ddd"},
        {title:"www", href:"www"}
    ];

    render() {

        return(
        <>
            <div className="introCard">
                <h1>Music Blog</h1>
            </div>
            <SideBar links={this.links}/>
            <Routes>
                <Route path="/" element={
                    <>
                        <h4>Pick Blog Post</h4>
                    </>
                }/>
                <Route path="*" element={<Post />}/>
            </Routes>
        </>);
    }
}
export default MusicBlog;