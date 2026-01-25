import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setdata] = useState(null)

    // 8 - Challenge
    const [itemId, setItemId] = useState(null)


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
        }else if(method === "DELETE"){
            setConfig({
            method,
            headers:{
                "Content-type": "application/json"
            },
           }) ;


           setMethod(method)
           setItemId(data)
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

        let json = null
        const httpRequest = async () => {
            if(method === "POST"){
            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)

            json = await res.json()  
            
        }else if(method === "DELETE"){

            const deleteUrl = `${url}/${itemId}`

            const res = await fetch(deleteUrl, config )

            json = await res.json()  

        }
        
        setCallFetch(json)

        }

        httpRequest();
    },[config, method, url])

    return {data, httpConfig, loading, error};

}