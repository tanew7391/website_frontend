import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types"
import MarkDownPromise from "./MarkDownPromise";


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
                return
            }

            setPostJson(data.blogPostCollection.items[0]);
            const tempPost = data.blogPostCollection.items[0];
            const options = {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => {
                        let subset = tempPost.blogBody.links.assets.block.filter((element) => {
                            return element.sys.id === node.data.target.sys.id
                        })[0]
                        if (subset.contentType === "image/jpeg") {
                            return <img src={subset.url} />
                        } else if (subset.contentType === "text/markdown") {
                            let assetPromise = syncFetch(subset);
                            return <MarkDownPromise promise={assetPromise} />
                        }
                    }
                }
            };
            setPostRendered(documentToReactComponents(tempPost.blogBody.json, options))
        });

    return
}
export default ContentfulRender;