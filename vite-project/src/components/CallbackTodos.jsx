import { memo } from "react";

const CallbackTodos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo} className='bg-green-500'>Add Todo</button>
        </>
    );
};

export default memo(CallbackTodos);