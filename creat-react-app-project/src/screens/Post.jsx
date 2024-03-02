import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard';

const Post = () => {
    let [searchParams, setSearchParams] = useSearchParams();


    const { hash, search, pathname, state: { post } } = useLocation();
    console.log(post, search);
    const { postId } = useParams();
    const navigate = useNavigate();
    // const { data: post, isLoading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, null)
    // console.log({ post, isLoading, error });

    const back = () => {
        navigate('/posts');
    }
    // const back1 = async () => {
    //     navigate('/posts');
    // }
    // function back2() {
    //     navigate('/posts');
    // }
    // async function back3() {
    //     navigate('/posts');
    // }

    const setFilters = () => {
        setSearchParams("name=ali&age=24")
    }

    return (
        <>
            <button onClick={setFilters}>Set Filters</button>
            {/* <div className='mb-4'> <Link to="/posts" className='bg-black py-2 px-4 rounded text-white'>Back</Link></div> */}
            <div className='mb-4'> <button onClick={back} className='bg-black py-2 px-4 rounded text-white'>Back</button></div>
            {/* {isLoading && <h1>Loading...</h1>}
            {error && <p className='text-red-500 font-bold'>{error}</p>} */}
            {post &&
                // <div style={{ border: "2px solid black", borderRadius: "0.5rem", padding: "1rem" }}>
                //     <div><strong>ID: </strong> {post.id} </div>
                //     <div><strong>Title: </strong> {post.title} </div>
                //     <div><strong>Description: </strong> {post.body} </div>
                // </div>
                <PostCard post={post} shouldViewDetailsButtonVisible={false} />
            }
        </>
    )
}

export default Post