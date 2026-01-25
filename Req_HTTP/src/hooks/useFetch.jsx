import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setdata] = useState(null)

    // 5 - refact useFecth
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 7 - handle error
    const [error, setError] = useState(null)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    const httpConfig = (data, method) => {
        if(method === "POST"){
           setConfig({
            method,
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
           }) ;


           setMethod(method)
        }
    }


    useEffect(() =>{

        const fetchData = async () =>{
            //6 - loading
            setLoading(true)
           try {
            const res = await fetch(url)
            
            const json = await res.json()
            
            setdata(json);

        } catch (error) {
            setError("Houve algum erro ao carregar os dados")
        }
        
        setLoading(false)
        }

        fetchData();
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST"){
            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)

            const json = await res.json()

            setCallFetch(json)
        }
        }

        httpRequest();
    },[config, method, url])

    return {data, httpConfig, loading, error};

}