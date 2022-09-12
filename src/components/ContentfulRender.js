import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import PromiseResolver from "./PromiseResolver";
import ReactMarkdown from "react-markdown";

const ContentfulRender = (query, setPostJson, setPostRendered) => {

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
            if (errors || !data.blogPostCollection.items[0]) {
                setPostJson({ title: "No Post Found!" });
                return;
            }

            setPostJson(data.blogPostCollection.items[0]);
            const tempPost = data.blogPostCollection.items[0];
            const options = {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => {
                        let subset = tempPost.blogBody.links.assets.block.filter((element) => {
                            return element.sys.id === node.data.target.sys.id
                        })[0]
                        if (subset.contentType === "image/jpeg" || subset.contentType === 'image/png') {
                            return <img src={subset.url} />;
                        } else if (subset.contentType === "text/markdown") {
                            let assetPromise = syncFetch(subset);
                            return <PromiseResolver promise={assetPromise} wrapper={<ReactMarkdown/>}/>;
                        } else if (subset.contentType === 'text/plain') {
                            const extension = subset.url.substring(subset.url.lastIndexOf('.')+1);
                            let assetPromise = syncFetch(subset);
                            //Todo: add code highlighting by using the Code component.
                            return <PromiseResolver promise={assetPromise} wrapper={'code'}/>;
                        }
                    }
                }
            };
            setPostRendered(documentToReactComponents(tempPost.blogBody.json, options))
        });

    return
}
export default ContentfulRender;