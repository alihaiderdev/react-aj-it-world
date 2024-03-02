import React, { useCallback, useState } from 'react'
import CallbackTodos from './CallbackTodos';

const Callback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    console.log({ todos });
    return (
        <>
            <CallbackTodos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment} className='bg-green-500'>+</button>
            </div>
        </>
    );
}

export default Callback