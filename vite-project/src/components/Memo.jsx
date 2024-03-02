import { useMemo, useState } from "react";

export const Memo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((previousTodos) => [...previousTodos, "New Todo"]);
    };
    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button className="bg-red-400" onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment} className="bg-red-400">+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...", num, new Date().toLocaleTimeString());
    for (let i = 0; i < 1000000000; i++) {
        // num += 1;
        num = num + 1;
    }
    console.log({ num }, new Date().toLocaleTimeString());
    return num;
};

