import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PostCard = ({ post, shouldViewDetailsButtonVisible = true }) => {
    const navigate = useNavigate();
    const goToSpecificPostPage = () => {
        navigate(`/posts/${post.id}?title=${post.title}&id=${post.id}`, { state: { post: post } })
        // to={`/posts/${post.id}`} state={{ info: { name: "ali", age: 27 } }}
    }
    return (
        <div style={{ border: "2px solid black", borderRadius: "0.5rem", padding: "1rem" }}>
            <div><strong>ID: </strong> {post.id} </div>
            <div><strong>Title: </strong> {post.title} </div>
            <div><strong>Description: </strong> {post.body} </div>
            {/* {shouldViewDetailsButtonVisible && <div className='mt-4 flex justify-end'> <Link className="bg-green-500 p-2" to={`/posts/${post.id}`} state={{ info: { name: "ali", age: 27 } }}>View Details</Link></div>} */}
            {shouldViewDetailsButtonVisible && <div className='mt-4 flex justify-end'>
                <button className="bg-green-500 p-2 text-white" onClick={goToSpecificPostPage}>View Details</button></div>}
        </div>
    )
}

export default PostCard