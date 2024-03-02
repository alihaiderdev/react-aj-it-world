import axios from 'axios';
import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

// const PostsList = ({ url = "https://jsonplaceholder.typicode.com/posts" }) => {
const PostsList = (props) => {
    const { url = "https://jsonplaceholder.typicode.com/posts" } = props
    // console.log("url", url);
    const { data: posts, error, isLoading } = useFetch(url);
    // const [posts, setPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    // useEffect(() => {
    //     fetchPosts()
    // }, [])


    // const fetchPosts = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await axios("https://jsonplaceholder.typicode.com/posts");
    //         console.log(response, "response");
    //         setPosts(response.data);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     finally {
    //         setIsLoading(false);
    //     }
    // }

    // console.log({ isLoading, error, posts });

    return (
        <div>PostsList</div>
    )
}

export default PostsList