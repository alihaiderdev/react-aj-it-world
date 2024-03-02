import React, { useContext } from 'react'
import { GlobalContext } from '../App';

const AnotherNestedChild = ({ todos, user }) => {
    const globalState = useContext(GlobalContext);
    console.log("AnotherNestedChild component render", todos, { globalState });

    return (
        <div className='bg-yellow-300'>
            hello, {user}
            {todos.map((todo) => {
                console.log("todo", todo);
                return (
                    <div key={todo.id} className="py-2">
                        {todo.title}
                    </div>
                )
            })}</div>
    )
}

export default AnotherNestedChild