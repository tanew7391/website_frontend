import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types"
import MarkDownPromise from "./MarkDownPromise";

const Post = (props) => {
    let params = useParams();
    let [post, setPost] = useState({ title: "Post Loading" })
    let [postBody, setPostBody] = useState(<h1>Nothing to Display!</h1>)


    useEffect(() => {
        let query = `
        {
            blogPostCollection (where: {id: "${params.postid}"} limit: 1) {
              items {
                title
                sys {
                    firstPublishedAt
                    publishedAt
                    publishedVersion
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

        const syncFetch = async (subset) => {
            return await fetch(subset.url)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText)
                    }
                    return response.text()
                })
                .then((data) => {
                    return data;
                }).catch((error) => {
                    return error;
                })
            }

        fetch(`https://graphql.contentful.com/content/v1/spaces/odf8gczm8w1b/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer BJCVWsO-7uCvWUtgAbMxiv9CDHw2W9s8wKmEm0lzzkE",
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                    setPost({ title: "No Post Found!" });
                }
                setPost(data.blogPostCollection.items[0]);
                const tempPost = data.blogPostCollection.items[0];
                const options = {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: (node) => {
                            let subset = tempPost.blogBody.links.assets.block.filter((element) => {
                                return element.sys.id === node.data.target.sys.id
                            })[0]
                            console.log(subset)
                            if (subset.contentType === "image/jpeg") {
                                return <img src={subset.url} />
                            } else if (subset.contentType === "text/markdown") {
                                let assetPromise = syncFetch(subset);
                                return <MarkDownPromise promise={assetPromise}/>
                            }
                        }
                    }
                };
                setPostBody(documentToReactComponents(tempPost.blogBody.json, options))
            });

    }, [])

    return (
        <>
            <h1>{post.title}</h1>
            {post.blogImage &&
                <img src={post.blogImage.url} />
            }
            {post.firstPublishedAt &&
                <p>{post.firstPublishedAt}</p>
            }
            {postBody}
        </>


    );
}
export default Post;