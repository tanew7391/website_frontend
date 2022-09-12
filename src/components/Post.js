import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentfulRender from "./ContentfulRender";

const Post = (props) => {
    let params = useParams();
    let [postJson, setPostJson] = useState({ title: "Post Loading" })
    let [postRendered, setPostRendered] = useState(<hr />)


    useEffect(() => {
        let query = `
        {
            blogPostCollection (where: {id: "${params.postid}"} limit: 1) {
              items {
                title
                sys {
                    firstPublishedAt
                    publishedAt
                }
                blogImage {
                    url
                }
                blogBody {
                    json
                    links {
                    assets {
                      block {
                        contentType
                        sys {
                          id
                        }
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `

        ContentfulRender(query, setPostJson, setPostRendered);

    }, [])

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <>
            <div className="introCard">
                {postJson.title &&
                    <h1>{postJson.title}</h1>
                }
                {postJson.blogImage &&
                    <img src={postJson.blogImage.url} />
                }
                {postJson.sys && postJson.sys.firstPublishedAt &&
                    <p>Originally Posted: {(new Date(postJson.sys.firstPublishedAt)).toDateString(options)}</p>
                }
                {postJson.sys && postJson.sys.publishedAt && postJson.sys.firstPublishedAt && postJson.sys.publishedAt !== postJson.sys.firstPublishedAt &&
                    <p>Modified On: {(new Date(postJson.sys.publishedAt)).toDateString(options)}</p>
                }
            </div>


            <div className="content">
                {postRendered}
            </div>
        </>


    );
}
export default Post;