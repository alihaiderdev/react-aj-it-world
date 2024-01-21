import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // const getTodos = async () => {
    //     // setIsLoading(true);
    //     try {
    //         const { data } = await axios('https://jsonplaceholder.typicode.com/todos');
    //         console.log("data", data);
    //         setTodos(data);
    //         // setIsLoading(false);
    //     } catch (error) {
    //         console.log("error", error);
    //         setError(error.message);
    //         // setIsLoading(false);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    const getUsers = async () => {
        try {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users');
            console.log("users", data);
        } catch (error) {
            console.log("error", error);
        }
    }
    const getTodos = async () => {
        try {
            const { data } = await axios('https://jsonplaceholder.typicode.com/todos');
            console.log("todos", data);
        } catch (error) {
            console.log("error", error);
        }
    }


    const getData = async (endPoint) => {
        try {
            // const { data } = await axios(`https://jsonplaceholder.typicode.com/${endPoint}`);
            // const { data } = await axios(`${baseUrl}${endPoint}`);
            const { data } = await axios({ url: endPoint, method: "GET", });
            console.log("data", data);
        } catch (error) {
            console.log("error", error);
        }
    }



    console.log("render", { todos, error, isLoading });

    useEffect(() => {
        console.log("useEffect");
        // getTodos();
        // getUsers();
        getData("todos");
        getData("users");
    }, []);

    return (
        <div>Todos</div>
    )
}

export default Todos