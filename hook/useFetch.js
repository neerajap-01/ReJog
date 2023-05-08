import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "react-native-dotenv";
//
// const rapidApiKey = RAPID_API_KEY;


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '521fe82e58mshd6fd21b5ca29af5p1108f8jsnf4ab29218653',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;