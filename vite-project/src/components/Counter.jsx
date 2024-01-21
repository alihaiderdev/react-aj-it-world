import React, { useState } from 'react'

const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);
    // const count = useState("ali");
    // console.log("count: ", count[0], count[1]);
    // console.log("count: ", count, setCount);
    const add = () => {
        // count = count + 1;
        // setCount(count + 1);
        // setCount((prevValue) => {
        //     console.log({ prevValue });
        //     return prevValue + 1
        // });
        // OR 
        setCount((prevValue) => prevValue + 1);
        // console.log("count add", count);
    }

    const subtract = () => {
        // count = count - 1;
        // setCount(count - 1);
        // setCount((prevValue) => {
        //     console.log({ prevValue });
        //     return prevValue - 1
        // });
        // OR 
        setCount((prevValue) => prevValue - 1);

        // console.log("count subtract", count);
    }
    console.log("render");
    return (
        <div className='counter-container'>
            {/* <button onclick="add()">Add</button>  */}
            <button onClick={add}>Add</button>
            {count}
            <button onClick={subtract}>Subtract</button>
         
        </div>
    )
}

export default Counter