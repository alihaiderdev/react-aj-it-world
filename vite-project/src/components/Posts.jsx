import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios({ url: "posts", method: "GET",});
            // const data = await response.json();
            console.log("posts", data);
            setPosts(data);
            // setIsLoading(false);
        } catch (error) {
            console.log("error", error);
            setError(error.message);
            // setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    console.log("render", { posts, error, isLoading });

    useEffect(() => {
        console.log("useEffect");
        getPosts();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div style={{ color: "red", fontWeight: "bolder" }}>{error}</div>
    } else {
        return (
            <div>
                {posts.map((post, index) => {
                    console.log({ post });
                    return (
                        <div key={post.id} style={{ border: "2px solid green", margin: "1rem 0", padding: "0.5rem", borderRadius: "0.5rem" }}>
                            <h1>{post.id}</h1>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }


}

export default Posts