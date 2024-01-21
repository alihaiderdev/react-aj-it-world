import React, { useEffect, useState } from 'react'

const Post = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const [post, setPost] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getPost = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
            const data = await response.json();
            console.log("posts", data);
            setPost(data);
            // setIsLoading(false);
        } catch (error) {
            console.log("error", error);
            setError(error.message);
            // setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    console.log("render", { post, error, isLoading });

    useEffect(() => {
        console.log("useEffect");
        getPost();
        return () => { console.log("cleanup") }
    }, [count])


    const add = () => {
        if (!(count >= 100)) {
            setCount((prevValue) => prevValue + 1)
        }
    }

    function subtract() {
        setCount((prevValue) => prevValue - 1)
    }
    return (
        <>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <button onClick={add}>Add</button>
            {count}
            <button onClick={subtract} disabled={count <= 1}>Subtract</button>
            {isLoading && <div>Loading...</div>}
            {error ? <h3 style={{ color: "red", fontWeight: "bolder" }}>{error}</h3> : (
                <div>
                    <h1>{post.id}</h1>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </>

    )
}

export default Post