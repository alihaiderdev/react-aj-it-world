import axios from 'axios';
import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

const TodosList = () => {
    const { data: todos, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos");

    // const [todos, setTodos] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    // useEffect(() => {
    //     fetchTodos()
    // }, [])


    // const fetchTodos = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await axios("https://jsonplaceholder.typicode.com/todos");
    //         console.log(response, "response");
    //         setTodos(response.data);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     finally {
    //         setIsLoading(false);
    //     }
    // }


    // console.log({ isLoading, error, todos });

    return (
        <div>TodosList</div>
    )
}

export default TodosList