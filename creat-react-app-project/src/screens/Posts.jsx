import React from 'react'
import { useFetch } from '../hooks/useFetch'
import PostCard from '../components/PostCard';

const Posts = () => {
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
    // console.log({ data, isLoading, error });
    // if (isLoading) {
    //     return <h1>Loading...</h1>
    // }

    // if (error) {
    //     return <h1>{error}</h1>
    // }

    // return (
    //     <>
    //         <Header />
    //         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
    //             {(data || []).map(post => <div key={post.id} style={{ border: "2px solid black", borderRadius: "0.5rem", padding: "1rem" }}>
    //                 <div><strong>ID: </strong> {post.id} </div>
    //                 <div><strong>Title: </strong> {post.title} </div>
    //                 <div><strong>Description: </strong> {post.body} </div>
    //                 {/* <div className='mt-4 flex justify-end'> <a className="bg-green-500 p-2" href={`/posts/${post.id}`}>View Details</a></div> */}
    //                 <div className='mt-4 flex justify-end'> <Link className="bg-green-500 p-2" to={`/posts/${post.id}`}>View Details</Link></div>
    //             </div>)}
    //         </div>
    //     </>
    // )
    return <>
        {/* <Header /> */}
        {isLoading && <h1>Loading...</h1>}
        {error && <p className='text-red-500 font-bold'>{error}</p>}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {(data || []).map(post =>
                // <div key={post.id} style={{ border: "2px solid black", borderRadius: "0.5rem", padding: "1rem" }}>
                //     <div><strong>ID: </strong> {post.id} </div>
                //     <div><strong>Title: </strong> {post.title} </div>
                //     <div><strong>Description: </strong> {post.body} </div>
                //     <div className='mt-4 flex justify-end'> <Link className="bg-green-500 p-2" to={`/posts/${post.id}`}>View Details</Link></div>
                // </div>
                <div key={post.id}>
                    <PostCard post={post} />
                </div>
            )}
        </div>
    </>
}

export default Posts