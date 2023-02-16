import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url, token) => {
    
    const [data,setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [reload, setReload] = useState(undefined)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url, {
            headers:{
                auth: token
            }
        }).then((res)=>{
            setIsLoading(false)
            setData(res.data)
        }).catch((err)=>{
            setIsLoading(false)
            setError(err.response.data.message.message)
        })
    },[url, reload])

    return[data, error, isLoading, reload, setReload]
}