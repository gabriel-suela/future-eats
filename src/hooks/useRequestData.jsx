import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initicalState, url) => {
    
    const [data,setData] = useState(initicalState)

    const getData = async() => {
        await axios.get(url,
            {headers:{
                auth: window.localStorage.getItem('token')
            }    
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data.message);
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return[data]
}