import React, { useEffect, useState } from "react";
import ContentfulRender from "../components/ContentfulRender";


const ProNav = (props) => {
    let [postJson, setPostJson] = useState({ title: "Post Loading" })
    let [postRendered, setPostRendered] = useState(<hr/>)


    useEffect(() => {
        let query = `
        {
            blogPostCollection (where: {id: "pronavigator"} limit: 1) {
              items {
                sys {
                    firstPublishedAt
                    publishedAt
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

    return (
        <>
            <div className="introCard">
                <h1>ProNavigator</h1>
                <h2>Software Developer</h2>
                <h3>CO-OP Position</h3>
                <h3>January 2, 2023 - August 25, 2023</h3>
            </div>
            <div className="content">
                {postRendered &&
                    postRendered
                }
            </div>
        </>
    )
}
export default ProNav;
