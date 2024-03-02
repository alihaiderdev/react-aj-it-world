import React, { useState } from 'react'
import NestedChild from './NestedChild';

const Child = ({ todos, user }) => {
    const [name, setName] = useState("");
    console.log("Child component render", name);

    return (
        <>
            <NestedChild todos={todos} user={user}/>
            <div>
                <h1>Child</h1>
                <p>your name is {name}</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </>

    )
}

export default Child