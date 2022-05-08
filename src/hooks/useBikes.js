import { useEffect, useState } from "react"

const useBikes=(six)=>{
    const [bikes,setBikes]=useState([])
    useEffect( ()=>{
        let url=`https://radiant-temple-39327.herokuapp.com/bike${six}`
        if(!six)
        url=`https://radiant-temple-39327.herokuapp.com/bike`
        fetch(url)
        .then(res => res.json())
        .then(data => setBikes(data));
    }, [])
    return [bikes,setBikes]
}
export default useBikes;