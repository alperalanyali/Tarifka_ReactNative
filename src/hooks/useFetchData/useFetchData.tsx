import React,{useEffect,useState} from 'react';
import axios from 'axios'
const useFetchData = (url) => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchData = async ()=>{
        try {
            const response  = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {data,loading,error};
}

export default useFetchData;

