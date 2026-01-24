import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setdata] = useState(null)

    useEffect(() =>{

        const fetchData = async () =>{
            
           
            const res = await fetch(url)
            
            const json = await res.json()
            
            setdata(json)
        }

        fetchData();
    }, [url])

    return {data};

}