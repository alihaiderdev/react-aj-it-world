import axios from 'axios';
import { useEffect, useState } from 'react'

export const useFetch = (url, defaultValueForData = []) => {

    const [data, setData] = useState(defaultValueForData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios(url);
            // console.log(data, "data");
            setData(data);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    // console.log({ isLoading, error, data });

    return { isLoading: isLoading, error, data }
}
