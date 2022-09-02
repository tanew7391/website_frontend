import React, { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai"
import ReactMarkdown from "react-markdown";
import ContentfulRender from "../components/ContentfulRender";


const StatCan = (props) => {
    let [postJson, setPostJson] = useState({ title: "Post Loading" })
    let [postRendered, setPostRendered] = useState(<hr/>)


    useEffect(() => {
        let query = `
        {
            blogPostCollection (where: {id: "statistics-canada"} limit: 1) {
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
                <h1>Statistics Canada</h1>
                <h2>IT Specialist</h2>
                <h3>CO-OP Position</h3>
                <h3>May 16, 2022 - August 31, 2022</h3>
            </div>
            <div className="content">
                {postRendered &&
                    postRendered
                }
            </div>
        </>
    )
}
export default StatCan;